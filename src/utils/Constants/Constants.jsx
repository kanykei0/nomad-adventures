import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsappIcon,
} from "assets/icons";

import toursImg from "assets/images/toursImg.png";
import toursImg1 from "assets/images/kelsuu.jpg";
import toursImg2 from "assets/images/horses.jpg";
import toursImg3 from "assets/images/barani.jpg";

import motoIcon from "assets/images/motoIcon.png";
import MotoPart from "assets/images/motoPartIcon.webp";
import toursIcon from "assets/images/toursIcon.png";
import guideIcon from "assets/images/guideIcon.jpg";

import motoMore1 from "assets/motoImages/redCRF1.jpg";
import motoMore2 from "assets/motoImages/redCRF2.jpg";

import motoMoreWhite1 from "assets/motoImages/whiteCRF1.jpg";
import motoMoreWhite2 from "assets/motoImages/whiteCRF.jpg";
import motoMoreWhite3 from "assets/motoImages/whiteCRF2.jpg";

import hondaXR1 from "assets/motoImages/hondaXR1.jpeg";
import hondaXR2 from "assets/motoImages/hondaXR2.jpeg";

import hondaXRred1 from "assets/motoImages/hondaXRred1.jpg";
import hondaXRred2 from "assets/motoImages/hondaXRred2.jpeg";
import hondaXRred3 from "assets/motoImages/hondaXRred3.jpeg";

import tranaslp1 from "assets/motoImages/Transalp1.jpg";
import tranaslp2 from "assets/motoImages/Transalp2.jpg";
import tranaslp3 from "assets/motoImages/Transalp3.jpg";
import tranaslp4 from "assets/motoImages/Transalp4.jpg";

import hondaXrRainbow1 from "assets/motoImages/hondaXRrainbow1.jpeg";
import hondaXrRainbow2 from "assets/motoImages/hondaXRrainbow2.jpeg";

import goose1 from "assets/motoImages/goose1.jpeg";
import goose2 from "assets/motoImages/goose2.jpeg";
import goose3 from "assets/motoImages/goose3.jpeg";
import goose4 from "assets/motoImages/goose4.jpeg";
import goose5 from "assets/motoImages/goose5.jpeg";

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
  { icon: motoIcon, title: "Moto Rent", desc: "Quick and easy rentals" },
  {
    icon: toursIcon,
    title: "Tours",
    desc: "Unique routes tailored to your adventure",
  },
  {
    icon: guideIcon,
    title: "Guide Support",
    desc: "Expert guidance for a safe and enjoyable trip",
  },
  {
    icon: MotoPart,
    title: "Reliability Guarantee",
    desc: "Trustworthy bikes for every road",
  },
];

