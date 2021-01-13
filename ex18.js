const nbFaces = process.argv[2];

function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(nbFaces));
  }
const res = getRandomInt();
console.log('Vous avez obtenu :' + res);