import {Component} from 'angular2/core'
import {CarsService} from './cars.service'
import {ControlGroup} from "angular2/common";

@Component({
    selector: 'cars',
    template: `
        <h1>{{title}}</h1>
        <h3>Response: {{response}}</h3>
        <ul>
             <li *ngFor="#car of cars | async">{{car}}</li>   
        </ul>
        `,
    providers: [CarsService]
})
export class CarsComponent {
    title = "List of Cars";
    cars;
    response: string;

    constructor(carsService: CarsService)   {
        this.cars = carsService.valueOf();
    }

    // onSubmit(form: ControlGroup)    {
    //     this.cars.setCar(form.value.make, form.value.model, form.value.hp, form.value.weight)
    //         .subscribe(
    //             car => this.response = JSON.stringify(car),
    //             err => console.log(err)
    //         );
    // }
    //
    // onGetCar()  {
    //     this.cars.getCar()
    //         .subscribe(
    //             car => this.response = JSON.stringify(car),
    //             err => console.log(err)
    //         );
    // }
}