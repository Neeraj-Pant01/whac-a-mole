const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".moles");
const time = document.getElementById("time-left");
const score = document.getElementById("score");
let sound = new Audio("ting.mp3");

let btn = document.getElementById('btn');

let result = 0;
let currentTime = 30;
let hitposition;

const randomSquare = ()=>{
    squares.forEach(square =>{
        square.classList.remove("moles");
    })
    let randomPosition = squares[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("moles");

    hitposition = randomPosition.id;
}

let mm = setInterval(randomSquare, 1000);


squares.forEach(square =>{
    square.addEventListener('mouseover', ()=>{
        if(square.id == hitposition){
            result++;
            score.textContent = result;
            sound.play();
            hitposition = null;
        }
    })
})
let scorecard = score.value;
const countdown = ()=>{
    currentTime--;
    time.textContent=currentTime;
    if(currentTime==0){
        clearInterval(mm), clearInterval(cd)
        alert(`gameover`);
        btn.onclick = window.location.reload();
    }
}
let cd = setInterval(countdown, 1000);