import {bootstrap, Component} from 'angular2/angular2';
class Hero {
    constructor(armor: number) {
        // Needs to be set before Armor
        this.armor = armor;
        this.health = 4;
    }
    id: number;
    name: string;
    armor: number;
    
    private _health : number;
    public get health() : number {
        return this._health;
    }
    public set health(v : number) {
        this._health = v  + (3 * this.armor);
    }
}
class Place {
    name: number;
}

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><h2> {{hero.health}} {{hero.armor}} details!</h2>'
})


class AppComponent {
    public title = "Hero Details";
   public hero = new Hero(3);
  
}
bootstrap(AppComponent);