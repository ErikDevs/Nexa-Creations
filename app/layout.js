import "./globals.css";
import { monstserrat } from "./fonts/fonts";
import Footer from "./components/bottom";
import Navigationbar from "./components/navigation";

export const metadata = {
  title: "Nexa Creation",
  description: "Website to showcase our services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${monstserrat.className} body bg-gray-900`}>
        <Navigationbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
