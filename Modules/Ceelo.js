// Print each dice as individual inline div

// Start from initial roll and build to logic and multiple players
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
  let rolledDice = document.querySelectorAll('.ceeloRoll')
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

    assignElementName(div, 'ceeloRoll')
    assignElementName(div, 'ceelo')
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

  
  // Function to handle node list. could be used to delete previous divs on reroll?

  // let p1 = {
  //   name: 'Player One',
  //   score: 0,
  //   getScore: getScore
  // }
  // let p2 = {
  //   name: 'Player Two',
  //   score: 0,
  //   getScore: getScore
  // }

  // function getScore () {
  //   let hand = []
  //   for (let i = 0; hand.length < 3; i++) {
  //     pushToArray(hand, roll())
  //   }

  //   function results (...dice) {
  //     // Print individual dice as an inline div
  //     //
  //     let div = document.createElement('div')
  //     let result = document.createTextNode(dice)
  //     let currentDiv = document.getElementById('ceeloResults')
  //     addDiceTextToDiv(div, result)
  //     assignElementName(div, 'roll')
  //     insertElementToDom(div, currentDiv)
  //   }
  //   let result = hand.join(' ')
  //   results(result)
  //   // for (let i = 0; i < hand.length; i++) {
  //   //   results(hand[i])
  //   // }
  //   console.log(`${hand[0]} ${hand[1]} ${hand[2]}`)
  //   if (hand[0] === hand[1] && hand[1] === hand[2]) {
  //     console.log(`${this.name} score is ${hand[0]}${hand[0]}${hand[0]}!`)
  //     return hand[0] * 111
  //   } else if (hand[0] === hand[1] && hand[1] !== hand[2]) {
  //     console.log(`${this.name} score is ${hand[2]}`)
  //     return hand[2]
  //   } else if (hand[0] === hand[2] && hand[1] !== hand[0]) {
  //     console.log(`${this.name} score is ${hand[1]}`)
  //     return hand[1]
  //   } else if (hand[1] === hand[2] && hand[0] !== hand[1]) {
  //     console.log(`${this.name} score is ${hand[0]}`)
  //     return hand[0]
  //   } else if (hand[0] + hand[1] + hand[2] === 6 && hand[0] * hand[1] !== 4) {
  //     console.log('One Two Three, you lose!')
  //     return 0
  //   } else if (hand[0] + hand[1] + hand[2] === 15 && hand[0] * hand[1] !== 25) {
  //     console.log('FOUR FIVE SIX! YOU WIN!')
  //     return 1000
  //   } else {
  //     console.log('Roll again!')
  //     this.getScore()
  //   }
  // }

  // function playRound () {
  //   let playerOneScore = p1.getScore()
  //   let playerTwoScore = p2.getScore()

  //   if (playerOneScore < playerTwoScore) {
  //     console.log(`Player Two wins!`)
  //   } else if (playerOneScore > playerTwoScore) {
  //     console.log(`Player One wins!`)
  //   } else if (playerOneScore === playerTwoScore) {
  //     console.log(`It's a tie!`)
  //     playRound()
  //   } else {
  //     console.log(`This shit broke as fuck.`)
  //   }
  // }
  // playRound()
}
