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
var Hero = (function () {
    function Hero(armor) {
        // Needs to be set before Armor
        this.armor = armor;
        this.health = 4;
    }
    Object.defineProperty(Hero.prototype, "health", {
        get: function () {
            return this._health;
        },
        set: function (v) {
            this._health = v + (3 * this.armor);
        },
        enumerable: true,
        configurable: true
    });
    return Hero;
})();
var Place = (function () {
    function Place() {
    }
    return Place;
})();
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Hero Details";
        this.hero = new Hero(3);
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: '<h1>{{title}}</h1><h2> {{hero.health}} {{hero.armor}} details!</h2>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map