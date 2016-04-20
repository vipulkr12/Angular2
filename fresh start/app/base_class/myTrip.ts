import {MyImage} from './myimage';

export class MyTrip {
  id: number;
  title: string;
  description: string;

  tripImagesId: number[];
  childTripId: number[];
}
