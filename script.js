//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// function parse(obj){
//     if(Array.isArray(obj)){
//         for (let i of obj){
//             parse(i)
//         }
//     }else if(typeof obj == 'string'){
//          console.log(obj)
//     }else if (typeof obj == 'object'){
//         for (let key in obj){
//             parse(obj[key])
//         }
//     }
// }
// parse(person3)


let parse = obj => {
    if(Array.isArray(obj)){
        for (let i of obj){
            parse(i)
        }
    }else if(typeof obj == 'string'){
        console.log(obj)
    }else if (typeof obj == 'object'){
        for (let key in obj){
            parse(obj[key])
        }
    }
}
parse(person3)
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Person(name, age){
    this.name = name
    this.age = age + 1

    this.printInfo = function(age){
        console.log(`
        name : ${this.name}
        age : ${this.age}
        `)
    }
}

const person = new Person('Your mom', 500)
console.log(person.age)

person.printInfo()

let person1 = new Person('My Mom', 456)
let person2 = new Person('His Mom', 876 + 3)

console.log(person2)

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


let string = ['Jujutsu Kaisen is Awesome']

function Prom(string){
    return new Promise((res, rej) =>{
        if (string > [9]){
            res(true)
            console.log('Big Word')
        } else {
            rej(false)
            console.log('Small Number')
        }
    })
}
Prom(string)
