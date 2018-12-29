import { roll, assignElementName, assignElementId, addDiceTextToDiv, insertElementToDom, pushToArray, htmlToInteger, removeElement, removeHiddenClass, toggleHiddenClass, nodeListHandler } from './Game.js'

export function playThrees () {
  let hold = []
  let hand = []
  let sum = []
  let scoreButton = document.querySelector('.scoreButton')
  let threesReset = document.getElementById('threesReset')
  
  removeHiddenClass(threesReset)

  function renderRolls (...dice) {
    let div = document.createElement('div')
    let result = document.createTextNode(dice)
    let currentDiv = document.getElementById('threesResults')

    // assignElementName(div, 'threes')
    assignElementName(div, 'potentialDice')
    addDiceTextToDiv(div, result)
    insertElementToDom(div, currentDiv)
    div.addEventListener('click', function listener (e) {
      let d = htmlToInteger(e)
      insertElementToDom(div, currentDiv)
      pushToArray(hold, d)
      removeElement(div)
      holdResults(d)
      removeHiddenClass(threesReroll)
    })
  }

  function holdResults (...dice) {
    let div = document.createElement('div')
    let result = document.createTextNode(dice)
    let currentDiv = document.getElementById('dice')
    assignElementName(div, 'hold')
    assignElementName(div, 'threesDice')
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

    toggleHiddenClass(rollForThrees)
    toggleHiddenClass(instructions)
    toggleHiddenClass(rolled)
    toggleHiddenClass(scoreButton)
  }
  firstRoll()

  function reroll () {
    let hand = []
    let pd = document.querySelectorAll('.potentialDice')
    
    nodeListHandler(pd, removeElement)
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
      let holdSum = 0
      let handSum = 0
      let sum = 0
    function getScore () {
    let div = document.createElement('div')
    let holdArray = hold.filter(num => num !== 3)
    let handArray = hand.filter(num => num !== 3)
    let holdSum = holdArray.reduce((a, b) => a + b, 0)
    let handSum = handArray.reduce((a, b) => a + b, 0)
    let sum2 = holdSum + handSum
    let score = document.createTextNode(`Your score is ${sum2}`)
    let currentDiv = document.getElementById('score')
    toggleHiddenClass(scoreButton)
    if (hold.length === 5) {
      let div = document.createElement('div')
      let scoreArray = hold.filter(num => num !== 3)
      let sum = scoreArray.reduce((a, b) => a + b, 0)
      let currentDiv = document.getElementById('score')
      let scoreText = document.createTextNode(`Your score is ${sum}`)
      addDiceTextToDiv(div, scoreText)
      assignElementId(div, 'score')
      assignElementName(div, 'threesScore')
      insertElementToDom(div, currentDiv)
    } else {
      addDiceTextToDiv(div, score)
      assignElementId(div, 'score')
      assignElementName(div, 'threesScore')
      insertElementToDom(div, currentDiv)
    }
  }
  getScore ()
  function clearScore (one, two, three) {
    let one = 0
      let two = 0
      let three = 0
  }
  clearScore(holdSum, handSum, sum)
  }

  scoreButton.addEventListener('click', printScore)
  // threesReset.addEventListener('click', function () {
  //   let pd = document.querySelectorAll('.potentialDice')
  //   let rolled = document.getElementById('rolled')
  //   let instructions = document.getElementById('instructions')
  //   let threesDice = document.querySelectorAll('.threesDice')
  //   let threesScore = document.querySelectorAll('.threesScore')
  //   let scoreButton = document.querySelector('.scoreButton')
  //   let threesRoll = document.getElementById('threes')
  //   let rr = document.querySelector('.rr')
  //   nodeListHandler(pd, removeElement)
  //   addHiddenClass(rolled)
  //   addHiddenClass(instructions)
  //   nodeListHandler(threesDice, removeElement)
  //   nodeListHandler(threesScore, removeElement)
  //   removeHiddenClass(rollThrees)
  //   addHiddenClass(scoreButton)
  //   addHiddenClass(threesReset)
  //   removeHiddenClass(threesRoll)
  //   addHiddenClass(rr)
  // })
}
