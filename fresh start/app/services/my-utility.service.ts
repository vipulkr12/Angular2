import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';
import {MyTrip} from '../base_class/myTrip';

@Injectable()
export class MyUtilityService{

  constructor(private _router: Router) {}

  gotoTripMainPage(tripId:number){
		let link = ['TripMainPage', {id: tripId}];
    console.log("This should get printed");
		this._router.navigate(link);
	}

  gotoChildTrip(parentTrip: MyTrip)
  {
    var tripId: number = parentTrip.childTripId[0];
    let link = ['TripMainPage', {id: tripId}];
    console.log("Hello");
    this._router.navigate(link);
  }
}
