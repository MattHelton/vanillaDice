const ceelo = {
    fourFiveSixCheck: function (hand) {
        let fourFiveSix = [4, 5, 6,]
        let oneTwoThreww = [1, 2, 3]
        if( fourFiveSix === hand) {
            console.log('AUTOMATIC WIN!!')
        } else if(oneTwoThree === hand) {
            console.log('You lose!')
        } else {
            console.log('Roll again!')
        }
    },
    roll: function () {
        hand = []
        
        for (let diceRoll = 0; diceRoll < 3; diceRoll++){
            let dice = Math.floor((Math.random() * 6) + 1)
            hand.push(dice)
        }
        return console.log(hand.sort())
        console.log(this.fourFiveSixCheck(hand))
    } 
}


ceelo.roll()