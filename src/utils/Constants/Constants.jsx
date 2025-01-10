import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsappIcon,
} from "assets/icons";
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
  {
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/extreme_888?utm_source=qr&igsh=dm91c3l1bmYxMXJn",
  },
  {
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/share/1B25G5r75f/",
  },
  { icon: <TelegramIcon />, link: "https://t.me/extreme_888" },
  { icon: <WhatsappIcon />, link: "https://wa.me/996559888041" },
];

export const AboutServicesList = [
  {
    icon: motoIcon,
    title: "aboutBlock.rent",
    desc: "aboutBlock.rentDesc",
    path: PATHS.ourMotorbikes,
  },
  {
    icon: toursIcon,
    title: "aboutBlock.tours",
    desc: "aboutBlock.toursDesc",
    path: PATHS.tours,
  },
  {
    icon: guideIcon,
    title: "aboutBlock.guide",
    desc: "aboutBlock.guideDesc",
    path: PATHS.aboutUs,
  },
  {
    icon: MotoPart,
    title: "aboutBlock.garant",
    desc: "aboutBlock.garantDesc",
    path: PATHS.aboutUs,
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
    description: "motorbikes.id0.desc",
    characteristics: [
      { name: "motoMore.height", value: "875mm" },
      { name: "motoMore.weight", value: "143 kg" },
      { name: "motoMore.displace", value: "250cc" },
      { name: "motoMore.cooling", value: "Liquid" },
      { name: "motoMore.transmission", value: "6-speed" },
      { name: "motoMore.drive", value: "520 chain" },
      { name: "motoMore.front", value: "3.00 x 21" },
      { name: "motoMore.rear", value: "120/80 x 18" },
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
    description: "motorbikes.id1.desc",
    characteristics: [
      { name: "motoMore.height", value: "875mm" },
      { name: "motoMore.weight", value: "143 kg" },
      { name: "motoMore.displace", value: "250cc" },
      { name: "motoMore.cooling", value: "Liquid" },
      { name: "motoMore.transmission", value: "6-speed" },
      { name: "motoMore.drive", value: "520 chain" },
      { name: "motoMore.front", value: "3.00 x 21" },
      { name: "motoMore.rear", value: "120/80 x 18" },
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
    description: "motorbikes.id2.desc",
    characteristics: [
      { name: "motoMore.height", value: "875mm" },
      { name: "motoMore.weight", value: "133 kg" },
      { name: "motoMore.displace", value: "250cc" },
      { name: "motoMore.cooling", value: "Air-cooled" },
      { name: "motoMore.transmission", value: "5-speed" },
      { name: "motoMore.drive", value: "520 chain" },
      { name: "motoMore.front", value: "3.00 x 21" },
      { name: "motoMore.rear", value: "120/80 x 18" },
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
    description: "motorbikes.id3.desc",
    characteristics: [
      { name: "motoMore.height", value: "875mm" },
      { name: "motoMore.weight", value: "133 kg" },
      { name: "motoMore.displace", value: "250cc" },
      { name: "motoMore.cooling", value: "Air-cooled" },
      { name: "motoMore.transmission", value: "5-speed" },
      { name: "motoMore.drive", value: "520 chain" },
      { name: "motoMore.front", value: "3.00 x 21" },
      { name: "motoMore.rear", value: "120/80 x 18" },
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
    description: "motorbikes.id4.desc",
    characteristics: [
      { name: "motoMore.height", value: "875mm" },
      { name: "motoMore.weight", value: "133 kg" },
      { name: "motoMore.displace", value: "250cc" },
      { name: "motoMore.cooling", value: "Air-cooled" },
      { name: "motoMore.transmission", value: "5-speed" },
      { name: "motoMore.drive", value: "520 chain" },
      { name: "motoMore.front", value: "3.00 x 21" },
      { name: "motoMore.rear", value: "120/80 x 18" },
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
    description: "motorbikes.id5.desc",
    characteristics: [
      { name: "motoMore.height", value: "850mm" },
      { name: "motoMore.weight", value: "194 kg" },
      { name: "motoMore.displace", value: "600cc" },
      { name: "motoMore.cooling", value: "Liquid" },
      { name: "motoMore.transmission", value: "5-speed" },
      { name: "motoMore.drive", value: "520 chain" },
      { name: "motoMore.front", value: "90/90 x 21" },
      { name: "motoMore.rear", value: "120/90 x 17" },
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
    description: "motorbikes.id6.desc",
    characteristics: [
      { name: "motoMore.height", value: "845mm" },
      { name: "motoMore.weight", value: "160 kg" },
      { name: "motoMore.displace", value: "400cc" },
      { name: "motoMore.cooling", value: "Air-oil" },
      { name: "motoMore.transmission", value: "5-speed" },
      { name: "motoMore.drive", value: "520 chain" },
      { name: "motoMore.front", value: "100/90 x 19" },
      { name: "motoMore.rear", value: "130/80 x 17" },
    ],
  },
];
