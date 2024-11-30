//|> 1. number

let userId = 5666674;




/*

any is basically not a type but rather a marker which states
that we dont want explicit type checking.
People consider any as a type and use it every where to
get away with type checking. But any is to be used with caution
like in the scenario where we dont want explicit type checking.
*/


//|> functions: In functions it is always good to define types

function addTwo(num: number): number {
    return num + 2;
}
addTwo(5);


function signUpUser(name: string, email: string, isPaid: boolean) {
}

signUpUser("Praveen", "praveen@p.com", false);


let loginUser = (name: string, pass: string, id = 0) => {

}

loginUser("Praveen", "pas77");

// ----------------------------------------------------


// function getValue(num: number): string {

//     if (num > 5) {
//         return true;   //|> if return type of func is string this line gives error
//     }
//     return "200 OK";  //|> if return type of func is boolean this line gives error
// }


const getHello = (s: string): string => {
    return "";
}

const heroes = ["thor", "spiderman", "ironman"];

heroes.map((hero): string => {
    return `hero is${hero}`;
})

function consoleError(errMsg: string): void {
    console.log(errMsg);
}

// |> objects -> descturcting

function createUser({ u_name, isPaid }: { u_name: string; isPaid: boolean }) {
    console.log(u_name, isPaid);
}

createUser({ u_name: "Praveen", isPaid: false });


function createCourse1(): {} { return {}; }

function createCourse(): { name: string, price: number } {
    return { name: "ReactJs", price: 399 };
}

//|> type aliases 


type User = {
    name: string;
    age: number;
    email: string;
    phone: number;
    isMarried: boolean;
    onLoad: boolean;
    bloodGroup: string;
}

function registerUser(user: User): User {
    return ({
        name: "Alice",
        age: 30,
        email: "alice@example.com",
        phone: 1234567890,
        isMarried: true,
        onLoad: false,
        bloodGroup: "AB+",
    })
}

//|> readonly

type Student = {
    readonly _id: string;  //|> cant change value
    name: string;
    email: string;
    creditCardNumber?: number;  //|> optional 
}


let student1: Student = {
    _id: "88d4w",
    name: "John",
    email: "john@j.com",
}

student1.name = "Chris"; //|> error cant change readonly value
// student1._id = "r8e5s"; //|> error cant change readonly value

// -----------------------------------------
type cardNumber = {
    cardNumber: string;
}

type expiry = {
    cardExpiry: number;
}

type CardDetails = cardNumber & expiry & {
    cvv: number;
}


//|> arrays

const superHeros: string[] = [];

superHeros.push("spiderman");

//|> OR

const heroPower: Array<number> = [];

type Hero = {
    name: string
    strength: number,
    isActive: boolean,
}

const allSuperHeros: Hero[] = [];

allSuperHeros.push({ name: "Dr. Strange", strength: 5, isActive: false });

//|> IMPROTANT -------------------------------------------------------------------
//|> 1. Union type

let score: number | string = 33;

score = 44;
score = "55";


type LocalUser = {
    name: string,
    id: number,
}

type Admin = {
    user_name: String,
    id: number,
}


let praveen: LocalUser | Admin = { name: "Praveen", id: 555 };

praveen = { user_name: "PLohar", id: 857 };



function makeString(id: number | string) {
    console.log(`User has id: ${id}`);
}

makeString("47");
makeString(47);


function getDBID(id: number | string) {
    if (typeof id == "string") {  //|> narrowing
        id.toLowerCase();
    }
}


//|> union with array

const dataNum: number[] = [1, 2, 3];
const dataStr: string[] = ["1", "2", "3"];

// const dataMixed: string[] | number[] = [12, "3", "4"]; |> wrong syntax
// const dataMixed: string | number[] = [12, "3", "4"]; |> wrong syntax
const dataMixed: (string | number)[] = [12, "3", "4"]; //|> correct syntax

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew" //|> error


//|> tuple-----------------------------------------
let t_user: [string, number, boolean];
t_user = ["hc", 45, true];
// t_user = [45, "csc", true]; |> order of tuple elements should be maintained

let rgb: [number, number, number] = [152, 255, 232];

type Person = [number, string];

const p1: Person = [541, "vejvpssp"];

p1[1] = "dheodcs";

//|> also with tuples, there is a controversial behaviour in 
//|> which all methods of arrays works with tuples.

//|> as of now its gives error -> may be micrsoft upadated it

// rgb.push(true);

//|> Enums------------------------------------------

enum SeatsTypeAvail {
    AISLE,
    MIDDLE,
    WINDOW,
}

const seat1 = SeatsTypeAvail.AISLE;


//|> Interfaces-------------------------------------

interface Data {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // generateRandomCode(): string
    generateRandomCode: () => string,
    findFriendsCount: (name: string) => number,
}

//|> Now Interfaces can be re-opened i.e, we can add properties

interface Data {
    githubToken: string
}

//|> also can be inherited
interface Encryption extends Data {
    encryptionLevel: "level1" | "level2" | "level2"
}

const d1: Data = {
    dbId: 22,
    email: "pLohar@p.com",
    userId: 555,
    googleId: "sdsf88",
    githubToken: "ffr2112cgt744",
    generateRandomCode: () => {
        return "code_rand_528";
    },
    findFriendsCount: (name: string) => {
        return name.length;
    }

};


// ! IMPORTANT: 1. interface can be inherited, also they can be re-opened, whereas
// !            type can't be re-opened.
// !            2. types can be extended using `&`

const d2: Encryption = {
    encryptionLevel: "level2",
    dbId: 22,
    email: "pLohar@p.com",
    userId: 555,
    googleId: "sdsf88",
    githubToken: "ffr2112cgt744",
    generateRandomCode: () => {
        return "code_rand_528";
    },
    findFriendsCount: (name: string) => {
        return name.length;
    }
}


d1.email = "prvl@p.com";

// d1.dbId=555 //|> not allowed

d1.findFriendsCount("Praveen");




export { };


