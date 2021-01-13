let i=0;
let it;
function chrono() {
  i++;
  console.log(`${i} secondes`)
  if(i == 60) clearInterval(it);
}
it = setInterval(chrono, 1000) 