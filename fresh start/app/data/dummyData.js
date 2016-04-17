System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var lijiangImages, lijiangTrip, chinaTrip, mainTrip;
    return {
        setters:[],
        execute: function() {
            exports_1("lijiangImages", lijiangImages = [
                { "id": 61001,
                    "src": "/china/china_61001",
                    "title": "first",
                    "description": "this is the first image",
                    "tags": ["one", "1"],
                    "comments": ["first", "1"]
                },
                { "id": 61002,
                    "src": "/china/china_61002",
                    "title": "second",
                    "description": "this is the second image",
                    "tags": ["two", "2"],
                    "comments": ["two", "2"]
                },
                { "id": 61003,
                    "src": "/china/china_61003",
                    "title": "third",
                    "description": "this is the third image",
                    "tags": ["three", "3"],
                    "comments": ["three", "3"]
                }
            ]);
            exports_1("lijiangTrip", lijiangTrip = {
                "id": 61000,
                "title": "The lijiang trip",
                "description": "My visit to lijiang",
                "tripImages": lijiangImages,
                "childTrip": []
            });
            exports_1("chinaTrip", chinaTrip = {
                "id": 60000,
                "title": "The china trip",
                "description": "My visit to china",
                "tripImages": [],
                "childTrip": [lijiangTrip]
            });
            exports_1("mainTrip", mainTrip = {
                "id": 0,
                "title": "main trip",
                "description": "My List of trips",
                "tripImages": [],
                "childTrip": [chinaTrip]
            });
        }
    }
});
//# sourceMappingURL=dummyData.js.map