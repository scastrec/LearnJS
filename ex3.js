console.log(process.argv)

// Print all value until what is passed in param, but only paired values
for (let i = 0; i<= process.argv[2]; i++) {
    if(i%2 === 0) {
        console.log(i);
    }
}