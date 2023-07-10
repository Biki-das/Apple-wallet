import {SharedValue} from 'react-native-reanimated';

type Field = {
  label: string;
  value: string;
};

export type CardContentProps = {
  transactions: [];
  image: any;
};

export type CardProps = {
  item: CardContentProps;
  index: number;
  selectedCard: SharedValue<number>;
  scrollY: SharedValue<number>;
  swipeY: SharedValue<number>;
  inTransition: SharedValue<number>;
};

export type SwipeGestureProps = {
  children: React.ReactNode;
  selectedCard: SharedValue<number>;
  swipeY: SharedValue<number>;
  inTransition: SharedValue<number>;
};
