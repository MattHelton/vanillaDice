// Import
import { roll, assignElementName, addDiceTextToDiv, insertElementToDom, pushToArray, htmlToInteger, removeElement, toggleHiddenClass } from './Game.js'

export function playThrees () {
  let hold = []
  let hand = []
  
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
