import {Component, OnInit} from 'angular2/core';
import {MyImage} from '../base_class/myImage';
import {RouteParams} from 'angular2/router';
import {MyImageService} from '../services/my-image.service';

@Component({
  selector: 'my-image-detail',
  templateUrl: "app/html/my-image.html"
})

export class MyImageComponent implements OnInit {
  currentImage: MyImage;


  title : string = '';

  constructor(
    private _myImageService: MyImageService,
    private _routeParams:RouteParams) {
      this.title = "shshsfh";
    }

  ngOnInit(){
    let imageId = +this._routeParams.get("id");
    this._myImageService.getImageFromId(imageId)
    .then(currentImage => this.currentImage = currentImage);
  }

}
