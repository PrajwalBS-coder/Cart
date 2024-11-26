document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    let doodlerLeftSpace = 50;
    let doodlerBottomSpace = 150;
    let IsGameOver = false
    let PlatformCount = 5
    let Platforms = []
    let UpTimerId
    let LowTimerId
    let IsJumping = false




    function CreateDoodler() {
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodler.style.left = doodlerLeftSpace + 'px';
        doodler.style.bottom = doodlerBottomSpace + 'px';
    }

    class Platform {
        constructor(newPlatFormBottom) {
            this.bottom = newPlatFormBottom
            this.left = Math.random() * 315
            this.visual = document.createElement('div')

            const visual = this.visual
            visual.classList.add('platform')
            visual.style.left = this.left + 'px'
            visual.style.bottom = this.bottom + 'px'
            grid.appendChild(visual)
        }
    }


    // Creating Platforms

    function CreatePlatforms() {
        for (let i = 0; i < PlatformCount; i++) {
            let PlatformGap = 600 / PlatformCount;
            let newPlatFormBottom = 100 + i * PlatformGap
            let newPlatform = new Platform(newPlatFormBottom)
            Platforms.push(newPlatform)
            console.log(Platforms)

        }

    }


    //Moving Platform

    function MovePlatForm() {
        if (doodlerBottomSpace > 200) {
            Platforms.forEach(Platform => {
                Platform.bottom -= 4
                let visual = Platform.visual
                visual.style.bottom = Platform.bottom + 'px'
            })
        }

    }

    //Function Jump

    function Jump() {
        clearInterval(LowTimerId)
        IsJumping = true
        UpTimerId = setInterval(() => {
            doodlerBottomSpace += 20
            doodler.style.bottom = doodlerBottomSpace + 'px'
            if (doodlerBottomSpace > 350) {

                Fall()
            }


        }, 30)


    }
    //Function Fall

    function Fall() {
        clearInterval(UpTimerId)
        IsJumping = false
        LowTimerId = setInterval(() => {
            doodlerBottomSpace -= 5
            doodler.style.bottom = doodlerBottomSpace + 'px'
            if (doodlerBottomSpace <= 0) {
                GameOver()
            }
            Platforms.forEach(platform => {
                if (
                    (doodlerBottomSpace >= platform.bottom) &&
                    (doodlerBottomSpace <= platform.bottom + 15) &&
                    ((doodlerLeftSpace + 60) >= platform.left) &&
                    (doodlerLeftSpace <= (platform.left + 85)) &&
                    !IsJumping
                ) {
                    console.log('Landed On Bar')
                    Jump()//34min

                }

            })



        }, 30)

    }


    //Game Over

    function GameOver() {
        console.log("Game Over")
        IsGameOver = true
        clearInterval(UpTimerId)
        clearInterval(LowTimerId)


    }
    //Control
    function Control(e) {
        if (e.key == "ArrowLeft") {
            //left move function
        }
        else if (e.key == "ArrowRight") {
            //right move function

        }
        else if (e.key == "ArrowUp") {
            //up move function

        }
    }



    //Strating Doodler
    function start() {
        if (!IsGameOver) {
           
            CreatePlatforms()
            CreateDoodler()
            setInterval(MovePlatForm, 30)
            Jump()
        }

    }
    start()
})