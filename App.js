import { playCeelo } from './Modules/Ceelo.js'
import { playThrees } from '/Modules/Threes.js'
import { toggleHiddenClass } from './Modules/Game.js'

let ceeloButton = document.getElementById('ceeloButton')
let rollCeelo = document.getElementById('ceelo')
let threesButton = document.getElementById('threesButton')
let rollThrees = document.getElementById('threes')
let reset = document.getElementById('reset')

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

reset.addEventListener('click', function () {
  window.location.reload()
  // Delete unwanted elements (potentialDice, hold, score )
  // Hide rolled, instructions
})
