// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// --------------------------- Consider the following variable:
var mantra = "Be the dev"

// 1a. Write the code that determines if there is a 'B' in mantra.
mantra.includes("B")
//Sanity check that the above line's logic works
// console.log(mantra.includes("B"));

// 1b. Write the code that determines if there is an 'x' in mantra.
mantra.includes("x")
//Sanity check that the above line's logic works
// console.log(mantra.includes("x"));

// 1c. Write the code that determines if there is a 'v' in mantra.
mantra.includes("v")
//Sanity check that the above line's logic works
// console.log(mantra.includes("v"));

// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.
const ifStringBoolean = (string1, string2) => {
  if (typeof string1.search(string2) === "number") {
    return `${string2} exists inside of ${string1}`
  } else {
    return `${string2} does not exist inside of ${string1}`
  }
}
//Sanity Checks for ifStringBoolean()
// console.log(ifStringBoolean(mantra,"B"));
// console.log(ifStringBoolean(mantra,"x"));
// console.log(ifStringBoolean(mantra,"v"));

// ------------------------------ Consider the following variables:
var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"
const compareStringLength = (string1, string2) => {
  if (string1.length > string2.length) {
    return string1
  } else if (string1.length < string2.length) {
    return string2
  } else if (string1 === string2) {
    return `${string1} and ${string2} are the same length`
  } else {
    return "Please enter two valid strings for comparison."
  }
}

// Sanity Checks for compareStringLength()
// console.log(compareStringLength(myDog, myCat));
// console.log(compareStringLength(myDog, "short"));
// console.log(compareStringLength("short", myCat));
// console.log(compareStringLength(5, myCat));

// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]
const toArray = (arg1, arg2) => {
    return [arg1, arg2]
}
//Sanity checks for toArray()
// console.log(toArray(myDog,myCat));
// console.log(toArray("items1", [myCat, myDog]));
// console.log(toArray("jim", 5));

// 2c. STRETCH: Write a function that accepts two variables and returns a string in all lowercase letters. Expected output: "snoopy garfield"
const twoToLower = (arg1, arg2) => {
  return `${arg1.toLowerCase()} ${arg2.toLowerCase()}`
}
//Sanity checks for twoToLower()
// console.log(twoToLower(myDog, myCat));

// ------------------------------ Consider the following variable:
var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.
//hint: "logs" in this case means "prints to the terminal console."  This is typically done with a console.log(x), where x is the string, function, etc that you wish to see in the terminal.
const letterLog = (string) => {
  if (typeof string === "string") {
    for (var i = 0; i < string.length; i++) {
      console.log(string[i]);
  }} else {
    console.log("Please enter a valid string.");
  }
  return
}
//Sanity checks for letterLog()
// letterLog("jimbo");
// letterLog(5);

// 3b. Write the code that logs each letter of the message using map.
const letterLogMap = (string) => {
  if (typeof string === "string") {
    let newArr = string.split("")
    return newArr.map((v,i) => {
    console.log(string[i]);
  })} else {
    console.log("Please enter a valid string.");
  }
}
//Sanity checks for letterLog()
// letterLogMap("jimbo");
// letterLogMap(5);

// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.
// Code commented out for convenience
  // var i = 0
  // do {
  //   console.log(myMessage[i]);
  //   i++
  // } while (i < myMessage.length){
  // }

// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().
const letterLogEach = (letter) => {
  console.log(letter);
}
// Sanity check for letterLogEach()
// myMessage.split("").forEach(letterLogEach);

// ---------------------------- Consider the following variable:
var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"
const noVowels = (arg1) => {
  let newArr = arg1.split("")
  newArr = newArr.filter((v) => {
    // I couldn't figure out a shorthand using things we learned
    if (v !== "a" && v!== "e" && v !== "i" && v !== "o" && v !=="u") {
      return v
    } else {
      return
    }
  })
  return newArr.join("")
}

// Sanity check for noVowels()
// console.log(noVowels(testString));


// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.
const noVowelsPlus = (arg1) => {
  if (typeof arg1 === "string") {
    let newArr = arg1.split("")
    newArr = newArr.filter((v) => {
      if (v !== "a" && v!== "e" && v !== "i" && v !== "o" && v !=="u") {
        return v
      } else {
        return
      }
    })
    return newArr.join("")
  } else {
      return `Error: "${arg1}" entered, expected a string`
  }
}
// Sanity checks for noVowelsPlus()
// console.log(noVowelsPlus(testString));
// console.log(noVowelsPlus(4));

// ------------------------------- Consider the following variable:
var toonimals = [ {name: "Itchy",     animal: "mouse"},
                  {name: "Stimpy",    animal: "cat"},
                  {name: "Daffy",     animal: "duck"},
                  {name: "Scratchy",  animal: "cat"},
                  {name: "Ren",       animal: "dog"},
                  {name: "Felix",     animal: "cat"}]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]
const onlyCats = (array) => {
  let cats = array.filter((v, i) => {
    if (v.animal === "cat") {
      return v
    } else {
      return
    }
  })
  console.log(cats);
}
// Sanity check for onlyCats()
// onlyCats(toonimals)

//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"
const notCats = (array) => {
  let otherAnimals = array.filter((v, i) => {
    if (v.animal !== "cat") {
      console.log(v.name);
      return v.name
    } else {
      return
    }
  })
}
// Sanity check for notCats()
// notCats(toonimals)

//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"

const aboutToon = (array) => {
  let toons = array.map((v) => {
    console.log(`${v.name} is a ${v.animal}`);
})
}
// Sanity check for aboutToons()
// aboutToon(toonimals)
