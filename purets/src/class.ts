

/*
!IMPORATANT :  calling order
|> The base class fields are initialized
|> The base class constructor runs
|> The derived class fields are initialized
|> The derived class constructor runs
*/

class Base {
    name = "base";
    constructor() {
        console.log("My name is " + this.name);
    }
}

class Derived extends Base {
    name = "derived";
}

// Prints : "My name is base", and not My name is  "derived"
const d = new Derived();


//------------------------------------------------------------------------------------------------


class Vehicle {
    brand: string;
    model: string
    year: number;
    color: string;

    constructor(brand: string, model: string, year: number, color: string) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    displayInfo(): string {
        return `${this.brand} ${this.model} ${this.year} ${this.color}`;
    }
}

class Car extends Vehicle {

    numberOfDoor: number;
    private chasisNumber: number = 885749;

    constructor(brand: string, model: string, year: number, color: string, numberOfDoor: number) {
        super(brand, model, year, color);
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.numberOfDoor = numberOfDoor;

    }

    get getChasisNumber(): number {
        return this.chasisNumber;
    };

    set setChasisNumber(chNum: number) {
        this.chasisNumber = chNum;
    }

    displayInfo(): string {
        return `${super.displayInfo} ${this.numberOfDoor}`;
    }

}


const c1 = new Car("Toyota", "Camry", 2016, "White", 4);
const chNumber = c1.getChasisNumber;
console.log(chNumber);

c1.setChasisNumber = 888574;