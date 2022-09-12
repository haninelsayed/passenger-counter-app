
// grabbing the HTML element count-el
// camelCase
let countEl = document.getElementById("count-el") // pass in arguments
let saveEl = document.getElementById("save-el")
// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
let count = 0
function increment() {
  count += 1
  countEl.textContent = count // change the count-el in the HTML to reflect the new count
}
// create a function, save(), which logs out the count when it's called
function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  // resetting the value everytime we hit save (counting a new group of passengers)
  countEl.textContent = 0
  count = 0
}




