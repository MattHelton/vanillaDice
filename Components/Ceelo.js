// Import

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

// Export