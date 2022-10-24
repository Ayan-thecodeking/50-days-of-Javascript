let hands = ["rock", "paper", "scissor"]

function random(){
    let randomIndex = Math.floor( Math.random() * 3)
    document.getElementById("result-el").innerText =hands[randomIndex]
}
