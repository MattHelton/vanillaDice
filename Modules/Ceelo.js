// Print each dice as individual inline div

// Start from initial roll and build to logic and multiple players
import {
  roll,
  assignElementName,
  addDiceTextToDiv,
  insertElementToDom,
  pushToArray,
  htmlToInteger,
  removeElement,
  toggleHiddenClass
} from './Game.js'

export function playCeelo () {
  let hand = []

  function firstRoll () {
    let rollForCeelo = document.getElementById('ceelo')
    for (let i = 0; hand.length < 3; i++) {
      pushToArray(hand, roll())
    }
    for (let i = 0; i < hand.length; i++) {
      renderRolls(hand[i])
    }
  }

  function renderRolls (...dice) {
    let div = document.createElement('div')
    let result = document.createTextNode(dice)
    let currentDiv = document.getElementById('ceeloResults')

    assignElementName(div, 'ceeloRoll')
    addDiceTextToDiv(div, result)
    insertElementToDom(div, currentDiv)
  }
  firstRoll()
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
