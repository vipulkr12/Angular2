import {MyImage} from './base_class/myimage';

export class MyTrip {
  id: number;
  name: string;
  title: string;
  description: string;

  tripImages: MyImage[];
  childTrip: MyTrip[];
}
