function playGame() {
   function roll() {
        return Math.floor((Math.random() * 6)+ 1)
    } 

    let d1 = roll()
    let d2 = roll()
    let d3 = roll()

    console.log(d1, d2, d3)
    if(d1 === d2 && d2 === d3) {
        console.log(`Your score is triple ${d1}!`)
    }
    if(d1 === d2 && d2 !== d3) {
        console.log(`Your score is ${d3}`)
    } else if (d1 === d3 && d2 !== d1) {
        console.log(`Your score is ${d2}`)
    } else if (d2 === d3 && d1 !== d2) {
        console.log(`Your score is ${d1}`)
    } else {
        console.log('Roll again!')
    }
}


playGame()
