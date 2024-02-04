import { Days_One, Montserrat, News_Cycle } from "next/font/google";
import localFont from "next/font/local";

const dayOne = Days_One({
  subsets: ["latin"],
  weight: ["400"],
});

const monstserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const news = News_Cycle({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const integralCf = localFont({
  src: [
    {
      path: "./integral.otf",
      weight: "400",
    },
  ],
});
export { dayOne, integralCf, monstserrat, news };
