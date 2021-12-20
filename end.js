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

    results.sort((a,b) => {
        return b.score - a.score
    })

    //at position 5 remove items
    results.splice(5);
    console.log(results);

    //save to local storage
    localStorage.setItem("results", JSON.stringify(results))

}