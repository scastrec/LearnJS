let i=0;
let it;
function chrono() {
  i++;
  if (i < 2) {
    console.log(`${i} seconde`)
  } else {
    console.log(`${i} secondes`)
    if(i == 60) clearInterval(it);
  }
}
it = setInterval(chrono, 1000) 