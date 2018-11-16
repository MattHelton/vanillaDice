function playGame() {
   function roll() {
        return Math.floor((Math.random() * 6)+ 1)
    } 
    let p1 = {
        name: 'Player One',
        getScore: getScore
    }
    let p2 = {
        name: 'Player Two',
        getScore: getScore
    }
    function playRound() {
        let playerOneScore = p1.getScore()
        let playerTwoScore = p2.getScore()
        if(playerOneScore == playerTwoScore){
            console.log(`It's a tie!`)
        }else if(playerOneScore > playerTwoScore) {
            console.log(`Player One wins!`)
        }else{
            console.log(`Player Two wins!`)
        }
        }
    
    function getScore() {
        let d1 = roll()
        let d2 = roll()
        let d3 = roll() 
        console.log(d1, d2, d3)
        if(d1 === d2 && d2 === d3) {
            console.log(`${this.name} score is ${d1}${d1}${d1}!`)
            return d1 * 111
        }else if(d1 === d2 && d2 !== d3) {
            console.log(`${this.name} score is ${d3}`)
            return d3
        }else if(d1 === d3 && d2 !== d1) {
            console.log(`${this.name} score is ${d2}`)
            return d2
        }else if(d2 === d3 && d1 !== d2) {
            console.log(`${this.name} score is ${d1}`)
            return d1
        }else if(d1 + d2 + d3 === 6 && d1 * d2 !== 4) {
            console.log('One Two Three, you lose!')
            return 0
    
        }else if(d1 + d2 + d3 === 15 && d1 * d2 !== 25) {
            console.log('FOUR FIVE SIX! YOU WIN!')
            return 1000
        }else{
            console.log('Roll again!')
            getScore()
        }
    }  
    playRound()
}
playGame()