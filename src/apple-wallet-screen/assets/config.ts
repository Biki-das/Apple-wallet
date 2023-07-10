import { metrics } from "@constants/metrics";
import { mvs, s } from "react-native-size-matters/extend";
import { CardContentProps } from "./types";

export const CARD_HEIGHT_CLOSED = s(224);
export const CARD_HEIGHT_OPEN = s(900);
export const CARD_IMAGE_HEIGTH = s(165);
export const CARD_HEADER_HEIGHT = s(59);
export const CARD_MARGIN = mvs(100);
export const BACK_BUTTON_HEIGHT = s(40);
export const CLOSE_THRESHOLD = metrics.screenHeight * 0.11;

export const SPRING_CONFIG = {
  OPEN: {
    mass: 0.8,
    stiffness: 80,
  },
  CLOSE: {
    mass: 0.8,
    damping: 11,
    stiffness: 87,
  },
  SWIPE: {
    mass: 0.7,
    stiffness: 80,
  },
};

export const CARDS: CardContentProps[] = [
  {
    title: "GameHub",
    headerField: {
      label: "Points",
      value: "1337",
    },
    auxiliaryField: {
      label: "Name",
      value: "John Doe",
    },
    secondaryField: {
      label: "Member ID",
      value: "GH-007",
    },
    tertiaryField: {
      label: "Member since",
      value: "2017",
    },
    image: require("./images/card1.png"),
    bg: "#007A96",
  },
  {
    title: "Sky Train",
    headerField: {
      label: "Balance",
      value: "$102",
    },
    auxiliaryField: {
      label: "Name",
      value: "John Doe",
    },
    secondaryField: {
      label: "Member ID",
      value: "ST-845037",
    },
    tertiaryField: {
      label: "Member since",
      value: "2017",
    },
    image: require("./images/card2.png"),
    bg: "#9C312D",
  },
  {
    image: require("./images/card3.png"),
  },
];
