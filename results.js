const resultsLIst = document.querySelector('#resultsList')
const results =  JSON.parse(localStorage.getItem('results')) || []

resultsLIst.innerHTML = 
results.map(score => {
    return  '<li class="high-score">${score.name} - ${score.score}>'
}).join('')
