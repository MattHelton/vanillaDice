const ceelo = {
    roll: function () {
        hand = []
        
        for (let diceRoll = 0; diceRoll < 3; diceRoll++){
            let dice = Math.floor((Math.random() * 6) + 1)
            hand.push(dice)
        }
        return console.log(hand.sort())
        
    } 
}



const fourFiveSixCheck = (hand) => {
    let check = [4, 5, 6,]
    if( check === hand) {
        console.log('FOUR FIVE SIX! AUTOMATIC')
    }
}

roll = () => {
    hand = []
    
    for (let diceRoll = 0; diceRoll < 3; diceRoll++){
        let dice = Math.floor((Math.random() * 6) + 1)
        hand.push(dice)
    }
    fourFiveSixCheck(hand)
    hand.toString()
    hand.sort()
    return console.log(hand.join(' '))
    
}






ceelo.roll()