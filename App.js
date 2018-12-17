import { playCeelo } from './Modules/Ceelo.js'
import { playThrees } from '/Modules/Threes.js'
import { toggleHiddenClass, removeElement, nodeListHandler, addHiddenClass, removeHiddenClass } from './Modules/Game.js'

let ceeloButton = document.getElementById('ceeloButton')
let rollCeelo = document.getElementById('ceelo')
let threesButton = document.getElementById('threesButton')
let rollThrees = document.getElementById('threes')
let threesReset = document.getElementById('threesReset')
let ceeloReset = document.getElementById('ceeloReset')

ceeloButton.addEventListener('click', function () {
  toggleHiddenClass(ceeloButton)
  toggleHiddenClass(threesButton)
  toggleHiddenClass(rollCeelo)
})

threesButton.addEventListener('click', function () {
  toggleHiddenClass(threesButton)
  toggleHiddenClass(ceeloButton)
  toggleHiddenClass(rollThrees)
})

rollCeelo.addEventListener('click', function () {
  playCeelo()
})

rollThrees.addEventListener('click', function () {
  playThrees()
})

ceeloReset.addEventListener('click', function () {
  // window.location.reload()
  // Delete unwanted elements (potentialDice, hold, score )
  // Hide rolled, instructions
  let ceeloElements = document.querySelectorAll('.ceelo')
  let ceeloDice = document.querySelectorAll('.ceeloDice')
  nodeListHandler(ceeloElements, removeElement)
  removeHiddenClass(rollCeelo)
  addHiddenClass(ceeloReset)
  nodeListHandler(ceeloDice, removeElement)
})

threesReset.addEventListener('click', function () {
  let pd = document.querySelectorAll('.potentialDice')
  let rolled = document.getElementById('rolled')
  let instructions = document.getElementById('instructions')
  let threesDice = document.querySelectorAll('.threesDice')
  let threesScore = document.querySelectorAll('.threesScore')
  let scoreButton = document.querySelector('.scoreButton')
  let threesRoll = document.getElementById('threes')
  nodeListHandler(pd, removeElement)
  addHiddenClass(rolled)
  addHiddenClass(instructions)
  nodeListHandler(threesDice, removeElement)
  nodeListHandler(threesScore, removeElement)
  removeHiddenClass(rollThrees)
  addHiddenClass(scoreButton)
  addHiddenClass(threesReset)
  removeeHiddenClass(threesRoll)
})