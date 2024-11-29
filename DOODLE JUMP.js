document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    let doodlerLeftSpace = 50;
    let startpoint=150
    let doodlerBottomSpace = startpoint;
    let IsGameOver = false
    let PlatformCount = 5
    let Platforms = []
    let UpTimerId
    let LowTimerId
    let IsJumping = true
    let IsGoingleft=false
    let IsGoingRight=false
    let LeftTimerId
    let RightTimerId



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
            if (doodlerBottomSpace > startpoint +200) {

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
                    startpoint=doodlerBottomSpace
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
            MoveLeft()
        }
        else if (e.key == "ArrowRight") {
            //right move function
            MoveRight()//44.41

        }
        else if (e.key == "ArrowUp") {
            //up move function

        }
    }

    //move Left Function

    function MoveLeft(){
        if(IsGoingRight){
            clearInterval(RightTimerId)
            IsGoingRight=false

        }
         IsGoingleft=true
         LeftTimerId=setInterval(()=>{
            if (doodlerLeftSpace>=0)
            {
            doodlerLeftSpace-=5
            doodler.style.left=doodlerLeftSpace + 'px'
            }
            else{
                MoveRight()
            }

         },30)

    }
    function MoveRight(){
        if(IsGoingleft){
            clearInterval(LeftTimerId)
            IsGoingleft=false

        }
        IsGoingRight=true
        RightTimerId=setInterval(()=>{
            if(doodlerLeftSpace<=340)
            {
                doodlerLeftSpace+=5
                 doodler.style.left=doodlerLeftSpace + 'px'

            }

        },30)

    }


    //Strating Doodler
    function start() {
        if (!IsGameOver) {
           
            CreatePlatforms()
            CreateDoodler()
            setInterval(MovePlatForm, 30)
            Jump()
            document.addEventListener('keyup',Control)
        }

    }
    start()
})