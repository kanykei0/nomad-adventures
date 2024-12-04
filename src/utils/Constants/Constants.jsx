import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsappIcon,
} from "assets/icons";

import MotoImg from "assets/images/ImageItem.png";
import MotoImg1 from "assets/images/MotoItem1.jpg";
import MotoImg2 from "assets/images/manOnBike.jpg";
import MotoImg3 from "assets/images/mainbanner.jpg";
import toursImg from "assets/images/toursImg.png";

import motoIcon from "assets/images/motoIcon.png";
import MotoPart from "assets/images/motoPartIcon.webp";
import toursIcon from "assets/images/toursIcon.png";
import guideIcon from "assets/images/guideIcon.jpg";

export const PATHS = {
  home: "/",
  aboutUs: "/about-us",
  ourMotorbikes: "/our-motorbikes",
  motoDetail: "/our-motorbikes/:id",
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

export const ContactBlock = [
  {
    icon: <WhatsappIcon color="#232323" />,
    data: [
      { link: "", name: "+996 776 849 662" },
      { link: "", name: "+996 555 989 477" },
    ],
  },
  {
    icon: <InstagramIcon color="#232323" />,
    data: [{ link: "", name: "@nomad_adventures_888" }],
  },
  {
    icon: <TelegramIcon color="#232323" />,
    data: [{ link: "", name: "@nomad_adventures" }],
  },
];

export const MotoList = [
  {
    id: "0",
    title: "BMW S1000 RX",
    images: [MotoImg, MotoImg1, MotoImg2, MotoImg3, MotoImg, MotoImg1],
    year: "2023",
    type: "Single-cylinder",
    make: "BMW",
    cost_1: "100",
    cost_2: "80",
    description:
      "Is a powerful sport-touring motorbike that combines the dynamics of a sports bike with the comfort of a touring bike. Powered by a 999cc engine, it develops around 165bhp for impressive acceleration and a high top speed. The motorbike is stable at high speeds and manoeuvrable, making it suitable for both long journeys and sporty rides.",
    characteristics: [
      { name: "Seat height", value: "850mm / Weight: 180 kg" },
      { name: "Displacement", value: "250cc" },
      { name: "Bore and stroke", value: "76 x 55 mm" },
      { name: "Compression ratio", value: "10.7:1" },
      { name: "Valvetrain", value: "DOHC, four valves" },
      { name: "Fueling", value: "EFI w/38mm throttle body" },
      { name: "Cooling", value: "Liquid" },
      { name: "Transmission", value: "6-speed" },
      { name: "Final drive", value: "520 chain" },
      { name: "Front tire", value: "3.00 x 21; IRC Trails GP-21F" },
      { name: "Rear tire", value: "120/80 x 18; IRC Trails GP-22R" },
      { name: "Front brake", value: "256mm disc w/ twin-piston caliper" },
      { name: "Rear brake", value: "220mm disc" },
    ],
  },
  {
    id: "1",
    title: "YAMAHA XT",
    images: [MotoImg, MotoImg1, MotoImg2, MotoImg3, MotoImg, MotoImg1],
    year: "2017",
    type: "Travel",
    make: "YAMAHA",
    cost_1: "80",
    cost_2: "60",
    description:
      "Is a powerful sport-touring motorbike that combines the dynamics of a sports bike with the comfort of a touring bike. Powered by a 999cc engine, it develops around 165bhp for impressive acceleration and a high top speed. The motorbike is stable at high speeds and manoeuvrable, making it suitable for both long journeys and sporty rides.",
    characteristics: [
      { name: "Seat height", value: "850mm / Weight: 180 kg" },
      { name: "Displacement", value: "250cc" },
      { name: "Bore and stroke", value: "76 x 55 mm" },
      { name: "Compression ratio", value: "10.7:1" },
      { name: "Valvetrain", value: "DOHC, four valves" },
      { name: "Fueling", value: "EFI w/38mm throttle body" },
      { name: "Cooling", value: "Liquid" },
      { name: "Transmission", value: "6-speed" },
      { name: "Final drive", value: "520 chain" },
      { name: "Front tire", value: "3.00 x 21; IRC Trails GP-21F" },
      { name: "Rear tire", value: "120/80 x 18; IRC Trails GP-22R" },
      { name: "Front brake", value: "256mm disc w/ twin-piston caliper" },
      { name: "Rear brake", value: "220mm disc" },
    ],
  },
  {
    id: "2",
    title: "BMW S1000 RX",
    images: [MotoImg, MotoImg1],
    year: "2023",
    type: "Sports",
    make: "BMW",
    cost_1: "100",
    cost_2: "80",
    description:
      "Is a powerful sport-touring motorbike that combines the dynamics of a sports bike with the comfort of a touring bike. Powered by a 999cc engine, it develops around 165bhp for impressive acceleration and a high top speed. The motorbike is stable at high speeds and manoeuvrable, making it suitable for both long journeys and sporty rides.",
    characteristics: [
      { name: "Seat height", value: "850mm / Weight: 180 kg" },
      { name: "Displacement", value: "250cc" },
      { name: "Bore and stroke", value: "76 x 55 mm" },
      { name: "Compression ratio", value: "10.7:1" },
      { name: "Valvetrain", value: "DOHC, four valves" },
      { name: "Fueling", value: "EFI w/38mm throttle body" },
      { name: "Cooling", value: "Liquid" },
      { name: "Transmission", value: "6-speed" },
      { name: "Final drive", value: "520 chain" },
      { name: "Front tire", value: "3.00 x 21; IRC Trails GP-21F" },
      { name: "Rear tire", value: "120/80 x 18; IRC Trails GP-22R" },
      { name: "Front brake", value: "256mm disc w/ twin-piston caliper" },
      { name: "Rear brake", value: "220mm disc" },
    ],
  },
  {
    id: "3",
    title: "YAMAHA XT",
    images: [MotoImg, MotoImg1, MotoImg2, MotoImg3],
    year: "2017",
    type: "Travel",
    make: "YAMAHA",
    cost_1: "80",
    cost_2: "60",
    description:
      "Is a powerful sport-touring motorbike that combines the dynamics of a sports bike with the comfort of a touring bike. Powered by a 999cc engine, it develops around 165bhp for impressive acceleration and a high top speed. The motorbike is stable at high speeds and manoeuvrable, making it suitable for both long journeys and sporty rides.",
    characteristics: [
      { name: "Seat height", value: "850mm / Weight: 180 kg" },
      { name: "Displacement", value: "250cc" },
      { name: "Bore and stroke", value: "76 x 55 mm" },
      { name: "Compression ratio", value: "10.7:1" },
      { name: "Valvetrain", value: "DOHC, four valves" },
      { name: "Fueling", value: "EFI w/38mm throttle body" },
      { name: "Cooling", value: "Liquid" },
      { name: "Transmission", value: "6-speed" },
      { name: "Final drive", value: "520 chain" },
      { name: "Front tire", value: "3.00 x 21; IRC Trails GP-21F" },
      { name: "Rear tire", value: "120/80 x 18; IRC Trails GP-22R" },
      { name: "Front brake", value: "256mm disc w/ twin-piston caliper" },
      { name: "Rear brake", value: "220mm disc" },
    ],
  },
  {
    id: "4",
    title: "BMW S1000 RX",
    images: [MotoImg, MotoImg1, MotoImg2, MotoImg3],
    year: "2023",
    type: "Sports",
    make: "BMW",
    cost_1: "100",
    cost_2: "80",
    description:
      "Is a powerful sport-touring motorbike that combines the dynamics of a sports bike with the comfort of a touring bike. Powered by a 999cc engine, it develops around 165bhp for impressive acceleration and a high top speed. The motorbike is stable at high speeds and manoeuvrable, making it suitable for both long journeys and sporty rides.",
    characteristics: [
      { name: "Seat height", value: "850mm / Weight: 180 kg" },
      { name: "Displacement", value: "250cc" },
      { name: "Bore and stroke", value: "76 x 55 mm" },
      { name: "Compression ratio", value: "10.7:1" },
      { name: "Valvetrain", value: "DOHC, four valves" },
      { name: "Fueling", value: "EFI w/38mm throttle body" },
      { name: "Cooling", value: "Liquid" },
      { name: "Transmission", value: "6-speed" },
      { name: "Final drive", value: "520 chain" },
      { name: "Front tire", value: "3.00 x 21; IRC Trails GP-21F" },
      { name: "Rear tire", value: "120/80 x 18; IRC Trails GP-22R" },
      { name: "Front brake", value: "256mm disc w/ twin-piston caliper" },
      { name: "Rear brake", value: "220mm disc" },
    ],
  },
  {
    id: "5",
    title: "YAMAHA XT",
    images: [MotoImg, MotoImg1, MotoImg2, MotoImg3],
    year: "2017",
    type: "Travel",
    make: "YAMAHA",
    cost_1: "80",
    cost_2: "60",
    description:
      "Is a powerful sport-touring motorbike that combines the dynamics of a sports bike with the comfort of a touring bike. Powered by a 999cc engine, it develops around 165bhp for impressive acceleration and a high top speed. The motorbike is stable at high speeds and manoeuvrable, making it suitable for both long journeys and sporty rides.",
    characteristics: [
      { name: "Seat height", value: "850mm / Weight: 180 kg" },
      { name: "Displacement", value: "250cc" },
      { name: "Bore and stroke", value: "76 x 55 mm" },
      { name: "Compression ratio", value: "10.7:1" },
      { name: "Valvetrain", value: "DOHC, four valves" },
      { name: "Fueling", value: "EFI w/38mm throttle body" },
      { name: "Cooling", value: "Liquid" },
      { name: "Transmission", value: "6-speed" },
      { name: "Final drive", value: "520 chain" },
      { name: "Front tire", value: "3.00 x 21; IRC Trails GP-21F" },
      { name: "Rear tire", value: "120/80 x 18; IRC Trails GP-22R" },
      { name: "Front brake", value: "256mm disc w/ twin-piston caliper" },
      { name: "Rear brake", value: "220mm disc" },
    ],
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
