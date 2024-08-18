import Stripe from "stripe";
import { addClient } from "../_lib/data-services";
import { NextResponse } from "next/server";
import { getStripeProductById } from "../_lib/actions";

const stripe = new Stripe(process.env.STRIPE_KEY);

export async function POST(req) {
  const sig = req.headers.get("stripe-signature");

  let event;

  try {
    const body = await req.text();
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK
    );
  } catch (err) {
    if (err) throw new Error("The webhook was not properly initiated");
    return NextResponse.json({ error: "Webhook Error" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

    const coachingProducts = await Promise.all(
      lineItems.data.map(async (lineItem) => {
        if (lineItem.description.includes("Date")) {
          return await getStripeProductById(lineItem.price.id);
        }
        return null;
      })
    );

    const coachingItems = lineItems.data.filter((lineItem, i) => {
      return lineItem.price.id !== coachingProducts[i]?.id;
    });
    console.log("Coaching Items:", coachingItems);

    const promises = coachingItems.map(async (coachingItem) => {
      const [fullName, email, date] = coachingItem.description
        .split(", ")
        .map((part) => part.split(";")[1]);
      const userdate = new Date(date);
      const user = { fullName, email, userdate };
      await addClient(user);
    });
    await Promise.all(promises);
  }

  return NextResponse.json({ received: true }, { status: 200 });
}

export function GET(req) {
  const requestUrl = new URL(req.url);
  const origin = requestUrl.origin;
  const redirectUrl = new URL(`${origin}/thankyou`);
  return NextResponse.redirect(redirectUrl.href, 303);
}
