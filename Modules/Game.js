// IMPORT?

// ****Rolls single dice to obtain random 1-6 value
export function roll () {
  return Math.floor((Math.random() * 6) + 1)
}

// ****Takes an element and a class name and applies the given class name to the given element
export function assignElementName (el, name) {
  el.className = name
}

// ****Takes an element and dice value as arguments and adds the text of the dice value to the given element
export function addDiceTextToDiv (el, diceValue) {
  return el.appendChild(diceValue)
}

// ****Takes element and current element as arguments and then inserts them into the dom
export function insertElementToDom (el, currentEl) {
  return document.body.insertBefore(el, currentEl)
}

// ****Takes in array and function (htmlToInteger) as arguments. Pushes return from function into given array
export function pushToArray (array, func) {
  array.push(func)
}

// ****Turns HTML text to an integer
export function htmlToInteger (e) {
  return parseInt(e.target.innerHTML, 10)
}

// ****Removes element from dom
export function removeElement (el) {
  el.parentNode.removeChild(el)
}

// ****Applies class to element
export function toggleHiddenClass (el) {
  el.classList.toggle('hidden')
}

// Applies ID to element
export function assignElementId (el, name) {
  el.id = name
}
