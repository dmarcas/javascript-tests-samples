
function fizzBuzzProgram() {
    for (let i=0; i<=100; i++) {
        const result = fizzBuzz(i);
        console.log(result);
    }
}

function fizzBuzz(number) {

    if (number <1 || number>100) {
        return "Number not Allowed";
    }
    
    if (number % 3 === 0 && number % 5 ===0) {
        return 'FizzBuzz';
    }

    if (number % 3 === 0) {
        return 'Fizz';
    }

    if (number % 5 === 0) {
        return 'Buzz';
    }

    return number;
    
}

module.exports.fizzBuzzProgram = fizzBuzzProgram;
module.exports.fizzBuzzMethod = fizzBuzz;