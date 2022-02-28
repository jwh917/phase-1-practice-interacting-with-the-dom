
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
const submitButton = document.getElementById("submit")
//const resumeButton = document.getElementById("resume")


pauseButton.addEventListener('click', (event) => {
    clearInterval(intervalId)
    minusButton.disabled = true
    plusButton.disabled = true
    likeButton.disabled = true
    submitButton.disabled = true  
    pauseButton.id = "resume"
    pauseButton.innerHTML = "resume"

    //maybe if 
    // setInterval( function(){
    //     count += 1
    //     counterId.innerText = count
    // }, 1000)
    // minusButton.disabled = false
    // plusButton.disabled = false
    // likeButton.disabled = false
    // submitButton.disabled = false
    // pauseButton.id = "pause"
    // pauseButton.innerHTML = "pause"
    

})


// resumeButton.addEventListener('click', (event) => {
//     setInterval( function(){
//         count += 1
//         counterId.innerText = count
//     }, 1000)
//     minusButton.disabled = false
//     plusButton.disabled = false
//     likeButton.disabled = false
//     submitButton.disabled = false
//     resumeButton.id = "pause"
//     pauseButton.innerHTML = "pause"
    

// })

const restartButton = document.getElementById("restart")

// repeated click makes it go faster ?
restartButton.addEventListener('click', (event) => {
    count = -1
    clearInterval(intervalId)
    setInterval( function(){
        count += 1
        counterId.innerText = count
    }, 1000)
    minusButton.disabled = false
    plusButton.disabled = false
    likeButton.disabled = false
    submitButton.disabled = false
    
})

//how to get extra space ?

submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    let commentsArea = document.querySelector(".comments")
    let commentBoxValue = document.getElementById("comment-input").value
    let pageComments = document.createTextNode(commentBoxValue)
    let br = document.createElement("br")
    if(document.getElementById("comment-input").value !== " "){
        commentsArea.appendChild(pageComments)
        commentsArea.appendChild(br)
        commentsArea.appendChild(br);
        document.getElementById("comment-input").value = " "
    }
    else{

    }

})











