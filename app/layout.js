import "./globals.css";
import localFont from "next/font/local";
import Header from "./_components/Header";
import { CartProvider } from "./_contexts/CartContext";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./_contexts/UsersContext";
import Footer from "./footer";

export const metadata = {
  title: { template: "%s - Rachel Noelle", default: "Rachel Noelle" },
  description: "Rachel Noelle, your feminine energy and inner work coach",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const luxiachy = localFont({
  src: [{ path: "../public/fonts/Butler.otf", weight: "500" }],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${luxiachy.className} bg-bg min-h-screen flex flex-col`}
      >
        <CartProvider>
          <UserProvider>
            <Header />
            <div className="flex-1 mt-[3.2rem]">{children}</div>
          </UserProvider>
        </CartProvider>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
