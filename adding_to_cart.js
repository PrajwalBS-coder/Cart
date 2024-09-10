let add=document.getElementById('add')
let content=document.getElementById('content')
let reset=document.getElementById('reset')
let value=localStorage.getItem('Cart')
content.innerHTML=value
//Adding to cart
add.addEventListener('click',()=>{
    //console.log("Added")
    value=value+1
    console.log("Added",value)
    content.innerHTML=value
    localStorage.setItem('Cart',value)
})
//Reseting cart
reset.addEventListener('click',()=>{

    value=0
    content.innerHTML=value
    localStorage.setItem('Cart',value)
})


