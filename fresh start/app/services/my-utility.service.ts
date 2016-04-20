import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';

@Injectable()
export class MyUtilityService{

  constructor(private _router: Router) {}

  gotoTripMainPage(tripId:number){
		let link = ['TripMainPage', {id: tripId}];
		this._router.navigate(link);
	}
}
