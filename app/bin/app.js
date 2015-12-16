var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// var reflect = require('/node_modules/reflect-metadata/Reflect');
//var reflect = require('reflect-metadata');
//import 'zone.js';
require('reflect-metadata');
var angular2_1 = require('angular2/angular2');
//import {Vehicle} from './Models/vehicle.mdl';
// FORM_DIRECTIVES = [NgModel, ...]
// CORE_DIRECTIVES = [ NgFor, NgIf, NgClass, ...]
var Metric;
(function (Metric) {
    Metric[Metric["Standard"] = 0] = "Standard";
    Metric[Metric["Metric"] = 1] = "Metric";
})(Metric || (Metric = {}));
var Vehicle = (function () {
    function Vehicle(make, name, horsePower, weightInPounds, metric) {
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
        // API Calls?
        this.title = "Vehicle Details";
        this.vehicles = VEHICLES;
    }
    AppComponent.prototype.onSelect = function (vehicle) { this.selectedVehicle = vehicle; };
    AppComponent.prototype.getSelectedClass = function (vehicle) {
        // Adds the 'selected' class if the element's bound vehicle is the selectedVehicle
        // Removes the class if not (Two Way class binding)
        return { 'selected': vehicle == this.selectedVehicle };
    };
    AppComponent.prototype.getMessage = function () {
        if (this.selectedVehicle.weight < 2000)
            this.message = "Super light yo";
        else {
            this.message = "Heavy bro";
            this.getPowerWeightRatio();
        }
    };
    AppComponent.prototype.onCapslockPressed = function (event) {
        this.capsIsPressed = !this.capsIsPressed;
        this.message = "Caps Lock is on: " + event.target.value;
    };
    AppComponent.prototype.getPowerWeightRatio = function () {
        switch (this.selectedVehicle.metric) {
            case Metric.Metric:
                this.weightUnit = "kG";
                this.powerUnit = "kW";
                break;
            case Metric.Standard:
                this.weightUnit = "lbs";
                this.powerUnit = "hp";
                break;
        }
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            directives: [angular2_1.FORM_DIRECTIVES, [angular2_1.CORE_DIRECTIVES]],
            styleUrls: ['./src/styles.css'],
            templateUrl: 'src/vehicle.view.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
var VEHICLES = [
    new Vehicle("BMW", "E30 M3", 192, 2700, Metric.Standard),
    new Vehicle("Yamaha", "FZ-09", 110, 414, Metric.Standard),
    new Vehicle("Porsche", "911 Carrera S", 430, 3075, Metric.Metric),
    new Vehicle("Nissan", "GT-R", 545, 3813, Metric.Metric),
    new Vehicle("Ferrari", "458 Italia", 597, 3076, Metric.Metric)
];
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map