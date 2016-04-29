import {Injectable} from 'angular2/core';
import {AngularFire} from 'angularfire2';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class CarsService    {
    cars:Observable<any[]>;
    constructor(af:AngularFire)  {
        // let cars = _http.get('./data/cars.json');

        this.cars = af.list('/cars').map((cars) =>  {
            return cars.map(car => {
                // car.make = af.list(`/make/${car.uid}`);
                return car;
            });
        });
    }

    // setCar(make: string, model: string, hp: number, weight: number)   {
    //     const body = JSON.stringify({make: make, model: model, hp: hp, weight: weight});
    //     return this.af.put('https://glowing-fire-4244.firebaseio.com/cars.json', body)
    //         .map(response => response.json());
    // }
    //
    // getCar()   {
    //     return this.af.get('https://glowing-fire-4244.firebaseio.com')
    //         .map(response => response.json());
    // }
}