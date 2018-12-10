// Import Game, Ceelo, and Threes components

function playCeelo () {
  function roll () {
    return Math.floor((Math.random() * 6) + 1)
  }
  // function to render rolls to DOM
  function results (...dice) {
    let div = document.createElement('div')
    let result = document.createTextNode(dice)
    // div.addClassList('dice')
    div.appendChild(result)

    let currentDiv = document.getElementById('results')
    document.body.insertBefore(div, currentDiv)
  }
  let p1 = {
    name: 'Player One',
    score: 0,
    getScore: getScore
  }
  let p2 = {
    name: 'Player Two',
    score: 0,
    getScore: getScore
  }

  function getScore () {
    let hand = []
    let d1 = roll()
    let d2 = roll()
    let d3 = roll()
    hand.push(d1, d2, d3)

    function results (...dice) {
      let div = document.createElement('div')
      let result = document.createTextNode(dice)
      // div.addClassList('dice')
      div.className = 'dice'
      div.appendChild(result)

      let currentDiv = document.getElementById('ceeloResults')
      document.body.insertBefore(div, currentDiv)
    }
    let result = hand.join(' ')
    results(result)
    // for (let i = 0; i < hand.length; i++) {
    //   results(hand[i])
    // }
    console.log(`${d1} ${d2} ${d3}`)
    if (d1 === d2 && d2 === d3) {
      console.log(`${this.name} score is ${d1}${d1}${d1}!`)
      return d1 * 111
    } else if (d1 === d2 && d2 !== d3) {
      console.log(`${this.name} score is ${d3}`)
      return d3
    } else if (d1 === d3 && d2 !== d1) {
      console.log(`${this.name} score is ${d2}`)
      return d2
    } else if (d2 === d3 && d1 !== d2) {
      console.log(`${this.name} score is ${d1}`)
      return d1
    } else if (d1 + d2 + d3 === 6 && d1 * d2 !== 4) {
      console.log('One Two Three, you lose!')
      return 0
    } else if (d1 + d2 + d3 === 15 && d1 * d2 !== 25) {
      console.log('FOUR FIVE SIX! YOU WIN!')
      return 1000
    } else {
      console.log('Roll again!')
      this.getScore()
    }
  }

  function playRound () {
    let playerOneScore = p1.getScore()
    let playerTwoScore = p2.getScore()

    if (playerOneScore < playerTwoScore) {
      console.log(`Player Two wins!`)
    } else if (playerOneScore > playerTwoScore) {
      console.log(`Player One wins!`)
    } else if (playerOneScore === playerTwoScore) {
      console.log(`It's a tie!`)
      playRound()
    } else {
      console.log(`This shit broke as fuck.`)
    }
  }
  playRound()
}

function playThrees () {
  let hold = []
  let hand = []
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

  // Creates new div, gives it the class name "potential dice", inserts dice value (using dice argument)
  function renderRolls (...dice) {
    let div = document.createElement('div')
    let result = document.createTextNode(dice)
    let currentDiv = document.getElementById('results')
    assignElementName(div, 'potentialDice')
    addDiceTextToDiv(div, result)
    insertElementToDom(div, currentDiv)
    div.addEventListener('click', function listener (e) {
      let d = htmlToInteger(e)
      insertElementToDom(div, currentDiv)
      pushToArray(hold, d)
      removeElement(div)
      holdResults(d)
      threesReroll.classList.remove('hidden')
    })
  }

  function holdResults (...dice) {
    let div = document.createElement('div')
    let result = document.createTextNode(dice)
    let currentDiv = document.getElementById('dice')
    assignElementName(div, 'hold')
    addDiceTextToDiv(div, result)
    insertElementToDom(div, currentDiv)
  }

  function firstRoll () {
    let rollForThrees = document.getElementById('threes')
    let instructions = document.getElementById('instructions')
    let rolled = document.getElementById('rolled')

    for (let i = 0; hand.length < 5; i++) {
      pushToArray(hand, roll())
    }

    for (let i = 0; i < hand.length; i++) {
      renderRolls(hand[i])
    }

    removeElement(rollForThrees)
    toggleHiddenClass(instructions)
    toggleHiddenClass(rolled)
  }
  firstRoll()

  function reroll () {
    let hand = []
    let pd = document.querySelectorAll('.potentialDice')
    for (let i = 0; i < pd.length; i++) {
      removeElement(pd[i])
    }
    let times = 5 - hold.length
    for (let i = 0; i < times; i++) {
      pushToArray(hand, roll())
    }
    for (let i = 0; i < hand.length; i++) {
      renderRolls(hand[i])
    }
  }

  let threesReroll = document.querySelector('.rr')
  threesReroll.addEventListener('click', function () {
    reroll()
    toggleHiddenClass(threesReroll)
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

let ceeloButton = document.getElementById('ceeloButton')
let rollCeelo = document.getElementById('ceelo')

ceeloButton.addEventListener('click', function () {
  console.log(rollCeelo)
  rollCeelo.classList.toggle('hidden')
  threesButton.classList.toggle('hidden')
})

let threesButton = document.getElementById('threesButton')
let rollThrees = document.getElementById('threes')
let reset = document.getElementById('reset')
threesButton.addEventListener('click', function () {
  rollThrees.classList.toggle('hidden')
  ceeloButton.classList.toggle('hidden')
})

rollCeelo.addEventListener('click', function () {
  playCeelo()
})

rollThrees.addEventListener('click', function () {
  playThrees()
})

reset.addEventListener('click', function () {
  window.location.reload()
})
