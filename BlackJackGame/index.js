let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


function startGame(){
    renderGame();
}

function renderGame(){
    console.log("clicked")
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    
    console.log(message)

    document.getElementById("message-el").innerText = message
    document.getElementById("cards-el").innerText = firstCard + " " + secondCard
    document.getElementById("sum-el").innerText = " sum :" + sum

}

function newCard(){
    console.log("Drawing a new card from the deck!")
    let card  = 7;
    sum = sum + card;
    renderGame();
}
