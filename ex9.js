/**  calculatrice
*/
console.log(process.argv)

function calc(num1, num2, op) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            if (num2 === 0) return "infini";
            return num1 / num2;
        case '*':
            return num1 * num2;

    }
}

const num1 = process.argv[2];
const num2 = process.argv[4];
const op = process.argv[3]

const res = calc(Number(num1), Number(num2), op);
console.log('Le résultat est ' + res);