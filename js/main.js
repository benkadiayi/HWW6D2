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
function display(object) {
    for(let i = 0; i < Object.keys(object).length; i++){
        if(typeof Object.values(object)[i] == 'string'){
            console.log(Object.values(object)[i])
        }else if(typeof Object.values(object)[i] == 'object'){
            if(typeof Object.values(object)[i][1] == 'string'){
                for(let e = 0; e < Object.values(object)[i].length; e++){
                    console.log(Object.values(object)[i][e])
                }
            }else {
                for(let e = 0; e < Object.keys(object)[i][1].length; e++){
                    console.log(Object.values(object)[i][1])
                }
            }
            
        }
        //console.log(Object.keys(object)[i])
    }
    

}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;
    

    
    this.printInfo = () => {
        return `name: ${this.name}, Age: ${this.age}`
    }

    this.addAge = (add) => {
        return `name: ${this.name}, Age: ${this.age + add}`
    }

};
 let person1 = new Person('Ben', 23);
 let person2 = new Person('Sarah', 34);

person2.printInfo();
person1.addAge(3);


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

  
const wordLength = (str) => {
    return new Promise( (resolve, reject)  => {
        if(str.length >10 ){
            resolve(true)
        }else{
            reject(false)
        }
    })
};

wordLength('good')

.then((result)=> {
    console.log('Big Word')
})

.catch ((error) => {
    console.log('Small Word')
})