const username = document.querySelector('#username')
const saveResultBtn = document.querySelector('#saveResultBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore') || ""

const results = JSON.parse(localStorage.getItem('results')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore;

//save the quiz results
savingResults = e => {
    e.preventDefault()
    //validate the username input. if blank exit
    if(username.value.length == 0) {   
        alert("Please enter your name")
        return; //stop the execution of function
    }
    const score = {
        score: mostRecentScore,
        name: username.value
    }

    //add a current score to results
    results.push(score)

    //sort the results and display top 5
    results.sort((a,b) => {
        return b.score - a.score
    })
    results.splice(5);

    //save to local storage
    localStorage.setItem("results", JSON.stringify(results))

}