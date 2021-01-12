/**  
 * Changer le type d'une variable
*/
console.log(process.argv)

function displayType(str) {
    console.log(typeof str);
    console.log(typeof Number(str));
    console.log(typeof parseInt(str));
    console.log(typeof parseFloat(str));
}

displayType(process.argv[2], true)
