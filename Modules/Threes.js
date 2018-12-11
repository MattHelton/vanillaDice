// Import
import { roll, assignElementName, assignElementId, addDiceTextToDiv, insertElementToDom, pushToArray, htmlToInteger, removeElement, toggleHiddenClass } from './Game.js'

export function playThrees () {
  let hold = []
  let hand = []
  let scoreButton = document.querySelector('.scoreButton')

  // Change this to be usable by both games?
  // Pull out event listener to be added to divs somehow only within this game.
  function renderRolls (...dice) {
    let div = document.createElement('div')
    let result = document.createTextNode(dice)
    let currentDiv = document.getElementById('threesResults')

    assignElementName(div, 'potentialDice')
    addDiceTextToDiv(div, result)
    insertElementToDom(div, currentDiv)
    div.addEventListener('click', function listener (e) {
      let d = htmlToInteger(e)
      insertElementToDom(div, currentDiv)
      pushToArray(hold, d)
      removeElement(div)
      holdResults(d)
      toggleHiddenClass(threesReroll)
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
    let scoreButton = document.querySelector('.scoreButton')

    for (let i = 0; hand.length < 5; i++) {
      pushToArray(hand, roll())
    }

    for (let i = 0; i < hand.length; i++) {
      renderRolls(hand[i])
    }

    removeElement(rollForThrees)
    toggleHiddenClass(instructions)
    toggleHiddenClass(rolled)
    toggleHiddenClass(scoreButton)
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

  // Refactor using imported functions. Any new functions, add to Game module
  function printScore () {
    toggleHiddenClass(scoreButton)
    if (hold.length === 5) {
      let div = document.createElement('div')
      let scoreArray = hold.filter(num => num !== 3)
      let sum = scoreArray.reduce((a, b) => a + b, 0)
      let currentDiv = document.getElementById('score')
      let scoreText = document.createTextNode(`Your score is ${sum}`)
      addDiceTextToDiv(div, scoreText)
      assignElementId(div, 'score')
      insertElementToDom(div, currentDiv)
    } else {
      let div = document.createElement('div')
      let holdArray = hold.filter(num => num !== 3)
      let handArray = hand.filter(num => num !== 3)
      let holdSum = holdArray.reduce((a, b) => a + b, 0)
      let handSum = handArray.reduce((a, b) => a + b, 0)
      let sum = holdSum + handSum
      let score = document.createTextNode(`Your score is ${sum}`)
      let currentDiv = document.getElementById('score')
      addDiceTextToDiv(div, score)
      assignElementId(div, 'score')
      insertElementToDom(div, currentDiv)
    }
  }

  scoreButton.addEventListener('click', printScore)
}
