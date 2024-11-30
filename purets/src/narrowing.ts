//|> https://www.typescriptlang.org/docs/handbook/2/narrowing.html




// type narrowing : `in operator`


interface User {
    u_name: string,
    email: string
}

interface Admin {
    u_name: string,
    email: string,
    isAdmin: boolean
}


function validateAdmin(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}

// type narrowing : class instance and class methods--------------------------

class Birds {
    name: string;
    hasWings: boolean = true;

    constructor(name: string) {
        this.name = name;
    }

    fly(): void {
        console.log(`${this.name} is flying.`);
    }
}

class Mammals {
    name: string;
    canSwim: boolean;

    constructor(name: string, canSwim: boolean) {
        this.name = name;
        this.canSwim = canSwim;
    }

    swim(): void {
        console.log(`${this.name} is swimming.`);
    }
}


//|> 1. class instance narrowing_____________
function canFly(animal: Birds | Mammals): boolean {
    if (animal instanceof Birds) {
        return animal.hasWings;
    }
    return false;
}

//|> 2. class methods_________________________
// User-defined type guard to narrow down the type based on the presence of the "fly" method
function isBirds(animal: Birds | Mammals): animal is Birds {
    return 'fly' in animal;
}

function performAction(animal: Birds | Mammals): void {
    if (isBirds(animal)) {
        animal.fly();
    } else {
        animal.swim();
    }
}

const peacock = new Birds("Peacock");
const buffalo = new Mammals("Buffalo", true);

performAction(peacock); // Output: Peacock is flying.
performAction(buffalo); // Output: Buffalo is swimming.



//|> read : Narrowing discriminated unions & Exhaustive checking
//|> YT Hitesh Choudhary freeCodeCamp.org timestamp: 4:30:00
// https://github.com/hiteshchoudhary/typescript-youtube-22

//|> typescript React project : freecodeCamp.org YT : React & TypeScript - Course for Beginners

