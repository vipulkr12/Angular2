import {Injectable} from 'angular2/core';
import {MyTrip} from '../base_class/myTrip';
import {allTrip} from '../data/dummyData';

@Injectable()
export class MyTripService{

  dummyMyTrip: MyTrip;

  getAllTrip() {}

  getTripFromId(tripId: number) {
    return Promise.resolve(allTrip).then(
      trips => trips.filter(trip => trip.id === tripId)[0]
    );
  }
}
