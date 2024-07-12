// Write a JavaScript program that counts the number of vowels in a given text.

// Specifications:
// The program must prompt the user to enter a text from console.
// The program must count the number of vowels in the text.
// The program must print on console the number of vowels in the text.
// The program must count both uppercase and lowercase vowels in the text.
// Execution Example:
// If the input is:

// Hello World
// The expected output is:

// 3
// If the input is:

// Lorem Ipsum
// The expected output is:

// 4
// Additional Requirements
// Do not use third-party libraries, use only what is naturally provided by the language.
// Use flow control structures and variables to solve the problem.
// You can use functions or methods if you deem it necessary.
// ⚠️ IMPORTANT ⚠️
// Your code will be validated according to the different outputs that it produces on the console, 
// for a correct evaluation print only what the exercise explicitly ask you.

// The platform will take care of sending the inputs; your task is only to read them in the code and print them. 
// If you want to test your code before submitting it, you can use the ""Debug Code"" button, 
// and the platform will test your code by sending test data and indicating if there are compilation errors.

// We recommend not altering this code for the proper functioning of your solution.

function main(input) {
    // console.log(input); // This is the value you should use to obtain the output
    let output = 0;
    const dictionary = ['a', 'e', 'i', 'o', 'u'];
    input.toLowerCase().split('').forEach(letter => {
        if (dictionary.includes(letter)) output++;
    })
    // console.log(output); // Something like this is expected for your response
    return output;
}

main("Lorem Ipsum");