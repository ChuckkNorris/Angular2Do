var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
// {NgModel}
var Vehicle = (function () {
    function Vehicle(make, name, horsePower, weightInPounds) {
        this.make = make;
        this.name = name;
        this.horsePower = horsePower;
        this.weight = weightInPounds;
    }
    Object.defineProperty(Vehicle.prototype, "powerToWeightRatio", {
        get: function () {
            return parseFloat((this.weight / this.horsePower).toPrecision(2));
        },
        enumerable: true,
        configurable: true
    });
    return Vehicle;
})();
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Vehicle Details";
        this.selectedVehicle = new Vehicle("BMW", "E30 M3", 192, 2700);
        this.vehicles = VEHICLES;
    }
    AppComponent.prototype.onSelect = function (vehicle) { this.selectedVehicle = vehicle; };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgFor],
            styles: ["\n        .vehicles {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n        .vehicles li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n        .vehicles li:hover {color: #369; background-color: #EEE; left: .2em;}\n        .vehicles .badge {\n            font-size: small;\n            color: white;\n            padding: 0.1em 0.7em;\n            background-color: #369;\n            line-height: 1em;\n            position: relative;\n            left: -1px;\n            top: -1px;\n        }\n        .selected { background-color: #EEE; color: #369; }\n"],
            // MultiLine templates by using tilde key
            // {{OneWayBinding}}
            // [(ng-model)]="TwoWayDataBinding"
            template: "\n    <h2>My Garage</h2>\n    <ul class=\"vehicles\">\n        <!--* means Element and Children constitute master template-->\n        <!--#vehicle indicates local template variable-->\n        <li *ng-for=\"#vehicle of vehicles\" (click)=\"onSelect(vehicle)\">\n            <span class=\"badge\">{{vehicle.make}}</span> {{vehicle.name}}\n        </li>\n    </ul>\n    \n    <h1>{{title}}</h1>\n    <h2>{{selectedVehicle.name}}</h2>\n    <label>Name</label>\n        <div>\n            <input [(ng-model)]=\"selectedVehicle.name\" placeholder=\"name\">\n            {{selectedVehicle.name}}\n        </div>\n    <h2> {{selectedVehicle.horsePower}} hp, {{selectedVehicle.weight}} lbs, {{selectedVehicle.powerToWeightRatio}} lbs/hp</h2>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
var VEHICLES = [
    new Vehicle("BMW", "E30 M3", 192, 2700),
    new Vehicle("Yamaha", "FZ-09", 110, 414),
    new Vehicle("Porsche", "911 Carrera S", 430, 3075),
    new Vehicle("Nissan", "GT-R", 545, 3813),
    new Vehicle("Ferrari", "458 Italia", 597, 3076)
];
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map