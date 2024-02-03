import "./globals.css";
import { monstserrat } from "./fonts/fonts";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components";


export const metadata = {
  title: "Nexa Creation",
  description: "Website to showcase our services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${monstserrat.className} body bg-gray-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
