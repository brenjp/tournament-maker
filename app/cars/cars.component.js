System.register(['angular2/core', './cars.service'], function(exports_1, context_1) {
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
    var core_1, cars_service_1;
    var CarsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cars_service_1_1) {
                cars_service_1 = cars_service_1_1;
            }],
        execute: function() {
            CarsComponent = (function () {
                function CarsComponent(carsService) {
                    this.title = "List of Cars";
                    this.cars = carsService.valueOf();
                }
                CarsComponent = __decorate([
                    core_1.Component({
                        selector: 'cars',
                        template: "\n        <h1>{{title}}</h1>\n        <h3>Response: {{response}}</h3>\n        <ul>\n             <li *ngFor=\"#car of cars | async\">{{car}}</li>   \n        </ul>\n        ",
                        providers: [cars_service_1.CarsService]
                    }), 
                    __metadata('design:paramtypes', [cars_service_1.CarsService])
                ], CarsComponent);
                return CarsComponent;
            }());
            exports_1("CarsComponent", CarsComponent);
        }
    }
});
//# sourceMappingURL=cars.component.js.map