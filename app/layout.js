import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";
import { ApplyForm } from "./_components/ApplyForm";
import { ModalProvider } from "./_contexts/ModalProvider";

export const metadata = {
  title: { template: "%s / Rachel Noelle", default: "Rachel Noelle" },
  description: "Rachel Noelle, your feminine energy and inner work coach",
};

const candlefish = localFont({
  src: [{ path: "../public/fonts/Candlefish.ttf", weight: "500" }],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${candlefish.className} bg-primary min-h-screen flex flex-col`}
      >
        <ModalProvider>
          <Header />
          <ApplyForm />
          <div className="flex-1">{children}</div>
        </ModalProvider>
      </body>
    </html>
  );
}
