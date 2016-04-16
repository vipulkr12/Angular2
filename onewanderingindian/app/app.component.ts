import { Component }       from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {MyTripComponent} from './components/my-trip.component';
import {MyImageComponent} from './components/my-image.component';
import {MyImageService} from './services/my-image.service';
import {MyTripService} from './services/my-trip.service';

@Component({
  selector: 'my-app',
  templateUrl: "app/html/base-template.html",
  /*directives: [ROUTER_DIRECTIVES],*/
  providers: [
			/*ROUTER_PROVIDERS,*/
			MyImageService,
      MyTripService
    ]
})

/*@RouteConfig ([
	{
		path : '/:tripId',
		name: 'TripLink',
		component: MyTripComponent
	},
	{
		path: '/:tripId/:imageId',
		name: 'Dashboard',
		component: MyImageComponent,
    useAsDefault: true
	}
])*/
export class AppComponent {
  title = 'Tour of Heroes';
}
