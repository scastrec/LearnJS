console.log([1,2,3,4].map(a => {
    if (a%2 === 0) {
        return a*2;
    }
    return a;
}));