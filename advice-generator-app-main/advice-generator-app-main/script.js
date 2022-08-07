const adviceText = document.querySelector(".quote"),
AdviceId = document.querySelector(".id"),
quoteBtn =document.querySelector("button");

function randomAdvice(){
    fetch("https://api.adviceslip.com/advice/search/{query}").then(res => res.json()).then(result =>{
console.log(result);
adviceText.innerText = result.advice;
adviceText.innerText = result.id;

    });
}

quoteBtn.addEventListener("click",randomAdvice);
