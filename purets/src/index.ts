// class User {
//     public email: string    //|> by default everything is public
//     private name: string
//     readonly city: string = "Mumbai"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }

// }



//|> OR ------------- 
class User {
    protected courseCount = 1;
    readonly city: string = "Mumbai"
    constructor(
        public email: string,
        private name: string) { }

    private deleteToken() { //|> 

    }

    get getAppleEmail(): string {    //|> getter
        return `apple ${this.email}`;
    }

    get getCurrCount(): number {
        return this.courseCount;
    }

    set increaseCount(count: number) {  //|> setter, also setter does not have return type. it just sets values
        if (count < 5) {
            throw new Error("Cant increase count")
        }
        this.courseCount = count;
    }
}

class SubUser extends User {
    isFamily: boolean = true;

    changeCourseCount() {
        this.courseCount = 4;
    }
}

const user1 = new User("prvn@p.com", "Praveen");

console.log(user1);
