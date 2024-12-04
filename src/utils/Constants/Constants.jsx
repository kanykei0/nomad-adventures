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
import toursImg1 from "assets/images/kelsuu.jpg";
import toursImg2 from "assets/images/horses.jpg";
import toursImg3 from "assets/images/barani.jpg";

import motoIcon from "assets/images/motoIcon.png";
import MotoPart from "assets/images/motoPartIcon.webp";
import toursIcon from "assets/images/toursIcon.png";
import guideIcon from "assets/images/guideIcon.jpg";

export const PATHS = {
  home: "/",
  aboutUs: "/about-us",
  ourMotorbikes: "/our-motorbikes",
  motoDetail: "/our-motorbikes/:id",
  tours: "/tours",
  tourDetail: "/tours/:id",
  placesInKG: "/places-in-Kyrgyzstan",
  notFound: "*",
};

export const NavigationData = [
  { text: "nav.aboutUs", path: PATHS.aboutUs },
  { text: "nav.ourMotorbikes", path: PATHS.ourMotorbikes },
  { text: "nav.tours", path: PATHS.tours },
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
    id: "0",
    title: "Zheti Oguz",
    description:
      "Zheti-Oguz (translated from Kyrgyz as ‘Seven Bulls’) is a picturesque gorge in the Issyk-Kul region of Kyrgyzstan, located about 25 kilometres west of the town of Karakol. This place is famous for its impressive red rocks that resemble bulls lying side by side, hence its name. The gorge stretches for about 37 kilometres, surrounded by dense coniferous forests and alpine meadows, making it popular among tourists and nature lovers.\r\n\r\nThe main attractions of Jeti-Oguz:\r\n\r\nRed Rocks: The calling card of the gorge is a series of huge red sandstonecliffs, one of which is the famous ‘Broken Heart’ formation. Legend has it that the rock symbolises the broken heart of lovers.\r\n\r\nHot springs of Jeti-Oguz: There are several mineral hot springs on the territory of the gorge, where people come for recreation and recovery.\r\n\r\nHiking and Trekking: Jeti-Oguz is ideal for hiking, trekking and camping. Popular routes lead to waterfalls, flowering meadows and high mountain pastures.\r\n\r\nYurt Camps: In the gorge you can stay in traditional Kyrgyz yurts, allowing you to get a closer look at the culture and traditions of the locals.\r\nZheti-Oguz is a place where unique natural landscapes and cultural heritage harmoniously combine, attracting travellers all year round.",
    images: [toursImg2, toursImg],
    type: "moto tour, jeep tour",
    routes: [
      {
        tourType: "Moto tour",
        link: "https://www.outdooractive.ru/ru/map/#area=*&bm=osm%3Asummer&caml=84i,bqgjqg,70rwct,0,0&wt=Koksay%20(border%20Kyrgyzstan%20-%20Kazakhstan)%20(%D0%9A%D1%8B%D1%80%D0%B3%D1%8B%D0%B7%D1%81%D1%82%D0%B0%D0%BD)&zc=11.52954,70.957,42.45649",
      },
      {
        tourType: "Jeep tour",
        link: "https://kyrgyzstan-tourism.com/tours/lake-alakol-3-days-trekking/",
      },
    ],
  },
  {
    id: "1",
    title: "Kel Suu",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    images: [toursImg1, toursImg2, toursImg],
    type: "moto tour",
    routes: [
      { tourType: "Moto tour", link: "#" },
      { tourType: "Jeep tour", link: "#" },
    ],
  },
  {
    id: "2",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    images: [toursImg],
    type: "trekking",
    routes: [
      { tourType: "Moto tour", link: "#" },
      { tourType: "Jeep tour", link: "#" },
    ],
  },
  {
    id: "3",
    title: "Zheti Oguz",
    description:
      "Zheti-Oguz (translated from Kyrgyz as ‘Seven Bulls’) is a picturesque gorge in the Issyk-Kul region of Kyrgyzstan, located about 25 kilometres west of the town of Karakol. This place is famous for its impressive red rocks that resemble bulls lying side by side, hence its name. The gorge stretches for about 37 kilometres, surrounded by dense coniferous forests and alpine meadows, making it popular among tourists and nature lovers.\r\n\r\nThe main attractions of Jeti-Oguz:\r\n\r\nRed Rocks: The calling card of the gorge is a series of huge red sandstonecliffs, one of which is the famous ‘Broken Heart’ formation. Legend has it that the rock symbolises the broken heart of lovers.\r\n\r\nHot springs of Jeti-Oguz: There are several mineral hot springs on the territory of the gorge, where people come for recreation and recovery.\r\n\r\nHiking and Trekking: Jeti-Oguz is ideal for hiking, trekking and camping. Popular routes lead to waterfalls, flowering meadows and high mountain pastures.\r\n\r\nYurt Camps: In the gorge you can stay in traditional Kyrgyz yurts, allowing you to get a closer look at the culture and traditions of the locals.\r\nZheti-Oguz is a place where unique natural landscapes and cultural heritage harmoniously combine, attracting travellers all year round.",
    images: [toursImg3, toursImg1, toursImg2],
    type: "jeep tour",
    routes: [
      { tourType: "Moto tour", link: "#" },
      { tourType: "Jeep tour", link: "#" },
    ],
  },
  {
    id: "4",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    images: [toursImg, toursImg3],
    type: "jeep tour, trekking",
    routes: [
      { tourType: "Moto tour", link: "#" },
      { tourType: "Jeep tour", link: "#" },
    ],
  },
  {
    id: "5",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    images: [toursImg],
    type: "moto tour, jeep tour",
    routes: [
      { tourType: "Moto tour", link: "#" },
      { tourType: "Jeep tour", link: "#" },
    ],
  },
  {
    id: "6",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    images: [toursImg],
    type: "moto tour",
    routes: [
      { tourType: "Moto tour", link: "#" },
      { tourType: "Jeep tour", link: "#" },
    ],
  },
  {
    id: "7",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    images: [toursImg],
    type: "trekking",
    routes: [
      { tourType: "Moto tour", link: "#" },
      { tourType: "Jeep tour", link: "#" },
    ],
  },
  {
    id: "8",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    images: [toursImg],
    type: "jeep tour",
    routes: [
      { tourType: "Moto tour", link: "#" },
      { tourType: "Jeep tour", link: "#" },
    ],
  },
  {
    id: "9",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    images: [toursImg],
    type: "jeep tour, trekking",
    routes: [
      { tourType: "Moto tour", link: "#" },
      { tourType: "Jeep tour", link: "#" },
    ],
  },
  {
    id: "10",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    images: [toursImg],
    type: "moto tour, jeep tour",
    routes: [
      { tourType: "Moto tour", link: "#" },
      { tourType: "Jeep tour", link: "#" },
    ],
  },
  {
    id: "11",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    images: [toursImg],
    type: "moto tour",
    routes: [
      { tourType: "Moto tour", link: "#" },
      { tourType: "Jeep tour", link: "#" },
    ],
  },
  {
    id: "12",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    images: [toursImg],
    type: "trekking",
    routes: [
      { tourType: "Moto tour", link: "#" },
      { tourType: "Jeep tour", link: "#" },
    ],
  },
  {
    id: "13",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    images: [toursImg],
    type: "jeep tour",
    routes: [
      { tourType: "Moto tour", link: "#" },
      { tourType: "Jeep tour", link: "#" },
    ],
  },
  {
    id: "14",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    images: [toursImg],
    type: "jeep tour, trekking",
    routes: [
      { tourType: "Moto tour", link: "#" },
      { tourType: "Jeep tour", link: "#" },
    ],
  },
];
