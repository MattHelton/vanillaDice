function playGame() {
   function roll() {
        return Math.floor((Math.random() * 6)+ 1)
    } 

    let d1 = roll()
    let d2 = roll()
    let d3 = roll()

    console.log(d1, d2, d3)
}


playGame()
