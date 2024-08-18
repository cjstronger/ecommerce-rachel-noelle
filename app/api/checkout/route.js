import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request) {
  const requestUrl = new URL(request.url);
  const origin = requestUrl.origin;
  const body = await request.json();
  if (!body.lineItems.length)
    return new Response("error", {
      status: 405,
    });

  try {
    const stripe = new Stripe(process.env.STRIPE_KEY ?? "", {
      apiVersion: "2020-08-27",
    });
    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
      line_items: body.lineItems,
      mode: "payment",
    });
    return NextResponse.json({ session });
  } catch (error) {
    console.error(error);
    return new Response("error", {
      status: 405,
    });
  }
}
