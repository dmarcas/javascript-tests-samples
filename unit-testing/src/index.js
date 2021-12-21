function fizzBuzz(number) {

    if (number <1 || number>100) {
        console.log("Number not allowed");
        return number;
    }
    
    if (number % 3 === 0 && number % 5 ===0) {
        console.log(number);
        return 'FizzBuzz';
    }

    if (number % 3 === 0) {
        console.log(number);
        return 'Fizz';
    }

    if (number % 5 === 0) {
        console.log(number);
        return 'Buzz';
    }

    console.log(number);
    return number;
    
    /*if (number >=1 || number<=100) {
        console.log(number);
        return number
    }*/
}

module.exports = fizzBuzz;