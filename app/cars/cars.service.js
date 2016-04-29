System.register(['angular2/core', 'angularfire2', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, angularfire2_1;
    var CarsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angularfire2_1_1) {
                angularfire2_1 = angularfire2_1_1;
            },
            function (_1) {}],
        execute: function() {
            CarsService = (function () {
                function CarsService(af) {
                    // let cars = _http.get('./data/cars.json');
                    this.cars = af.list('/cars').map(function (cars) {
                        return cars.map(function (car) {
                            // car.make = af.list(`/make/${car.uid}`);
                            return car;
                        });
                    });
                }
                CarsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [angularfire2_1.AngularFire])
                ], CarsService);
                return CarsService;
            }());
            exports_1("CarsService", CarsService);
        }
    }
});
//# sourceMappingURL=cars.service.js.map