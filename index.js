let countEl = document.getElementById("count-el"); // pass in arguments

console.log(countEl)

let count = 0

function increment() {
    if (count < 100) { 
        count = count + 1;
        countEl.innerText = count;
    }
}

function decrease() {
    if (count > 0) { 
        count = count - 1;
        countEl.innerText = count;
    }
}