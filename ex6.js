// Print all value until what is passed in param, 
// first paired
// then impaired
// using one function
console.log(process.argv)

function print(num, isPaired) {
    for (let i = 0; i<= num; i++) {
        if(i%2 === 0 && isPaired) {
            console.log(i);
        }
        else if(i%2 !== 0 && !isPaired) {
            console.log(i);
        }
    }
}

print(process.argv[2], true)
print(process.argv[2], false)
