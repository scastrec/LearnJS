// Print all value until what is passed in param, 
// first paired
// then impaired
// using two functions
console.log(process.argv)

function printPaired(num) {
    for (let i = 0; i<= num; i++) {
        if(i%2 === 0) {
            console.log(i);
        }
    }
}

function printImpaired(num) {
    for (let i = 0; i<= num; i++) {
        if(i%2) {
            console.log(i);
        }
    }
}

printPaired(process.argv[2])
printImpaired(process.argv[2])
