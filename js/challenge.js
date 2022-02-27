
const counterId = document.getElementById("counter")
let count = 0

document.addEventListener('DOMContentLoaded', (event) => {
    let counter = setInterval( function(){
        count += 1
        counterId.innerText = count
    }, 1000)
});

const minusButton = document.getElementById("minus")

minusButton.addEventListener('click', (event) => {
    count = count - 1
    counterId.textContent = count
});

const plusButton = document.getElementById("plus")

plusButton.addEventListener('click', (event) => {
        count = count + 1
        counterId.textContent = count
});

const likeButton = document.getElementById("heart")
let x = 0


likeButton.addEventListener('click', (event) => {
    const listLikes = document.querySelector(".likes")
    const li = document.createElement("li")
    let screenNum = parseInt(counterId.innerText)
    

    //screenNum === screenNum
    //counterId.innerText === counterId.innerText
    //parseInt(counterId.innerText) === parseInt(counterId.innerText)
    if (screenNum === 0) {
        x = x + 1
        const textNode = document.createTextNode(screenNum + " has been liked " + x + " times")
        li.appendChild(textNode)
        listLikes.appendChild(li)
        console.log(x)
    } else {
        const textNode = document.createTextNode(screenNum + " has been liked  1 time")
        li.appendChild(textNode)
        listLikes.appendChild(li)
        console.log(x)
    }
})

const pauseButton = document.getElementById("pause")

pauseButton.addEventListener('click', (event) => {
    clearInterval(counter)
});

