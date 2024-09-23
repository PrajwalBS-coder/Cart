let rock = document.getElementById("rock")
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let result = document.getElementById('result')
let result2 = document.getElementById('result2')
let pop = document.getElementById('pop')
let system = 0
let rocky = 0
let papery = 0
let scissorsy = 0
let systemwincount = 0
let usercount = 0
let op=``

rock.addEventListener('click', () => {
    system = getRandomInt(3)
    console.log(getRandomInt(3));

    if (system === 2) {
        usercount += 1
        console.log("USER", usercount)
        winner = new Audio("ku.mp3")
        winner.play()
        op += `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>`
        pop.innerHTML = op;



    }
    if (system === 0) {

        drawn = new Audio("drawn.mp3")
        drawn.play()
    }
    if (system === 1) {
        systemwincount += 1
        console.log("SYSTEm", systemwincount)
        systemwin = new Audio("lost this round.mp3")
        systemwin.play()
    }
    result.textContent = usercount;
    result2.textContent = systemwincount;
})














// console.log(getRandomInt(3));

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}