import {Injectable} from 'angular2/core';
import {MyTrip} from '../base_class/myTrip';

@Injectable()
export class MyTripService{

  dummyMyTrip: MyTrip;

  getAllTrip() {}

  getTripFromId(tripId: number) {
    return Promise.resolve(this.dummyMyTrip);
  }
}
