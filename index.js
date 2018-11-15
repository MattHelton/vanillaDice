function playGame() {
   function roll() {
        return Math.floor((Math.random() * 6)+ 1)
    } 
    // let p1 = {
    //     name: 'Player One'
    //     getScore: getScore
    // }

    function getScore() {
        let d1 = roll()
        let d2 = roll()
        let d3 = roll()
        let score 
        console.log(d1, d2, d3)
        if(d1 === d2 && d2 === d3) {
            console.log(`Your score is triple ${d1}!`)
            score = d1
        }else if(d1 === d2 && d2 !== d3) {
            console.log(`Your score is ${d3}`)
            score = d3
        }else if(d1 === d3 && d2 !== d1) {
            console.log(`Your score is ${d2}`)
            score = d2
        }else if(d2 === d3 && d1 !== d2) {
            console.log(`Your score is ${d1}`)
            score = d1
        }else if(d1 + d2 + d3 === 6 && d1 * d2 !== 4 ) {
            console.log('One Two Three, you lose!')
            score = 0
    
        }else if(d1 + d2 + d3 === 15 && d1 * d2 !== 25) {
            console.log('FOUR FIVE SIX! YOU WIN!')
        }else{
            console.log('Roll again!')
            getScore()
        }
    }
    getScore()
    
}

playGame()
