function playCeelo() {
   function roll() {
        return Math.floor((Math.random() * 6)+ 1)
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
    
    function getScore() {
        let d1 = roll()
        let d2 = roll()
        let d3 = roll() 
        console.log(`${d1} ${d2} ${d3}`)
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
            this.getScore()
        }
    }
    function playRound() {
        let playerOneScore = p1.getScore()
        let playerTwoScore = p2.getScore()
        
        if(playerOneScore < playerTwoScore){
            console.log(`Player Two wins!`)
        }else if(playerOneScore > playerTwoScore) {
            console.log(`Player One wins!`)
        }else if(playerOneScore === playerTwoScore) {
            console.log(`It's a tie!`)
            playRound()
        } else {
            console.log(`This shit broke as fuck.`)
        }
    }  
    playRound()
}
// playCeelo()

function playThrees() {
    function roll() {
        return Math.floor((Math.random() * 6)+ 1)
        
    } 
    function results(...dice) {
        let div = document.createElement('div')
        let result = document.createTextNode(dice)
        div.appendChild(result)
        
        let currentDiv = document.getElementById('results')
        document.body.insertBefore(div, currentDiv)
        
    }

    function addElement () { 
        // create a new div element 
        var newDiv = document.createElement("div"); 
        // and give it some content 
        var newContent = document.createTextNode("Hi there and greetings!"); 
        // add the text node to the newly created div
        newDiv.appendChild(newContent);  
      
        // add the newly created element and its content into the DOM 
        var currentDiv = document.getElementById("div1"); 
        document.body.insertBefore(newDiv, currentDiv); 
      }
    function playRound() {
        hand =[]
        d1 = roll()
        d2 = roll()
        d3 = roll()
        d4 = roll()
        d5 = roll()
        hand.push(d1, d2, d3, d4, d5)
        console.log(hand)
        console.log(d1, d2, d3, d4, d5)
        let hold = hand.filter(dice => dice == 3)
        console.log(hand)
        console.log(hold)
        let result = hand.join(' ')
       results(result)
    }
    playRound()
}
playThrees()
