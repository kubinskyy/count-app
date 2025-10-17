let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0

function inc() {
    count++
    countEl.innerText = count
    console.log(count)
}

