export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}


export function ageCounter(element) {
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();
const age =(year-1997)-((month.toString()+day.toString().padStart(2, '0'))<1215?1:0);
element.innerHTML='age:'+age;
}
