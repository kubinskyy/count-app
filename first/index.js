let count = 0
let countEl = document.getElementById("count-people")
let lastEL = document.getElementById("last-enter")

function inc() {
    count++
    countEl.innerText = count
}

function save() {
    let countEv = count + " - "
    lastEL.textContent += countEv
    count = 0
    countEl.innerText = 0
}





