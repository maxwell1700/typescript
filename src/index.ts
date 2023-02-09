let myname:string = "max"

let age:number = 45

if (age < 50) {
    age +=10
}

console.log(age)


function getName(user:string):string{
 return "max"
}



type Emplyoee = {
    id: number,
    age: string,
    uname: string
}

let emp : Emplyoee = {
    id : 12,
    age: "12",
    uname: "max"
}

// using enums is a more readable way to define a list of variables


enum Weekdays {
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY
}


let secondDay : Weekdays = Weekdays.TUESDAY

console.log(secondDay)


class Person {
    name:string
    age:number
    email:string



    constructor(myname:string, myage:number, myemail:string){
            this.name = myname
            this.age = myage
            this.email = myemail
    }
}