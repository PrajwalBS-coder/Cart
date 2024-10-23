change = document.getElementById("change")
bd = document.getElementById("bd")
change.addEventListener('click', () => {
    console.log("Clicked")
    bd.style.backgroundColor = getRandomColor()
    console.log(getRandomColor())
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}