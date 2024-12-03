import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsappIcon,
} from "assets/icons";

import MotoImg from "assets/images/ImageItem.png";
import MotoImg1 from "assets/images/MotoItem1.jpg";
import toursImg from "assets/images/toursImg.png";

import motoIcon from "assets/images/motoIcon.png";
import MotoPart from "assets/images/motoPartIcon.webp";
import toursIcon from "assets/images/toursIcon.png";
import guideIcon from "assets/images/guideIcon.jpg";

export const PATHS = {
  home: "/",
  aboutUs: "/about-us",
  ourMotorbikes: "/our-motorbikes",
  motoTours: "/moto-tours",
  jeepTours: "/jeep-tours",
  trekking: "/trekking",
  placesInKG: "/places-in-Kyrgyzstan",
  notFound: "*",
};

export const NavigationData = [
  { text: "nav.aboutUs", path: PATHS.aboutUs },
  { text: "nav.ourMotorbikes", path: PATHS.ourMotorbikes },
  { text: "nav.motoTours", path: PATHS.motoTours },
  { text: "nav.jeepTours", path: PATHS.jeepTours },
  { text: "nav.trekking", path: PATHS.trekking },
  { text: "nav.placesInKG", path: PATHS.placesInKG },
];

export const SocialMediaLinks = [
  { icon: <InstagramIcon />, link: "" },
  { icon: <FacebookIcon />, link: "" },
  { icon: <TelegramIcon />, link: "" },
  { icon: <WhatsappIcon />, link: "" },
];

export const AboutServicesList = [
  { icon: motoIcon, title: "Moto rent", desc: "Rent simply and quickly" },
  {
    icon: MotoPart,
    title: "Guarantee",
    desc: "Guarantee of motorcycle reliability",
  },
  { icon: toursIcon, title: "Tours", desc: "Routes for any type of tour" },
  { icon: guideIcon, title: "Guide", desc: "Support for safe travel" },
];

export const MotoList = [
  {
    id: "1",
    title: "BMW S1000 RX",
    image: MotoImg,
    year: "2023",
    type: "Sports",
    make: "BMW",
    cost_1: "100",
    cost_2: "80",
  },
  {
    id: "2",
    title: "YAMAHA XT",
    image: MotoImg1,
    year: "2017",
    type: "Travel",
    make: "YAMAHA",
    cost_1: "80",
    cost_2: "60",
  },
  {
    id: "1",
    title: "BMW S1000 RX",
    image: MotoImg,
    year: "2023",
    type: "Sports",
    make: "BMW",
    cost_1: "100",
    cost_2: "80",
  },
  {
    id: "2",
    title: "YAMAHA XT",
    image: MotoImg1,
    year: "2017",
    type: "Travel",
    make: "YAMAHA",
    cost_1: "80",
    cost_2: "60",
  },
  {
    id: "1",
    title: "BMW S1000 RX",
    image: MotoImg,
    year: "2023",
    type: "Sports",
    make: "BMW",
    cost_1: "100",
    cost_2: "80",
  },
  {
    id: "2",
    title: "YAMAHA XT",
    image: MotoImg1,
    year: "2017",
    type: "Travel",
    make: "YAMAHA",
    cost_1: "80",
    cost_2: "60",
  },
];

export const ToursList = [
  {
    id: "/",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    image: toursImg,
    type: "moto tour, jeep tour",
  },
  {
    id: "/",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    image: toursImg,
    type: "moto tour",
  },
  {
    id: "/",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    image: toursImg,
    type: "trekking",
  },
  {
    id: "/",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    image: toursImg,
    type: "jeep tour",
  },
  {
    id: "/",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    image: toursImg,
    type: "jeep tour, trekking",
  },
  {
    id: "/",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    image: toursImg,
    type: "moto tour, jeep tour",
  },
  {
    id: "/",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    image: toursImg,
    type: "moto tour",
  },
  {
    id: "/",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    image: toursImg,
    type: "trekking",
  },
  {
    id: "/",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    image: toursImg,
    type: "jeep tour",
  },
  {
    id: "/",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    image: toursImg,
    type: "jeep tour, trekking",
  },
  {
    id: "/",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    image: toursImg,
    type: "moto tour, jeep tour",
  },
  {
    id: "/",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    image: toursImg,
    type: "moto tour",
  },
  {
    id: "/",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    image: toursImg,
    type: "trekking",
  },
  {
    id: "/",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    image: toursImg,
    type: "jeep tour",
  },
  {
    id: "/",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    image: toursImg,
    type: "jeep tour, trekking",
  },
];
