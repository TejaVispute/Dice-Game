// random numner generated here
const dicegenerate = () => {
    const random = Math.floor(Math.random() * 6);
    const Dice = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    const diceval = document.querySelector('.m-dice');
    diceval.innerHTML = Dice[random];
}

let x = true;

// function created for start and stop cube
let stopstart = () => {
    if (x) {
        time = setInterval(dicegenerate, 100);
        x = false;
    }
    else {
        clearInterval(time);
        x = true;
    }
}

// onload stopstart function will automatically fire
window.onload = function () {
    stopstart();
}