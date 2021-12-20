const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localstorage.getitem('mostRecentScore')

const results = JSON.parse(localStorage.getItem('results')) || []

const MAX_HIGH_SCORES = 5

finalScore.innertext = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.Disabled= !username.value
})

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

    results.splice(5)

    localStorage.setItem('results', JSON.stringify(results))
    window.location.assign('/')
}