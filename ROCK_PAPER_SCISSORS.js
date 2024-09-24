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
let op = ``;
rock.addEventListener('click', () => {
    system = getRandomInt(3)
    console.log(getRandomInt(3));

    if (system === 2) {
        usercount += 1
        console.log("USER", usercount)
        winner = new Audio("ku.mp3")
        winner.play()
        op += `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                         <img src="good tumbsup.webp" alt="" class="img-fluid">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>`;


    }
    if (system === 0) {

        drawn = new Audio("drawn.mp3")
        drawn.play()
        op += `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                     <img src="tie.webp" alt="" style="text-align: center;" class="img-fluid">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>`;
    }
    if (system === 1) {
        systemwincount += 1
        console.log("SYSTEm", systemwincount)
        system = new Audio("lost this round.mp3")
        system.play()
        op += `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                         <img src="good tumbsdown.webp" alt="" style="text-align: center;" class="center-block img-responsive">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>`;
        // pop.innerHTML = op;
        // op = ``
    }
    result.textContent = usercount;
    result2.textContent = systemwincount;
    pop.innerHTML = op;
    op = ``

})















// console.log(getRandomInt(3));

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}