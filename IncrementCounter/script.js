
const counters = document.querySelectorAll('.numCounter')

counters.forEach((numCounter) => {

    numCounter.innerHTML = 0; 


    const updateCount = () => {
         
        const targetCount = +numCounter.getAttribute('data-target')

        const startingCount = +(numCounter.innerHTML)

        const incr = targetCount/100;

        if(startingCount < targetCount){
            numCounter.innerHTML = `${startingCount + incr}`; 

            setTimeout(updateCount,10)

        }
        
    }
    updateCount();
})
  
// optimized code ------------------------------------------

// const counters = document.querySelectorAll('.numCounter');
// const counterArray = Array.from(counters); // Convert NodeList to Array for better performance

// counterArray.forEach((numCounter) => {
//   let startingCount = 0;

//   const updateCount = () => {
//     const targetCount = +numCounter.getAttribute('data-target');
//     const incr = targetCount / 100;

//     if (startingCount < targetCount) {
//       startingCount += incr;
//       numCounter.textContent = `${Math.ceil(startingCount)}`;
//       requestAnimationFrame(updateCount);
//     }
//   };

//   updateCount();
// });
