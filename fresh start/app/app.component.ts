import { Component }       from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';
import { MyImageService} from './services/my-image.service';
import { MyTripService } from './services/my-trip.service';
import {MyImageComponent} from './components/my-image.component';
import {MyTripComponent} from './components/my-trip.component';
import {MyTrip} from './base_class/myTrip';

@Component({
  selector: 'my-app',
  templateUrl: "app/html/base-template.html",
  directives: [ROUTER_DIRECTIVES],
  providers: [
			ROUTER_PROVIDERS,
      MyImageService,
      MyTripService
			]
})

@RouteConfig ([
  {
		path : '/trips',
		name: 'Trip',
		component: MyTripComponent
	},
  {
		path : '/trips/:id',
		name: 'TripMainPage',
		component: MyTripComponent
	},
  {
		path : '/images',
		name: 'Image',
		component: MyImageComponent,
    useAsDefault: true
	},
])
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(private _router: Router) {}

  gotoTripMainPage(tripId:number){
		let link = ['TripMainPage', {id: tripId}];
		this._router.navigate(link);
	}
}
