// Import

function playThrees () {
  let hold = []
  let hand = []
  // Rolls single dice to obtain random 1-6 value
  function roll () {
    return Math.floor((Math.random() * 6) + 1)
  }

  // Creates element from a string naming the element to be created
  function createDiceElement (elString) {
    return document.createElement(elString)
  }

  // Creates text from the value rolled
  function createElementText (diceValue) {
    return document.createTextNode(diceValue)
  }

  // Takes an element and a class name and applies the given class name to the given element
  function assignElementName (el, name) {
    el.className = name
  }

  // Takes an element and dice value as arguments and adds the text of the dice value to the given element
  function addDiceTextToDiv (el, diceValue) {
    return el.appendChild(diceValue)
  }

  // Creates event listener with a function to add to created html elements
  function addListener (el, func) {
    return el.addEventListener('click', func)
  }
  // Takes element and current element as arguments and then inserts them into the dom
  function insertElementToDom (el, currentEl) {
    return document.body.insertBefore(el, currentEl)
  }

  // Takes in array and function (htmlToInteger) as arguments. Pushes return from function into given array
  function pushToArray (array, func) {
    array.push(func)
  }

  // Turns HTML text to an integer
  function htmlToInteger (el) {
    return parseInt(el.target.innerHTML, 10)
  }

  // Removes event listener from element
  function removeListener (el, func, boolean) {
    el.removeEventListener('click', func, boolean)
  }

  // Removes element from dom
  function removeElement (el) {
    el.parentNode.removeChild(el);
  }

  // Renders rolls
  function renderRolls (...dice) {
    let div = document.createElement('div')
    let result = document.createTextNode(dice)
    let currentDiv = document.getElementById('results')
    assignElementName(div, 'potentialDice')
    addDiceTextToDiv(div, result)
    insertElementToDom(div, currentDiv)
    // htmlToInteger(div)
    // addListener(div, pushToArray)
  }
  // Creates new div, gives it the class name "potential dice", inserts dice value (using dice argument)
  // function results (...dice) {
  //   let div = document.createElement('div')
  //   let result = document.createTextNode(dice)

  //   div.className = 'potentialDice'
  //   div.appendChild(result)
  //   // Adds listener to created div. Listener creates a listener function that turns dice value in div into an integer and then moves it into the hold array,
  //   // then removes itself once clicked and creates div with each held dice and prints it to dom
  //   // then adds classlist of "hidden" to hide the elements
  //   div.addEventListener('click', function listener (e) {
  //     const d = parseInt(e.target.innerHTML, 10)
  //     let currentDiv = document.getElementById('results')
  //     document.body.insertBefore(div, currentDiv)
  //     hold.push(d)

  //     div.removeEventListener('click', listener, true)

  //     hand.splice(hand.indexOf(hand.find(num => num === d)), 1)
  //     document.querySelector('.rr').classList.remove('hidden')
  //     div.classList.add('hidden')
  //     holdResults(d)
  //     // threesReroll.classList.toggle('hidden')
  //   }, true)
  // }

  function holdResults (...dice) {
    let div = document.createElement('div')
    let result = document.createTextNode(dice)
    // div.addClassList('dice')
    div.className = 'hold'
    div.appendChild(result)

    let currentDiv = document.getElementById('dice')
    document.body.insertBefore(div, currentDiv)
  }
  function firstRoll () {
    let d1 = roll()
    let d2 = roll()
    let d3 = roll()
    let d4 = roll()
    let d5 = roll()
    hand.push(d1, d2, d3, d4, d5)

    for (let i = 0; i < hand.length; i++) {
      // results(hand[i])
      renderRolls(hand[i])
    }

    document.getElementById('threes').classList.add('hidden')
    document.getElementById('instructions').classList.toggle('hidden')
    document.getElementById('rolled').classList.toggle('hidden')
  }
  firstRoll()

  function reroll () {
    let hand = []
    let pd = document.querySelectorAll('.potentialDice')
    for (let i = 0; i < pd.length; i++) {
      pd[i].classList.add('hidden')
    }
    let times = 5 - hold.length
    console.log(times)
    for (let i = 0; i < times; i++) {
      hand.push(roll())
    }
    for (let i = 0; i < hand.length; i++) {
      results(hand[i])
    }
  }

  let threesReroll = document.querySelector('.rr')
  threesReroll.addEventListener('click', function () {
    reroll()
    threesReroll.classList.toggle('hidden')
  })
  function printScore () {
    if (hold.length === 5) {
      let div = document.createElement('div')
      let scoreArray = hold.filter(num => num !== 3)
      let sum = scoreArray.reduce((a, b) => a + b, 0)
      let currentDiv = document.getElementById('score')
      let score = document.createTextNode(`
      Your score is ${sum}`)
      div.className = 'score'
      div.appendChild(score)
      document.body.insertBefore(div, currentDiv)
    } else {
      let div = document.createElement('div')
      let holdArray = hold.filter(num => num !== 3)
      let handArray = hand.filter(num => num !== 3)
      let holdSum = holdArray.reduce((a, b) => a + b, 0)
      let handSum = handArray.reduce((a, b) => a + b, 0)
      let sum = holdSum + handSum
      let score = document.createTextNode(`
      Your score is ${sum}`)
      let currentDiv = document.getElementById('score')
      div.className = 'score'
      div.appendChild(score)
      document.body.insertBefore(div, currentDiv)
    }
  }
  let scoreButton = document.querySelector('.scoreButton')
  scoreButton.addEventListener('click', printScore)
  scoreButton.classList.remove('hidden')
}

//  Export
