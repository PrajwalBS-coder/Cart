document.addEventListener('DOMContentLoaded',()=>{
    const grid=document.querySelector('.grid')
    const doodler=document.createElement('div')
    let doodlerLeftSpace=50;
    let doodlerBottomSpace=150;
    let GameOver=false
    let PlatformCount=5
    function CreateDoodler(){
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodler.style.left=doodlerLeftSpace+'px';
        doodler.style.bottom=doodlerBottomSpace+'px';
    }

class Platform{
    constructor(newPlatFormBottom){
        this.bottom=newPlatFormBottom
        this.left=Math.random()*315
        this.visual=document.createElement('div')

        const visual=this.visual
        visual.classList.add('platform')
        visual.style.left=this.left+'px'
        visual.style.bottom=this.bottom+'px'
        grid.appendChild(visual)
    }
}








// Creating Platforms

function CreatePlatforms(){
    for(let i=0;i<PlatformCount;i++)
    {
      let PlatformGap=600/PlatformCount;
      let newPlatFormBottom=100 +i *PlatformGap
      let newPlatform= new Platform(newPlatFormBottom)
    }

}

    //Strating Doodler



    function start(){
        if (!GameOver)
        {
            CreateDoodler()
            CreatePlatforms()
        }

    }
    start()
})