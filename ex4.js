// Print all value until what is passed in param, 
// first paired
// then impaired
console.log(process.argv)

for (let i = 0; i<= process.argv[2]; i++) {
    if(i%2 === 0) {
        console.log(i);
    }
}

for (let i = 0; i<= process.argv[2]; i++) {
    if(i%2) {
        console.log(i);
    }
}