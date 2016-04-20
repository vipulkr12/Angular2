System.register(['angular2/core', 'angular2/router', '../services/my-trip.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, my_trip_service_1;
    var MyTripComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (my_trip_service_1_1) {
                my_trip_service_1 = my_trip_service_1_1;
            }],
        execute: function() {
            MyTripComponent = (function () {
                function MyTripComponent(_routeParams, _myTripservice) {
                    this._routeParams = _routeParams;
                    this._myTripservice = _myTripservice;
                    this.currentTrip = {};
                    this.title = 'hopefully this will work';
                }
                MyTripComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var tourId = +this._routeParams.get("id");
                    this._myTripservice.getTripFromId(tourId)
                        .then(function (currentTrip) { return _this.currentTrip = currentTrip; });
                };
                MyTripComponent = __decorate([
                    core_1.Component({
                        selector: 'my-trip-detail',
                        templateUrl: 'app/html/my-trip.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, my_trip_service_1.MyTripService])
                ], MyTripComponent);
                return MyTripComponent;
            }());
            exports_1("MyTripComponent", MyTripComponent);
        }
    }
});
//# sourceMappingURL=my-trip.component.js.map