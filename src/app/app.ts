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
    styles:[`
        .vehicles {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
        .vehicles li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
        .vehicles li:hover {color: #369; background-color: #EEE; left: .2em;}
        .vehicles .badge {
            font-size: small;
            color: white;
            padding: 0.1em 0.7em;
            background-color: #369;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -1px;
        }
        .green { background-color: #ABCABC; }
        .selected { background-color: #05E671; color: #0649BD; }
    `],
 //   templateUrl: 'vehicle.view.html',
    // MultiLine templates by using tilde key
    // {{OneWayBindingModel}} (UI Changes do not set underlying property value)
    // [(ng-model)]="TwoWayDataBindingModel"

    template: `
    <h2>My Garage</h2>
    <ul class="vehicles">
        <!--* means Element and Children constitute master template-->
        <!--#vehicle indicates local template variable-->
        <li *ng-for="#vehicle of vehicles" 
            (click)="onSelect(vehicle)" 
            [ng-class]="getSelectedClass(vehicle)">
            <span class="badge">{{vehicle.make}}</span> {{vehicle.name}}
        </li>
    </ul>
    
    <h1>{{title}}</h1>
    <div *ng-if="selectedVehicle">
        <h2>{{selectedVehicle.name}}</h2>
        <label>Name</label>
        <div>
            <input [(ng-model)]="selectedVehicle.name" placeholder="name">
        </div>
        <label>Horse Power</label>
        <div>
            <input [(ng-model)]="selectedVehicle.horsePower" placeholder="e.g. 264">
        </div>

        <label>Curb Weight (lbs)</label>
        <div>
            <input (keyup)="getMessage()" [(ng-model)]="selectedVehicle.weight" placeholder="e.g. 3064">
        </div>
        <label>{{weightMessage}}</label>
        <h2> {{selectedVehicle.horsePower}} hp, {{selectedVehicle.weight}} lbs, {{selectedVehicle.powerToWeightRatio}} lbs/hp</h2>
    </div>
    `
})


class AppComponent {
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