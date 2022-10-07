// document.getElementById("count").innerText =6

let count =0;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
console.log("on click envoked");
count =count +1;
countEl.innerText =count

}



function save(){
console.log(count)
let final = count + " - "
saveEl.innerText += final
countEl.textContent = 0
count = 0;
}

