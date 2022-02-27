
const counterId = document.getElementById("counter")
let count = 0
let intervalId
const setOfLikes = {}


document.addEventListener('DOMContentLoaded', (event) => {
    intervalId = setInterval( function(){
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


likeButton.addEventListener('click', (event) => {
    let x = 0 
    //x ++
    const listLikes = document.querySelector(".likes")
    const li = document.createElement("li")
    let screenNum = parseInt(counterId.innerText)
    
    let key = count
    //setOfLikes[key] = x+=1
    
    if (setOfLikes[key] === setOfLikes[key]) {
        setOfLikes[key] = x+=1
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
    clearInterval(intervalId)
    minusButton.disabled
    plusButton.disabled
    likeButton.disabled
    submitButton.disabled
    



})

const submitButton = document.getElementById("submit")



