const player1 = document.getElementById('player1'),
    player2 = document.getElementById('player2'),
    btnPlayer1 = document.getElementById('btnPlayer1'),
    btnPlayer2 = document.getElementById('btnPlayer2'),
    gameLavel = document.getElementById('gameLavel'),
    reset = document.getElementById('reset');
////^function for 1 player
function scoreKeeperOne(){
    if (
        player1.innerHTML < +gameLavel.value &&
        player2.innerHTML < +gameLavel.value
    ) {
    player1.innerHTML++
    }
    if (
        player1.innerHTML == +gameLavel.value &&
        player2.innerHTML < +gameLavel.value
    ) {
        player1.style.color='green'
        player2.style.color='red'
    }
}
////^function for 2 player
function scoreKeeperTwo(){
    if (
        player1.innerHTML < +gameLavel.value &&
        player2.innerHTML< +gameLavel.value
    ) {
    player2.innerHTML++
    }
    if (
        player2.innerHTML == +gameLavel.value &&
        player1.innerHTML < +gameLavel.value
    ) {
        player2.style.color='green'
        player1.style.color='red'
    }
}
////^function reset
function resetter() {
    player1.innerHTML=0
    player2.innerHTML = 0
    player1.style.color='black'
    player2.style.color='black'
}
btnPlayer1.addEventListener('click', () => {
  scoreKeeperOne()
});
btnPlayer2.addEventListener('click', () => {
    scoreKeeperTwo()
});

reset.addEventListener('click', () => {
  resetter()
})

gameLavel.addEventListener('click', resetter)
