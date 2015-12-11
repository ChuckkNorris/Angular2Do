import {bootstrap, Component, FORM_DIRECTIVES, NgFor} from 'angular2/angular2';
// {NgModel}
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
    directives: [FORM_DIRECTIVES, NgFor],
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
        .selected { background-color: #EEE; color: #369; }
`],

    // MultiLine templates by using tilde key
    // {{OneWayBinding}}
    // [(ng-model)]="TwoWayDataBinding"
    template: `
    <h2>My Garage</h2>
    <ul class="vehicles">
        <!--* means Element and Children constitute master template-->
        <!--#vehicle indicates local template variable-->
        <li *ng-for="#vehicle of vehicles" (click)="onSelect(vehicle)">
            <span class="badge">{{vehicle.make}}</span> {{vehicle.name}}
        </li>
    </ul>
    
    <h1>{{title}}</h1>
    <h2>{{selectedVehicle.name}}</h2>
    <label>Name</label>
        <div>
            <input [(ng-model)]="selectedVehicle.name" placeholder="name">
            {{selectedVehicle.name}}
        </div>
    <h2> {{selectedVehicle.horsePower}} hp, {{selectedVehicle.weight}} lbs, {{selectedVehicle.powerToWeightRatio}} lbs/hp</h2>
    `
})


class AppComponent {
    public title = "Vehicle Details";
    public selectedVehicle = new Vehicle("BMW", "E30 M3", 192, 2700);
    public vehicles = VEHICLES;
    onSelect(vehicle: Vehicle) { this.selectedVehicle = vehicle}
  
}
var VEHICLES: Vehicle[] = [
    new Vehicle("BMW", "E30 M3", 192, 2700),
    new Vehicle("Yamaha", "FZ-09", 110, 414),
    new Vehicle("Porsche", "911 Carrera S", 430, 3075),
    new Vehicle("Nissan", "GT-R", 545, 3813),
    new Vehicle("Ferrari", "458 Italia", 597, 3076)
]
bootstrap(AppComponent);