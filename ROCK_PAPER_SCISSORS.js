let rock = document.getElementById("rock")
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let result = document.getElementById('result')
let result2 = document.getElementById('result2')
let system = 0
let rocky = 0
let papery = 0
let scissorsy = 0
let systemwincount = 0
let usercount = 0

rock.addEventListener('click', () => {
    system = getRandomInt(3)
    console.log(getRandomInt(3));

    if (system === 2) {
        usercount += 1
        console.log("USER", usercount)
        winner = new Audio("u.mp3")
        winner.play()

    }
    if (system === 0) {

        winner = new Audio("drawn.mp3")
        winner.play()
    }
    if (system === 1) {
        systemwincount += 1
        console.log("SYSTEm", systemwincount)
        winner = new Audio("winner.mp3")
        winner.play()
    }
    result.textContent = usercount;
    result2.textContent = systemwincount;
})














// console.log(getRandomInt(3));

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}