let one = document.getElementById('one')
let input = document.getElementById('input')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let nine = document.getElementById('nine')
let add = document.getElementById('+')
let result = document.getElementById('result')
let clear = document.getElementById('clear')
v1 = 0
v2 = 0
v3 = 0
op = ''
c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0, c8 = 0, c9 = 0
one.addEventListener('click', () => {
    input.value = 1
    if (c1 === 1 || v2 === 0 && v1 != 0) {
        if (v2 === 0) {
            v2 = 1
        }

    }
    if (v1 == 0 && c1 === 0) {
        v1 = 1
    }
    c1 += 1

    console.log("clicked 1", c1, v1, v2)
})

two.addEventListener('click', () => {
    input.value = 2
    if (c2 === 1 || v2 === 0 && v1 != 0) {
        if (v2 === 0) {
            v2 = 2
        }

    }
    if (v1 === 0 && c2 === 0) {
        v1 = 2
    }

    c2 += 1
    console.log("clicked 2", c2, v1, v2)
})



three.addEventListener('click', () => {
    input.value = 3
    if (c3 === 1 || v2 === 0 && v1 != 0) {
        if (v2 === 0) {
            v2 = 3
        }

    }
    if (v1 === 0 && c3 === 0) {
        v1 = 3
    }

    c3 += 1
    //console.log("clicked 3", c3, v1, v2)
})
four.addEventListener('click', () => {
    input.value = 4
    if (c4 === 1 || v2 === 0 && v1 != 0) {
        if (v2 === 0) {
            v2 = 4
        }

    }
    if (v1 === 0 && c4 === 0) {
        v1 = 4
    }

    c4 += 1
    
})
five.addEventListener('click', () => {
    input.value = 5
    if (c5 === 1 || v2 === 0 && v1 != 0) {
        if (v2 === 0) {
            v2 = 5
        }

    }
    if (v1 === 0 && c5 === 0) {
        v1 = 5
    }

    c5 += 1
    console.log("clicked 3", c3, v1, v2)
})
six.addEventListener('click', () => {
    input.value = 6
    if (c6 === 1 || v2 === 0 && v1 != 0) {
        if (v2 === 0) {
            v2 = 6
        }

    }
    if (v1 === 0 && c6 === 0) {
        v1 = 6
    }

    c6 += 1
    console.log("clicked 3", c3, v1, v2)
})
seven.addEventListener('click', () => {
    input.value = 7
    if (c7 === 1 || v2 === 0 && v1 != 0) {
        if (v2 === 0) {
            v2 = 7
        }

    }
    if (v1 === 0 && c7 === 0) {
        v1 = 7
    }

    c7 += 1
    console.log("clicked 3", c3, v1, v2)
})
eight.addEventListener('click', () => {
    input.value = 8
    if (c8 === 1 || v2 === 0 && v1 != 0) {
        if (v2 === 0) {
            v2 = 8
        }

    }
    if (v1 === 0 && c8 === 0) {
        v1 = 8
    }

    c8 += 1
    console.log("clicked 3", c3, v1, v2)
})

nine.addEventListener('click', () => {
    input.value = 9
    if (c9 === 1 || v2 === 0 && v1 != 0) {
        if (v2 === 0) {
            v2 = 9
        }

    }
    if (v1 === 0 && c9 === 0) {
        v1 = 9
    }

    c9 += 1
    console.log("clicked 3", c3, v1, v2)
})

plus.addEventListener('click', () => {
    input.value = '+'
    op = '+'
    console.log("clicked plus")
})

result.addEventListener('click', () => {
    console.log(op, v1, v2)
    if (op === '+') {
        v3 = v1 + v2

    }

    c1 = 0
    c2 = 0
    c3 = 0
    c4 = 0
    c5 = 0
    c6 = 0
    c7 = 0
    c8 = 0
    c9 = 0
    input.value = v3
})

clear.addEventListener('click', () => {
    v1 = 0, v2 = 0, v3 = 0
    console.log("CLEARED")
    input.value = v3

})