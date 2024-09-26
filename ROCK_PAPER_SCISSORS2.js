let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let result = document.getElementById("result");
let result2 = document.getElementById("result2");
let pop = document.getElementById("pop");
let system = 0;
let systemwincount = 0;
let usercount = 0;
let op = ``;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playGame(userChoice) {
    system = getRandomInt(3);
    console.log("System choice:", system);

    // Reset modal content before updating
    op = ``;
    
    if (system === userChoice) {
        let drawn = new Audio("drawn.mp3");
        drawn.play();
        updateModal("tie.webp", "It's a draw!");
    } else if ((userChoice === 0 && system === 2) || (userChoice === 1 && system === 0) || (userChoice === 2 && system === 1)) {
        usercount += 1;
        let winner = new Audio("ku.mp3");
        winner.play();
        updateModal("good tumbsup.webp", "You won this round!");
    } else {
        systemwincount += 1;
        let systemAudio = new Audio("lost this round.mp3");
        systemAudio.play();
        updateModal("good tumbsdown.webp", "System won this round!");
    }

    // Update result counters
    result.textContent = usercount;
    result2.textContent = systemwincount;

    // Show the modal programmatically after updating content
    let modalElement = new bootstrap.Modal(document.getElementById('exampleModal'));
    modalElement.show();
}

function updateModal(imageSrc, message) {
    op = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${message}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src="${imageSrc}" alt="" class="img-fluid">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>`;
    
    pop.innerHTML = op; // Update the modal content
}

// Add event listeners for rock, paper, and scissors
rock.addEventListener('click', () => playGame(0));
paper.addEventListener('click', () => playGame(1));
scissors.addEventListener('click', () => playGame(2));
