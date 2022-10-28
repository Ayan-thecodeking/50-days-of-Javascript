const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password ="";

function gen(){
    for(let i =0 ; i<16;i++){
        let randomIndex = Math.floor( Math.random() * characters.length)
        password +=characters[randomIndex]
        document.getElementById("passOne").innerText =password
    }
   
    // console.log( "ans " + password)
}

copyTextBtn = document.querySelector('#copyTextBtn');
      copyTextBtn.addEventListener('click', function(event) {
        passOne = document.querySelector('#passOne');
        passOne.focus();
        passOne.select();
        try {
          let successful = document.execCommand('copy');
          let msg = successful ? 'successful' : 'unsuccessful';
          alert('Copy text command was ' + msg);
        } catch(err) {
          alert('Unable to copy');
        }
      });