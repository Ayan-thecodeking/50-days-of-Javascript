let count = 0;

let countHome = document.getElementById("count-1")
let countGuest = document.getElementById("count-2")

// Home function 

function one(){
    count +=1
    countHome.innerText = count
}
function two(){
    count +=2
    countHome.innerText = count
}
function three(){
    count +=3
    countHome.innerText = count
}
let count2 =0;
// Guest function 

function onex(){
    count2 +=1
    countGuest.innerText = count2
}
function twox(){
    count2 +=2
    countGuest.innerText = count2
}
function threex(){
    count2 +=3
    countGuest.innerText = count2
}
