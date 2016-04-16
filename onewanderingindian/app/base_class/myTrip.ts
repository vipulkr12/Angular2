import {MyImage} from './myimage';

export class MyTrip {
  id: number;
  title: string;
  description: string;

  tripImages: MyImage[];
  childTrip: MyTrip[];
}
