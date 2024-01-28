import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Nexa Creation",
  description: "Website to showcase our services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.className} bg-slate-50`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