export const MotoList = [
  {
    id: "0",
    title: "Honda CRF 250 L",
    images: [motoMore1, motoMore2],
    year: "2016",
    type: "Single-cylinder",
    make: "Honda",
    cost_1: "80",
    cost_2: "70",
    description:
      "Honda CRF250L is a reliable and versatile enduro motorcycle, perfect for both city rides and off-road adventures. Equipped with a 250cc engine with smooth power delivery, durable suspension, and easy handling, it’s a bike that suits a wide range of riders. Its versatility makes it an excellent choice for beginners and experienced riders alike, as well as for jeep tours or independent routes.",
    characteristics: [
      { name: "Seat height", value: "875mm" },
      { name: "Weight", value: "143 kg" },

      { name: "Displacement", value: "250cc" },
      { name: "Cooling", value: "Liquid" },
      { name: "Transmission", value: "6-speed" },
      { name: "Final drive", value: "520 chain" },
      { name: "Front tire", value: "3.00 x 21" },
      { name: "Rear tire", value: "120/80 x 18" },
    ],
  },
  {
    id: "1",
    title: "Honda CRF 250 L",
    images: [motoMoreWhite1, motoMoreWhite3, motoMoreWhite2],
    year: "2016",
    type: "Single-cylinder",
    make: "Honda",
    cost_1: "80",
    cost_2: "70",
    description:
      "Honda CRF250L is a reliable and versatile enduro motorcycle, perfect for both city rides and off-road adventures. Equipped with a 250cc engine with smooth power delivery, durable suspension, and easy handling, it’s a bike that suits a wide range of riders. Its versatility makes it an excellent choice for beginners and experienced riders alike, as well as for jeep tours or independent routes.",
    characteristics: [
      { name: "Seat height", value: "875mm" },
      { name: "Weight", value: "143 kg" },

      { name: "Displacement", value: "250cc" },
      { name: "Cooling", value: "Liquid" },
      { name: "Transmission", value: "6-speed" },
      { name: "Final drive", value: "520 chain" },
      { name: "Front tire", value: "3.00 x 21" },
      { name: "Rear tire", value: "120/80 x 18" },
    ],
  },
  {
    id: "2",
    title: "Honda XR 250",
    images: [hondaXR1, hondaXR2],
    year: "-",
    type: "Single-cylinder",
    make: "Honda",
    cost_1: "80",
    cost_2: "70",
    description:
      "Honda XR250 is a legendary enduro motorcycle that combines power, reliability, and excellent off-road performance. Equipped with a 250cc engine, lightweight frame, and highly efficient suspension, it is perfect for challenging routes. An excellent choice for adventure enthusiasts and professionals who value agility and comfort in any conditions.",
    characteristics: [
      { name: "Seat height", value: "875mm" },
      { name: "Weight", value: "133 kg" },

      { name: "Displacement", value: "250cc" },
      { name: "Cooling", value: "Air-cooled" },
      { name: "Transmission", value: "5-speed" },
      { name: "Final drive", value: "520 chain" },
      { name: "Front tire", value: "3.00 x 21" },
      { name: "Rear tire", value: "120/80 x 18" },
    ],
  },
  {
    id: "3",
    title: "Honda XR 250",
    images: [hondaXRred1, hondaXRred2, hondaXRred3],
    year: "-",
    type: "Single-cylinder",
    make: "Honda",
    cost_1: "80",
    cost_2: "70",
    description:
      "Honda XR250 is a legendary enduro motorcycle that combines power, reliability, and excellent off-road performance. Equipped with a 250cc engine, lightweight frame, and highly efficient suspension, it is perfect for challenging routes. An excellent choice for adventure enthusiasts and professionals who value agility and comfort in any conditions.",
    characteristics: [
      { name: "Seat height", value: "875mm" },
      { name: "Weight", value: "133 kg" },

      { name: "Displacement", value: "250cc" },
      { name: "Cooling", value: "Air-cooled" },
      { name: "Transmission", value: "5-speed" },
      { name: "Final drive", value: "520 chain" },
      { name: "Front tire", value: "3.00 x 21" },
      { name: "Rear tire", value: "120/80 x 18" },
    ],
  },
  {
    id: "4",
    title: "Honda XR 250",
    images: [hondaXrRainbow1, hondaXrRainbow2],
    year: "-",
    type: "Single-cylinder",
    make: "Honda",
    cost_1: "80",
    cost_2: "70",
    description:
      "Honda XR250 is a legendary enduro motorcycle that combines power, reliability, and excellent off-road performance. Equipped with a 250cc engine, lightweight frame, and highly efficient suspension, it is perfect for challenging routes. An excellent choice for adventure enthusiasts and professionals who value agility and comfort in any conditions.",
    characteristics: [
      { name: "Seat height", value: "875mm" },
      { name: "Weight", value: "133 kg" },

      { name: "Displacement", value: "250cc" },
      { name: "Cooling", value: "Air-cooled" },
      { name: "Transmission", value: "5-speed" },
      { name: "Final drive", value: "520 chain" },
      { name: "Front tire", value: "3.00 x 21" },
      { name: "Rear tire", value: "120/80 x 18" },
    ],
  },
  {
    id: "5",
    title: "Honda Transalp XL600V",
    images: [tranaslp1, tranaslp2, tranaslp3, tranaslp4],
    year: "-",
    type: "V-Twin-cylinder",
    make: "Honda",
    cost_1: "80",
    cost_2: "70",
    description:
      "Honda Transalp XL600V is a classic touring enduro designed for long-distance rides and comfortable journeys on any road. Equipped with a reliable 583cc V-twin engine, it ensures smooth and stable performance. Its thoughtful ergonomics, high seating position, and excellent suspension make it the perfect choice for both highway travel and off-road adventures. A reliable companion for exploration and extended routes.",
    characteristics: [
      { name: "Seat height", value: "850mm" },
      { name: "Weight", value: "194 kg" },
      { name: "Displacement", value: "600cc" },
      { name: "Cooling", value: "Liquid" },
      { name: "Transmission", value: "5-speed" },
      { name: "Final drive", value: "520 chain" },
      { name: "Front tire", value: "90/90 x 21" },
      { name: "Rear tire", value: "120/90 x 17" },
    ],
  },
  {
    id: "6",
    title: "Minsk Goose 400",
    images: [goose1, goose2, goose3, goose4, goose5],
    year: "-",
    type: "Single-cylinder",
    make: "Honda",
    cost_1: "80",
    cost_2: "70",
    description:
      "Minsk Goose 400 is a modern off-road motorcycle with an aggressive design and outstanding technical capabilities. It features a 400cc single-cylinder liquid-cooled engine that provides excellent traction on any surface. With its energy-efficient suspension, robust frame, and high ground clearance, it is the ideal choice for off-road adventures.",
    characteristics: [
      { name: "Seat height", value: "845mm" },
      { name: "Weight", value: "160 kg" },
      { name: "Displacement", value: "400cc" },
      { name: "Cooling", value: "Air-oil" },
      { name: "Transmission", value: "5-speed" },
      { name: "Final drive", value: "520 chain" },
      { name: "Front tire", value: "100/90 x 19" },
      { name: "Rear tire", value: "130/80 x 17" },
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
    routes: [{ tourType: "Moto tour", link: "#" }],
  },
  {
    id: "2",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    images: [toursImg],
    type: "trekking, moto tour",
    routes: [
      { tourType: "Moto tour", link: "#" },
      { tourType: "Trekking", link: "#" },
    ],
  },
  {
    id: "3",
    title: "Zheti Oguz",
    description:
      "Zheti-Oguz (translated from Kyrgyz as ‘Seven Bulls’) is a picturesque gorge in the Issyk-Kul region of Kyrgyzstan, located about 25 kilometres west of the town of Karakol. This place is famous for its impressive red rocks that resemble bulls lying side by side, hence its name. The gorge stretches for about 37 kilometres, surrounded by dense coniferous forests and alpine meadows, making it popular among tourists and nature lovers.\r\n\r\nThe main attractions of Jeti-Oguz:\r\n\r\nRed Rocks: The calling card of the gorge is a series of huge red sandstonecliffs, one of which is the famous ‘Broken Heart’ formation. Legend has it that the rock symbolises the broken heart of lovers.\r\n\r\nHot springs of Jeti-Oguz: There are several mineral hot springs on the territory of the gorge, where people come for recreation and recovery.\r\n\r\nHiking and Trekking: Jeti-Oguz is ideal for hiking, trekking and camping. Popular routes lead to waterfalls, flowering meadows and high mountain pastures.\r\n\r\nYurt Camps: In the gorge you can stay in traditional Kyrgyz yurts, allowing you to get a closer look at the culture and traditions of the locals.\r\nZheti-Oguz is a place where unique natural landscapes and cultural heritage harmoniously combine, attracting travellers all year round.",
    images: [toursImg3, toursImg1, toursImg2],
    type: "jeep tour",
    routes: [{ tourType: "Jeep tour", link: "#" }],
  },
  {
    id: "4",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    images: [toursImg, toursImg3],
    type: "jeep tour, trekking",
    routes: [
      { tourType: "Trekking", link: "#" },
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
    routes: [{ tourType: "Moto tour", link: "#" }],
  },
  {
    id: "7",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    images: [toursImg],
    type: "trekking",
    routes: [{ tourType: "Trekking", link: "#" }],
  },
  {
    id: "8",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    images: [toursImg],
    type: "jeep tour",
    routes: [{ tourType: "Jeep tour", link: "#" }],
  },
  {
    id: "9",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    images: [toursImg],
    type: "jeep tour, trekking",
    routes: [
      { tourType: "Trekking", link: "#" },
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
    routes: [{ tourType: "Moto tour", link: "#" }],
  },
  {
    id: "12",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    images: [toursImg],
    type: "trekking",
    routes: [{ tourType: "Trekking", link: "#" }],
  },
  {
    id: "13",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    images: [toursImg],
    type: "jeep tour",
    routes: [{ tourType: "Jeep tour", link: "#" }],
  },
  {
    id: "14",
    title: "Zheti Oguz",
    description:
      "A picturesque mountain gorge in Kyrgyzstan, located 28 kilometres west of the town of Karakol (formerly Przhevalsk) on the southern shore of the Issyk-Kul.",
    images: [toursImg],
    type: "jeep tour, trekking",
    routes: [
      { tourType: "Trekking", link: "#" },
      { tourType: "Jeep tour", link: "#" },
    ],
  },
];
