let textEl = document.getElementById("text-end")
let countEl = document.getElementById("count-el")
let count = 0

function inc() {
    count++
    countEl.innerText = count
}

function save() {
    let countStr = count + " -"
    textEl.innerText += " " + countStr
    countEl.innerText = 0
    count = 0
}





