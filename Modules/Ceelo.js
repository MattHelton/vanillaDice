import {
  roll,
  assignElementName,
  assignElementId,
  addDiceTextToDiv,
  insertElementToDom,
  pushToArray,
  removeElement,
  checkForElement,
  toggleHiddenClass,
  removeHiddenClass,
  nodeListHandler
} from './Game.js'

export function playCeelo () {
  let hand = []
  let rolledDice = document.querySelectorAll('.ceeloDice')
  let scoreDiv = document.getElementById('ceeloScore')
  let ceeloReset = document.getElementById('ceeloReset')
  removeHiddenClass(ceeloReset)
  checkForElement(scoreDiv, removeElement)
  nodeListHandler(rolledDice, removeElement)

  function ceeloRoll () {
    for (let i = 0; hand.length < 3; i++) {
      pushToArray(hand, roll())
    }
    for (let i = 0; i < hand.length; i++) {
      renderRolls(hand[i])
    }
    checkRoll(hand)
  }

  function renderRolls (...dice) {
    let div = document.createElement('div')
    let result = document.createTextNode(dice)
    let currentDiv = document.getElementById('ceeloResults')

    assignElementName(div, 'ceeloDice')
    addDiceTextToDiv(div, result)
    insertElementToDom(div, currentDiv)
  }

  function renderScore (...dice) {
    let div = document.createElement('div')
    let score = document.createTextNode(dice)
    let currentDiv = document.getElementById('ceeloScore')

    assignElementId(div, 'ceeloScore')
    assignElementName(div, 'ceelo')
    addDiceTextToDiv(div, score)
    insertElementToDom(div, currentDiv)
    
  }
  ceeloRoll()

  function checkRoll (array) {
    let rollForCeelo = document.getElementById('ceelo')
    toggleHiddenClass(rollForCeelo)
    if (array[0] === array[1] && array[1] === array[2]) {
      renderScore(`Your score is triple ${array[0]}`)
    } else if (array[0] === array[1] && array[1] !== array[2]) {
      renderScore(`Your score is ${array[2]}`)
    } else if (array[0] === array[2] && array[1] !== array[0]) {
      renderScore(`Your score is ${array[1]}`)
    } else if (array[1] === array[2] && array[0] !== array[1]) {
      renderScore(`Your score is ${hand[0]}`)
    } else if (array[0] + array[1] + array[2] === 6 && array[0] * array[1] !== 4) {
      renderScore('1 2 3! You Lose!')
    } else if (array[0] + array[1] + array[2] === 15 && array[0] * array[1] !== 25) {
      renderScore('4 5 6! You Win!')
    } else {
    // Show reroll button
      renderScore('Roll Again')
      toggleHiddenClass(rollForCeelo)
    }
  }
}
