let joke = document.querySelector('#joke')
let jokeBtn = document.querySelector('#jokeBtn')

// const generateJoke = () => {
// const setHeader= {
//     headers:{
//          Accept : "Application/json"
//     }
// }

// fetch('https://icanhazdadjoke.com', setHeader)
//     .then((res) => res.json())

//     .then((data) => joke.innerHTML = data.joke)
//     .catch((error) => console.log(error));
// }


// using async-await 


const generateJoke = async () => {

    try{
        const setHeader= {
            headers:{
                 Accept : "Application/json"
            }
        }
        
        const res = await fetch('https://icanhazdadjoke.com', setHeader)
        const data = await res.json();
        joke.innerHTML = data.joke;
        
    }catch(err){
        console.log(`the error is ${err}`)   
    }
   
    }

jokeBtn.addEventListener('click' , generateJoke);
generateJoke();




