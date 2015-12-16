// var reflect = require('/node_modules/reflect-metadata/Reflect');
//var reflect = require('reflect-metadata');
//import 'zone.js';
import 'reflect-metadata';
import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
//import {Vehicle} from './Models/vehicle.mdl';
// FORM_DIRECTIVES = [NgModel, ...]
// CORE_DIRECTIVES = [ NgFor, NgIf, NgClass, ...]

enum Metric {
    Standard,
    Metric
}
class Vehicle {
    constructor(make: string, name: string, horsePower: number, weightInPounds: number, metric:Metric) {
        this.make = make;
        this.name = name;
        this.horsePower = horsePower;
        this.weight = weightInPounds;
    }
    name: string;
    make: string;
    horsePower: number;
    weight: number;
    metric: Metric;
    public get powerToWeightRatio() : number {
        return parseFloat((this.weight / this.horsePower).toPrecision(2));
    }
    
}

@Component({
    selector: 'my-app',
    directives: [FORM_DIRECTIVES, [CORE_DIRECTIVES]],
    styleUrls: ['./src/styles.css'],
    templateUrl: 'src/vehicle.view.html'


})

    // MultiLine templates by using tilde key
    // {{OneWayBindingModel}} (UI Changes do not set underlying property value)
    // [(ng-model)]="TwoWayDataBindingModel"
    // template: `
    // <h2>{{title}}</h2> 
    // <p *ng-for="#person in people">{{person.name}}</p>
    // `
    
class AppComponent {
    // API Calls?
    public title = "Vehicle Details";
    
    public vehicles = VEHICLES;
    public selectedVehicle: Vehicle; //= new Vehicle("BMW", "E30 M3", 192, 2700);
    public message: string;
    public capsIsPressed: boolean;
    public weightUnit: string;
    public powerUnit: string;
    onSelect(vehicle: Vehicle) { this.selectedVehicle = vehicle}
    getSelectedClass(vehicle: Vehicle){
        // Adds the 'selected' class if the element's bound vehicle is the selectedVehicle
        // Removes the class if not (Two Way class binding)
        return {'selected': vehicle == this.selectedVehicle  };
    }
    getMessage(){
        if (this.selectedVehicle.weight < 2000)
            this.message = "Super light yo";
        else {
            this.message = "Heavy bro"; 
        this.getPowerWeightRatio();
        }
    }
    onCapslockPressed(event){
        this.capsIsPressed = !this.capsIsPressed;
        this.message = "Caps Lock is on: " + event.target.value;
    }
    
    getPowerWeightRatio(){
        switch (this.selectedVehicle.metric){
            case Metric.Metric:
                this.weightUnit = "kG";
                this.powerUnit = "kW";
                break;
            case Metric.Standard:
                this.weightUnit = "lbs";
                this.powerUnit = "hp";
                break;
        }
    }
}
var VEHICLES: Vehicle[] = [
    new Vehicle("BMW", "E30 M3", 192, 2700, Metric.Standard),
    new Vehicle("Yamaha", "FZ-09", 110, 414, Metric.Standard),
    new Vehicle("Porsche", "911 Carrera S", 430, 3075, Metric.Metric),
    new Vehicle("Nissan", "GT-R", 545, 3813, Metric.Metric),
    new Vehicle("Ferrari", "458 Italia", 597, 3076, Metric.Metric)
]
bootstrap(AppComponent);