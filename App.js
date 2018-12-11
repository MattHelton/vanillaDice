import { playCeelo } from './Modules/Ceelo.js'
import { playThrees } from '/Modules/Threes.js'
import { removeElement, toggleHiddenClass } from './Modules/Game.js'

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
