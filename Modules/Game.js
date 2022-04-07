// Rolls single dice to obtain random 1-6 value
export function roll() {
  return Math.floor((Math.random() * 6) + 1)
}

// Takes an element and a class name and applies the given class name to the given element
export function assignElementName(el, name) {
  el.className = name
}

// Takes an element and dice value as arguments and adds the text of the dice value to the given element
export function addDiceTextToDiv(el, diceValue) {
  return el.appendChild(diceValue)
}

// Takes element and current element as arguments and then inserts them into the dom
export function insertElementToDom(el, currentEl) {
  return document.body.insertBefore(el, currentEl)
}

// Takes in array and function (htmlToInteger) as arguments. Pushes return from function into given array
export function pushToArray(array, func) {
  array.push(func)
}

// Turns HTML text to an integer
export function htmlToInteger(e) {
  return parseInt(e.target.innerHTML, 10)
}

// Removes element from dom
export function removeElement(el) {
  if (!el) {
  } else {
    el.parentNode.removeChild(el)
  }
}

// Applies class to element
export function toggleHiddenClass(el) {
  el.classList.toggle('hidden')
}

// Removes 'hidden' class to element
export function removeHiddenClass(el) {
  el.classList.remove('hidden')
}

// Adds 'hidden' class to element
export function addHiddenClass(el) {
  el.classList.add('hidden')
}

// Applies ID to element
export function assignElementId(el, name) {
  el.id = name
}

// Checks to see if element exists?
export function checkForElement(el, func) {
  if (!el) {
  } else {
    func(el)
  }
}

// Handles Node List by taking it in and applying the given function to it
export function nodeListHandler(list, func) {
  if (!list) {
  } else {
    for (let i = 0; i < list.length; i++) {
      func(list[i])
    }
  }
}

// Sets array to an empty array
export function resetArray(variable) {
  if (!variable) {
  } else {
    array = []
  }
}

// Sets variable to 0
export function resetVariable(variable) {
  if (!variable) {
  } else {
    variable = 0
  }
}


