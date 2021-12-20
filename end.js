const username = document.querySelector('#username')
const saveResultBtn = document.querySelector('#saveResultBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore') || ""

const results = JSON.parse(localStorage.getItem('results')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore;
 /*
username.addEventListener('keyup', () => {
    saveResultBtn.Disabled= username.value === ""
})
*/

savingResults = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    results.push(score)

    results.sort((a,b) => {
        return b.score - a.score
    })

    //at position 5 remove items
    results.splice(5);
    console.log(results);

    //save to local storage
    localStorage.setItem("results", JSON.stringify(results))

    //load a new document (homepage)
    window.location.assign('/')
}