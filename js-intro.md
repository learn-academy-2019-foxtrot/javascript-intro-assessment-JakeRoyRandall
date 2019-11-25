# ASSESSMENT 1: INTRO TO JAVASCRIPT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.   

1. What is a function? Why would you use one?

  Your answer:

    A function is a piece of code that "does" something.
    A function may need to be passed in arguments to work.
    A method is a function.
    There are many methods that can assess or manipulate data that come with vanilla JS.

  Researched answer:

    Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.

    source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

2. List 5 examples of JavaScript array methods.

  Your answer:

    .join() -- joins an array into a string

    .concat() -- adds together two arrays

    .push() -- puts a value at the end of an array

    .shift() -- removes the first value of an array

    .unshift() -- puts a value to the start of an array

  Researched answer:

    concat()	Joins two or more arrays, and returns a copy of the joined arrays

    copyWithin()	Copies array elements within the array, to and from specified positions

    entries()	Returns a key/value pair Array Iteration Object

    every()	Checks if every element in an array pass a test

    fill()	Fill the elements in an array with a static value

    filter()	Creates a new array with every element in an array that pass a test

    find()	Returns the value of the first element in an array that pass a test

    findIndex()	Returns the index of the first element in an array that pass a test

    forEach()	Calls a function for each array element

    from()	Creates an array from an object

    includes()	Check if an array contains the specified element

    indexOf()	Search the array for an element and returns its position

    isArray()	Checks whether an object is an array

    join()	Joins all elements of an array into a string

    keys()	Returns a Array Iteration Object, containing the keys of the original array

    lastIndexOf()	Search the array for an element, starting at the end, and returns its position

    map()	Creates a new array with the result of calling a function for each array element

    pop()	Removes the last element of an array, and returns that element

    push()	Adds new elements to the end of an array, and returns the new length

    reduce()	Reduce the values of an array to a single value (going left-to-right)

    reduceRight()	Reduce the values of an array to a single value (going right-to-left)

    reverse()	Reverses the order of the elements in an array

    shift()	Removes the first element of an array, and returns that element

    slice()	Selects a part of an array, and returns the new array

    some()	Checks if any of the elements in an array pass a test

    sort()	Sorts the elements of an array

    splice()	Adds/Removes elements from an array

    toString()	Converts an array to a string, and returns the result

    unshift()	Adds new elements to the beginning of an array, and returns the new length

    valueOf()	Returns the primitive value of an array

    source: https://www.w3schools.com/jsref/jsref_obj_array.asp

3. Explain the difference between console.log() and return.

  Your answer:

    console.log() -- Prints to the console the value of the passed in argument.
                     .log() is a method of the console.
                     Often used to see if a function is "returning" the correct value.

    return        -- The value a function provides when ran.
                     Typically every function will have a return.
                     Code after the return typically will not be run.

                     Really, they are two very different things.

  Researched answer:

    So, console.log is a function that logs the arguments you pass to the web console. return is a statement which specifies the value returned from a function.

    No, they do not do the same thing.    

    source: https://www.reddit.com/r/learnjavascript/comments/1wkl8h/consolelog_vs_return/ (top answer)

4. In regards to functions, what is an argument? What is the difference between an argument and a variable?

  Your answer:

    argument -- An argument is a piece of data needed for a function to run.
                An argument is what is passed into a function between the ().
                A function can be declared to take in any number of arguments.
                The below function takes two arguments: num1 & num2.
                          const multiply = (num1, num2) => {
                                return num1 * num2
                          }

    variable -- A variable is reference to a piece of data that can be declared either inside or outside of a
                function. A variable can be passed in as an argument.

  Researched answer:

    Parameters are variables listed as a part of the function definition. Arguments are values passed to the function when it is invoked.

    source: https://codeburst.io › parameters-arguments-in-javascript-eb1d8bd0ef04

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer:

    Pair programming is a technique designed to optimize code quality by having two individuals work together at one workstation. Generally, partners are divided into two responsibilities, the "driver" & the "navigator", and switch roles in some predefined way. The driver is the individual doing the physical input of typing the code. The navigator is responsible for guiding the driver through the logical operation & goals of the code. The navigator is also is entrusted to be a second sense of eyes to spot any errors or sloppiness in the driver's code. Pair programming is also helpful in ensuring that both parties stay engaged in production and not distracted.

  Researched answer:

    Pair programming is an agile software development technique in which two programmers work together at one workstation. One, the driver, writes code while the other, the observer or navigator, reviews each line of code as it is typed in. The two programmers switch roles frequently.

    source: https://en.wikipedia.org/wiki/Pair_programming

6. Give a brief description of JavaScript as if you were explaining it to someone who doesn't know anything about programming.

  Your answer:

    JavaScript is one of the most popular modern programming languages. Just about every modern website uses JavaScript (in combination with HTML & CSS) to function, including FaceBook, Google, & Amazon. It is a highly abstracted programming language essentially meaning it is a set of logical instructions written in englishish that then gets translated down to binary (0s and 1s) that your computer can understand. Because JavaScript is so popular, you can find many pre-built functionalities for a wide variety of tasks built by other programmers that you can slot into your own program. This is one major advantage of using JavaScript vs using a less popular language.


7. What is one thing we did in class this week you found helpful?  

  Your answer:

    I really enjoy the stretch challenges that force me to integrate the concept of the lesson with previous concepts.
