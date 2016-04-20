import {Component, OnInit} from 'angular2/core';
import {MyTrip} from '../base_class/myTrip';
import {RouteParams} from 'angular2/router';
import {MyTripService} from '../services/my-trip.service';

@Component ({
  selector: 'my-trip-detail',
  templateUrl: 'app/html/my-trip.html'
})

export class MyTripComponent implements OnInit {

  currentTrip:any ={};

  title : string = 'hopefully this will work';

  constructor(
    private _routeParams: RouteParams,
    private _myTripservice: MyTripService
  ) {
  }

  ngOnInit(){
    let tourId =+ this._routeParams.get("id");
    this._myTripservice.getTripFromId(tourId)
    .then(currentTrip => this.currentTrip = currentTrip);
  }
}
