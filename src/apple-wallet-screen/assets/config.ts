import {metrics} from '@constants/metrics';
import {mvs, s} from 'react-native-size-matters/extend';
import {CardContentProps} from './types';

export const CARD_HEIGHT_CLOSED = s(224);
export const CARD_HEIGHT_OPEN = s(900);
export const CARD_IMAGE_HEIGHT = s(165);
export const CARD_HEADER_HEIGHT = s(59);
export const CARD_MARGIN = mvs(50);
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
    title: 'Mastercard',
    transactions: [
      {recipent: 'Uber', amount: '$133.75'},
      {
        recipent: 'Amazon',
        amount: '$200.76',
      },
    ],
    image: require('./images/card1.png'),
  },
  {
    title: 'American express',
    transactions: [
      {recipent: 'StarBucks', amount: '$133.75'},
      {recipent: 'Zomato', amount: '$100.76'},
    ],
    image: require('./images/card2.png'),
  },
  {
    title: 'Visa',
    transactions: [{recipent: 'Booking.com', amount: '$100.75'}],
    image: require('./images/card3.png'),
  },
];
