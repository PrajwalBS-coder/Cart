let one=document.getElementById('one')
let input=document.getElementById('input')
let two=document.getElementById('two')
let add=document.getElementById('+')
v1=0
v2=0
one.addEventListener('click',()=>{
    input.value=1
    v1=1
    console.log("clicked")
})

two.addEventListener('click',()=>{
    input.value=2
    v2=2
    console.log("clicked 2")
})

plus.addEventListener('click',()=>{
    input.value='+'
    v3=v1+v2
    input.value= v3
    console.log("clicked plus")
})