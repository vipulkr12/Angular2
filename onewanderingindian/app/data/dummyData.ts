import {MyImage} from '../base_class/myimage';
import {MyTrip} from '../base_class/myTrip';

export var lijiangImages: MyImage[] = [
  {"id": 61001,
    "src": "/china/china_61001",
    "title": "first",
    "description": "this is the first image",
    "tags": ["one", "1"],
    "comments":["first", "1"]
  },
  {"id": 61002,
    "src": "/china/china_61002",
    "title": "second",
    "description": "this is the second image",
    "tags": ["two", "2"],
    "comments":["two", "2"]
  },
  {"id": 61003,
    "src": "/china/china_61003",
    "title": "third",
    "description": "this is the third image",
    "tags": ["three", "3"],
    "comments":["three", "3"]
  }
]

export var lijiangTrip: MyTrip =  {
    "id": 61000,
    "title": "The lijiang trip",
    "description": "My visit to lijiang",
    "tripImages": lijiangImages,
    "childTrip": []
  }

export var chinaTrip: MyTrip = {
  "id": 60000,
  "title": "The china trip",
  "description": "My visit to china",
  "tripImages": [],
  "childTrip": [lijiangTrip]
}

export var mainTrip: MyTrip = {
  "id": 0,
  "title": "main trip",
  "description": "My List of trips",
  "tripImages": [],
  "childTrip": [chinaTrip]
}
