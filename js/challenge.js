
const counterId = document.getElementById("counter")
let count = 0
let intervalId
const setOfLikes = {}

function counterFun(){
    intervalId = setInterval( function(){
        count += 1
        counterId.innerText = count
    }, 1000)
}

document.addEventListener('DOMContentLoaded', (event) => {
    counterFun()
});

const minusButton = document.getElementById("minus")

minusButton.addEventListener('click', (event) => {
    count = count - 1
    counterId.innerText = count
});

const plusButton = document.getElementById("plus")

plusButton.addEventListener('click', (event) => {
        count = count + 1
        counterId.innerText = count
});

const likeButton = document.getElementById("heart")
let x = 0 

likeButton.addEventListener('click', (event) => {
    const listLikes = document.querySelector(".likes")
    const li = document.createElement("li")
    let screenNum = parseInt(counterId.innerText)
    let key = count
    
    if (document.getElementById(count)) {
        //console.log("found",document.getElementById(count))
        setOfLikes[key] += 1
        let found = document.getElementById(count)
        found.innerHTML = screenNum + " has been liked " + setOfLikes[key] + " times"
        //console.log(setOfLikes)
    } else {
        li.id = count
        //console.log(li)
        li.innerHTML = screenNum + " has been liked  1 time"
        listLikes.appendChild(li)
        setOfLikes[key] = 1
        //console.log("else", setOfLikes)
    }
})

const pauseButton = document.getElementById("pause")
let pause = false

pauseButton.addEventListener('click', (event) => {
    pause = !pause 
    clearInterval(intervalId)
    minusButton.disabled = true
    plusButton.disabled = true
    likeButton.disabled = true
    submitButton.disabled = true  
    pauseButton.innerHTML = "resume"

    if(!pause)
    {
        minusButton.disabled = false
        plusButton.disabled = false
        likeButton.disabled = false
        submitButton.disabled = false
        counterFun()

}
})

const restartButton = document.getElementById("restart")

restartButton.addEventListener('click', (event) => {
    count = -1
    clearInterval(intervalId)
    counterFun()
    minusButton.disabled = false
    plusButton.disabled = false
    likeButton.disabled = false
    submitButton.disabled = false
    
})

const submitButton = document.getElementById("submit")

submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    let commentsArea = document.querySelector(".comments")
    let commentBoxValue = document.getElementById("comment-input").value
    const p = document.createElement("p")
    let pageComments = document.createTextNode(commentBoxValue)
    p.appendChild(pageComments)
    let br = document.createElement("br")
    if(document.getElementById("comment-input").value !== " "){
        commentsArea.appendChild(p)
        document.getElementById("comment-input").value = " "
    }
})











