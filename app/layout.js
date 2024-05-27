import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";

const candlefish = localFont({
  src: [{ path: "../public/fonts/Candlefish.ttf", weight: "500" }],
  subsets: ["latin"],
});

export const metadata = {
  title: "Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${candlefish.className} bg-primary min-h-screen flex flex-col`}
      >
        <Header />
        <div data-scroll-container className="flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
