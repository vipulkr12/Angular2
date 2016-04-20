System.register(['angular2/core', 'angular2/router', './services/my-image.service', './services/my-trip.service', './components/my-image.component', './components/my-trip.component'], function(exports_1, context_1) {
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
    var core_1, router_1, my_image_service_1, my_trip_service_1, my_image_component_1, my_trip_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (my_image_service_1_1) {
                my_image_service_1 = my_image_service_1_1;
            },
            function (my_trip_service_1_1) {
                my_trip_service_1 = my_trip_service_1_1;
            },
            function (my_image_component_1_1) {
                my_image_component_1 = my_image_component_1_1;
            },
            function (my_trip_component_1_1) {
                my_trip_component_1 = my_trip_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router) {
                    this._router = _router;
                    this.title = 'Tour of Heroes';
                }
                AppComponent.prototype.gotoTripMainPage = function (tripId) {
                    var link = ['TripMainPage', { id: tripId }];
                    this._router.navigate(link);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: "app/html/base-template.html",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            my_image_service_1.MyImageService,
                            my_trip_service_1.MyTripService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/trips',
                            name: 'Trip',
                            component: my_trip_component_1.MyTripComponent
                        },
                        {
                            path: '/trips/:id',
                            name: 'TripMainPage',
                            component: my_trip_component_1.MyTripComponent
                        },
                        {
                            path: '/images',
                            name: 'Image',
                            component: my_image_component_1.MyImageComponent,
                            useAsDefault: true
                        },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map