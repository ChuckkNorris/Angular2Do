import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
// FORM_DIRECTIVES = [NgModel, ...]
// CORE_DIRECTIVES = [ NgFor, NgIf, NgClass, ...]
class Vehicle {
    constructor(make: string, name: string, horsePower: number, weightInPounds: number) {
        this.make = make;
        this.name = name;
        this.horsePower = horsePower;
        this.weight = weightInPounds;
    }
    name: string;
    make: string;
    horsePower: number;
    weight: number;
    
    public get powerToWeightRatio() : number {
        return parseFloat((this.weight / this.horsePower).toPrecision(2));
    }
}

@Component({
    selector: 'my-app',
    directives: [FORM_DIRECTIVES, [CORE_DIRECTIVES]],
    styleUrls: ['./app/styles.css'],
    templateUrl: 'app/vehicle.view.html'


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
    public weightMessage: string;
    onSelect(vehicle: Vehicle) { this.selectedVehicle = vehicle}
    getSelectedClass(vehicle: Vehicle){
        // Adds the 'selected' class if the element's bound vehicle is the selectedVehicle
        // Removes the class if not (Two Way class binding)
        return {'selected': vehicle == this.selectedVehicle  };
    }
    getMessage(){
        if (this.selectedVehicle.weight < 2000)
            this.weightMessage = "Super light yo";
        else {
            this.weightMessage = "Heavy bro"; 
        }
    }
}
var VEHICLES: Vehicle[] = [
    new Vehicle("BMW", "E30 M3", 192, 2700),
    new Vehicle("Yamaha", "FZ-09", 110, 414),
    new Vehicle("Porsche", "911 Carrera S", 430, 3075),
    new Vehicle("Nissan", "GT-R", 545, 3813),
    new Vehicle("Ferrari", "458 Italia", 597, 3076)
]
bootstrap(AppComponent);