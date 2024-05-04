//variable: inventory is array of objects 

//example variabe is a string:
//const myString= "Johnny"
//const myName= "Johnny"

//example variabe is a number:
//let myNumber =4

//example variabe is a boolean:
//var amHungry=true

//instead of var use const and let
//const if not allowed to redefine or rename variable

//myName="Fiona"--error bcs const 

//myNumber=5--no error bcs let

//turn variables into Object --create obj{}--myPerson object
const myPerson={
    //properties
    name: "Fiona",
    Cash:20,
    amHungry: amHungry
}

//how to see the name
console.log(myPerson.name)

//alt:
console.log(myPerson["name"])

//nested obj and arrays is a thing

//reassign property value is possible for the const variable myPerson
myPerson.cash=12
console.log(myPerson.cash)

//make array, dont care data types
//const myArray=["hello", false, 2 ,{name:"Fiona"},[1,1,2]]

const myArray=[0,1,2,3,4,5,6,7,8,9,10]
myArray.push(11)//youre adding number 11 at the end
console.log(myArray.length)

//array of obj
const objArrat=[{
    

},
{
    name:
    cash:
    amHUngry:
},{},{}]


console.log(objArray)//log entire array
console.log(objArray.length)//log the array length

for (let i=0; i<10;i++){
    console.log(i)}//standard for loop, start at 0 end at 10
//itll give us until 0-9, to see 10 <=10


for (let i=0; i<objArray.length;i++){//alt for loop
}
//how  to pull obj out of array--put index of the obj within the array--[0] if the first obj of array
for (let i=0; i<objArray.length;i++){//alt for loop
    console.log(objArray[3])}

    for (let i=0; i<objArray.length;i++){
console.log(objArray[i],i)}//each time run will pull a different obj
//and also see what i is.

//for of loop to see everything in array
for (const person of objArray){
console.log(person)
}

//if just want  the name
for (const person of objArray){
    console.log(person.name)
    }
//same as:
    for (let i=0; i<objArray.length;i++){
    console.log(objArray[i].name)}



    //define function ---

    function sayHello(){
        console.log("hello")
       
    }
//call function
    sayHello()

//define anthr fn-- (parameter)--when invoked it is called an argument
   /* function sayHelloToAFriend(friendName){
        console.log(`hello ${friendName}`)
       
    }
*/

//Alt or Preferable way for Tommy: to run fn the same as above
const sayHelloToAFriend=(friendName) =>{
    console.log(`hello ${friendName}`)
}

//call function
sayHelloToAFriend("Iris")


/*Nouns(thing) vs verb(do) fn*/
const sayHelloToAFriend=(friendName) =>{
    return `hello ${friendName}`//if you call fn nothing happen
}

const hiIris= sayHelloToAFriend("Iris")
console.log(hiIris)

const hiLJ=  sayHelloToAFriend("LJ")
console.log(hiLJ)

//Tommy's challenge:
//make array of class take ourNames array as parameter and prints each name to console

//Answer:
const ourNamesToConsole=(ourNamesArray) =>{
    //slow way: console.log(ourNames[0])
    for(const name of ourNamesArray){
        console.log(name)
    }
    
}
//call:
ourNamesToConsole(ourNames)


//or not so good but works:
const ourNamesToConsole=() =>{
    //slow way: console.log(ourNames[0])
    for(const name of ourNames){
        console.log(name)
    }
    
}
//call:
ourNamesToConsole()

//Tommy's challenge my code:
const ourNames =
["Tommy", "Andrew", "Iris", "Macey", "Caila", "Will", "Jessica", "Seth", "LJ", "Fiona"]


console.log(ourNames)