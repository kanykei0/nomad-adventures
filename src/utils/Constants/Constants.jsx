import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsappIcon,
} from "assets/icons";

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
