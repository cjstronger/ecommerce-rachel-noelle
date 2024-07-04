import "./globals.css";
import localFont from "next/font/local";
import Header from "./_components/Header";
import { CartProvider } from "./_contexts/CartContext";
import Stripe from "stripe";

export const metadata = {
  title: { template: "%s - Rachel Noelle", default: "Rachel Noelle" },
  description: "Rachel Noelle, your feminine energy and inner work coach",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const candlefish = localFont({
  src: [{ path: "../public/fonts/Candlefish.ttf", weight: "500" }],
  subsets: ["latin"],
});

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_KEY ?? "", {
    apiVersion: "2020-08-27",
  });
  const res = await stripe.prices.list({
    expand: ["data.product"],
  });
  const data = res.data;
  return data;
}

export default async function RootLayout({ children }) {
  const products = await getStripeProducts();
  return (
    <html lang="en">
      <body
        className={`${candlefish.className} bg-bg min-h-screen flex flex-col`}
      >
        <CartProvider products={products}>
          <Header />
          <div className="flex-1">{children}</div>
        </CartProvider>
      </body>
    </html>
  );
}
