function identityOne(val: number): number {
    return val;
}

function identityTwo(val: number) {
    return val;
}


//|> Generics
function identityThree<Type>(val: Type): Type {
    return val;
}

function identityFour<T>(val: T): T {
    return val;
}



interface CustomType {
    brand: string;
    make: number;
}

function identityFive<T>(val: T): T {
    return val;
}

// Example usage:
const example: CustomType = { brand: 'ExampleBrand', make: 42 };
const result = identityFive(example);
console.log(result);


//|> array type generic____________

function getProducts<T>(products: T[]): T {
    return products[3];
    // return 3; //|> wrong, althought the above return type is also number, but it is returning the val from array and not number directly 
}


const getMoreProducts = <T>(products: T[]): T => {
    return products[4];
}
const stringArray = ['a', 'b', 'c', 'd', 'e'];
const resultOfStringArray = getMoreProducts(stringArray); // resultOfStringArray is 'e'

const numberArray = [1, 2, 3, 4, 5];
const resultOfNumberArray = getMoreProducts(numberArray); // resultOfNumberArray is 5

//|> multiple args

function anotherFunction<T, U>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3, "samplestring");

function anotherFunctionNext<T, U extends number>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}
// anotherFunctionNext(3, "sampleString")  //|> U in above func extents numbers, so cant use string in args
anotherFunctionNext(3, 45);


// --------------------------------

interface AuthInfo {
    connection: string;
    username: string;
    password: string;
}

function getAuthInfo<T, U extends AuthInfo>(val1: T, val2: U): { val1: T; val2: U } {
    return {
        val1,
        val2
    };
}

// Example usage:
const authInfo = getAuthInfo(5, { connection: "example", username: "user", password: "pass" });
console.log(authInfo);



//|> class generics

class Course<T> {

    public cart: T[] = [];

    addCart(product: T): void {
        this.cart.push(product);
    }
}

// Example usage:

const stringCourse = new Course<string>();
stringCourse.addCart("JavaScript");
stringCourse.addCart("TypeScript");
console.log(stringCourse.cart); // Output: ["JavaScript", "TypeScript"]

const numberCourse = new Course<number>();
numberCourse.addCart(1);
numberCourse.addCart(2);
console.log(numberCourse.cart); // Output: [1, 2]



