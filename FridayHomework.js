// EXERCISE A)

let test = 'Hello, Özgür. Welcome back.'
console.log(test)

// EXERCISE B)

let sum = 10 + 20 
console.log(sum)

// EXERCISE C)

let random = 0 

while(random < 21) {
    console.log(random)
    random = random + 1 
}

console.log("Now random number is at 20")

let me = {
    fullName: {
    name: "Özgür Berkant",
    surname: "Nisli" },
    age: 30, 
    skills: ["ruby", "javascript"]

}


console.log(me)

// EXERCISE E) / F)

delete me.age


console.log(me)

// EXERCISE G)

me.skills.splice(0)

console.log(me)

// JS FUNCTIONS 

// EX.1)
let i = 1
const dice = function() {
    while (i < 7) {
        console.log(i)
        i++
    }
}

dice()


// EX.2)

const a = 2 
const b = 8 




const whoIsBigger = function(a, b) {
            if (b > a) {
                
                return b
            } 
           



}

whoIsBigger()

console.log(b)

// EX.3)
const first = "I"
const second = " love"
const third = " coding"

const splitMe = function(first, second, third) {
        let splitArray = [first, second, third]
        
        
}       


splitMe()

console.log(first, second, third)

// EX.4)
const string12 = "hello."
const boo = true
const deleteOne = function(string12, boo) {
        if (boo === true)
        console.log("yeah rite.")
}  

deleteOne(string12, boo)

// EX.5)

const onlyLetters2 = "I have 4 dogs"


const onlyLetters = function(onlyLetters2) {
        onlyLetters2 = onlyLetters2.replace(4)
        console.log(onlyLetters2)
        
}


onlyLetters(onlyLetters2)

// EX.6)
const emailcheck = 'susi@hotmail.com'
const isThisAnEmail = function(emailcheck) {
    let isThisAnEmail3 = emailcheck.include('@')
    console.log(isThisAnEmail3)

}

isThisAnEmail(emailcheck)

// EX.7)

const whatDayIsIt = function() {
    const today = new Date()
    console.log(today)
}

whatDayIsIt()

// EX.8)

const rollTheDices = function() {
    
    const diceRollValues = [1, 2, 3, 4, 5, 6]
    let valueRoll = Math.random(diceRollValues)
    return valueRoll
    while (diceRollValues >== 6) {
        
    }
    console.log(valueRoll)




}
rollTheDices()