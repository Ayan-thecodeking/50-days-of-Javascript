const tempLoad = () => {
    let temp = document.getElementById('temp')
    temp.innerHTML = "&#xf2cb";

    setTimeout(() => {
        temp.innerHTML = "&#xf2ca";
    }, 1000)

    setTimeout(() => {
        temp.innerHTML = "&#xf2c9";
    }, 2000)

    setTimeout(() => {
        temp.innerHTML = "&#xf2c8";
        temp.style.color = "#db63031"
    }, 3000)

}


tempLoad();

setInterval(tempLoad ,5000)



// Not working due to some reason  specially that icon 