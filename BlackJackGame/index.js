// let firstCard = getRandomCards()
// let secondCard = getRandomCards()
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let player = {
    name: "Per",
    chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function startGame() {
    isAlive = true
    let firstCard = getRandomCards()
    let secondCard = getRandomCards()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
}

function getRandomCards() {
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber === 1) {
        return 11
    } else if (10 < randomNumber) {
        return 10
    }
    else {
        return randomNumber

    }
}

function renderGame() {

    document.getElementById("cards-el").textContent = " Cards : "

    for (let i = 0; i < cards.length; i++) {
        document.getElementById("cards-el").innerText += " " + cards[i]
    }

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

    document.getElementById("sum-el").innerText = " sum :" + sum
    // document.getElementById("player-el").innerText = " per:" + sum

}

function newCard() {
    console.log("Drawing a new card from the deck!")

    if (isAlive === true && hasBlackJack === false) {

        let card = getRandomCards()
        sum = sum + card;
        cards.push(card)

        renderGame();
    }else{
        renderGame()
    }
}
