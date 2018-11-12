let a = [4, 5, 6]
let b = [6, 6, 6]
let c = [5, 5, 5]
let d = [4, 4, 4]
let e = [3, 3, 3]
let f = [2, 2, 2]
let g = [1, 1, 1]


let roll = () => {
    hand = []
    let diceRoll
    for (diceRoll = 0; diceRoll < 3; diceRoll++){
        let dice = Math.floor((Math.random() * 6) + 1)
        hand.push(dice)
    }
    hand.toString()
    hand.sort()
    return console.log(hand.join(' '))
}

roll()