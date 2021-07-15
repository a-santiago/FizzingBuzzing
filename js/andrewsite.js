// //FizzBuzz process

// //Get the input

// //Convert to integer

// //Run for loop from 1 to 100

// //Determine if Fizz, Buzz, or FizzBuzz
// //Fizz = number % input 1 = 0
// //Buzz = number % input 2 = 0
// //FizzBuzz = number % input 1 = 0 && number % input 2 = 0

// //Print the results Fizz, Buzz, FizzBuzz, or the number

// //Basic if/else - two possibilities and one always runs
// if (condition) {
//     //If condition is true run this code
// } else {
//     //If not run this code
// }


// //if/else if/else chain - multiple potential triggers
// //most stringent condition should come first
// if (condition) {
//     //runs if condition is true
// } else if (condition2) {
//     //runs if condition is false AND condition2 is true
// } else if (condition5) {

// } else {
//     //runs only when condition AND condition2 are false
// }


// //Multiple if statements - each runs independent of the others
// if (condition3) {

// }
// if (condition4) {

// }


// //Switch case - simplified if/else
// //Switch cases use a variable with discrete values and a default
// let switchVariable = 'something';
// switch (switchVariable) {
//     case 'something': {
//         alert('something was the word');
//         break;
//     }
//     case 'nothing': {
//         alert('the word was nothing');
//         break;
//     }
//     default: {
//         alert('you hit the default');
//         break;
//     };
// }




function displayData(fizzBuzzData) {
    //access the table body element on the DOM
    let tableBody = document.getElementById("output");

    //access the template element on the DOM
    let templateRow = document.getElementById("fbTemplate");

    //clear out any information currently in the table body (let's the code run multiple times without stacking)
    tableBody.innerHTML = '';

    //go through the supplied FB information and fill out the table rows with it
    for (let index = 0; index < fizzBuzzData.length; index += 5) {
        //grab the inside of the template element, but not the template element itself
        const tableRow = document.importNode(templateRow.content, true);

        //tableRow represents the <tr> and all <td> from inside the <template>
        //we only want to interact with the <td> elements
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fizzBuzzData[index]);
        rowCols[0].textContent = fizzBuzzData[index];

        rowCols[1].classList.add(fizzBuzzData[index + 1]);
        rowCols[1].textContent = fizzBuzzData[index + 1];

        rowCols[2].classList.add(fizzBuzzData[index + 2]);
        rowCols[2].textContent = fizzBuzzData[index + 2];

        rowCols[3].classList.add(fizzBuzzData[index + 3]);
        rowCols[3].textContent = fizzBuzzData[index + 3];

        rowCols[4].classList.add(fizzBuzzData[index + 4]);
        rowCols[4].textContent = fizzBuzzData[index + 4];

        // tableRow.classList.add('Jason needs more work');

        tableBody.appendChild(tableRow);
    }

}


//Basic FizzBuzz uses 3, 5, and loops from 1 to 100
//Better FizzBuzz lets the user set Fizz and Buzz numbers and loops from 1 to 100
//Extra Credit allow user to set all values - this is somewhat difficult if the loop is not divisible by 5