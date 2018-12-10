// IMPORT?

// ****Rolls single dice to obtain random 1-6 value
function roll () {
  return Math.floor((Math.random() * 6) + 1)
}

// ****Takes an element and a class name and applies the given class name to the given element
function assignElementName (el, name) {
  el.className = name
}

// ****Takes an element and dice value as arguments and adds the text of the dice value to the given element
function addDiceTextToDiv (el, diceValue) {
  return el.appendChild(diceValue)
}

// ****Takes element and current element as arguments and then inserts them into the dom
function insertElementToDom (el, currentEl) {
  return document.body.insertBefore(el, currentEl)
}

// ****Takes in array and function (htmlToInteger) as arguments. Pushes return from function into given array
function pushToArray (array, func) {
  array.push(func)
}

// ****Turns HTML text to an integer
function htmlToInteger (e) {
  return parseInt(e.target.innerHTML, 10)
}

// ****Removes element from dom
function removeElement (el) {
  el.parentNode.removeChild(el)
}

// ****Applies class to element
function toggleHiddenClass (el) {
  el.classList.toggle('hidden')
}

// EXPORT
