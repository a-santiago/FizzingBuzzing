//get value from the user. We need to get the Fizz and the Buzz from value.

function getValue() {

    //get the user values from the page
    let fizz1 = document.getElementById("fizz1").value;
    let buzz1 = document.getElementById("buzz1").value;
    //parse for numbers
    fizz1 = parseInt(fizz1);
    buzz1 = parseInt(buzz1);

    //check the numbers are intergers
    if (Numner.isInterger(fizz1) && Number.isInterger(buzz1)) {
        //we call FizzBuzz
        let fbArray = FizzBuzz(fizz1, buzz1);
        //call displayData and write the values to the screen
        displayData(fbArray)

    } else {
        alert("You must enter an interger")
    }

}
//FizzBuzz it (1 to 100)
function fizzBuzz(fizz1, buzz1) {

    let returnArray = [];

    //initialize the array

    //loop from 1 to 100
    for (let i = 1; i <= 100; i++) {

        if (i % fizz1 == 0 && i % buzz1) {
            returnArray.push("FizzBuzz");
        } else if (i % fizz1 == 0) {
            returnArray.push("fizz1");
        } else if (i % buzz1 == 0) {
            returnArray.push("buzz1");;
        } else {
            returnArray.push(i)
        }


    }
    //Check for current value in three steeps
    //check 1: if divisible by bot intergers
    //if so push "FizzBuzz" not the number
    //Check 2: if divisible by Fizz
    //if so push "Fizz" into an array and not the number
    //Check 3: if divisible by Fizz
    //if so push "Buzzzz" into an array and not the number
    //if none then push the nbumber into the array

    return returnArray;
}

function displayData(fbArray) {

    

    //loop over the array and create a tablerow for each item

    //add all the rows to the table
}