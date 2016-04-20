import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/dashboard.component.html'
})

export class DashboardComponent implements OnInit{
	heroes: Hero[] = [];
	title : string[] = ["what is happening"];
	

	constructor(
		private _router: Router,
	private _heroService: HeroService) {}

	ngOnInit() {
	this._heroService.getHeroes()
		.then(heroes => this.heroes = heroes.slice(1, 5));
	}

	gotoDetail(hero:Hero){
		let link = ['HeroDetail', {id: hero.id}];
		this._router.navigate(link);
	}
}
