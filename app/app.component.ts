import {Component} from 'angular2/core';
import {CarsComponent} from "./cars/cars.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <cars></cars>
        `,
    directives: [CarsComponent]
})
export class AppComponent {
    title = "Main Index";
}