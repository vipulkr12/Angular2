import {Injectable} from 'angular2/core';
import {MyImage} from '../base_class/myImage';

@Injectable()
export class MyImageService{

  dummyMyImage: MyImage;

  getImageFromId(imageId: number) {
    return Promise.resolve(this.dummyMyImage);
  }
}
