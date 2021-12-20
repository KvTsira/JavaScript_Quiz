const resultsLIst = document.querySelector('#resultsList')
const results =  JSON.parse(localStorage.getItem('results')) || []

//write the result back to li element
resultsLIst.innerHTML = 
results.map(score => {
    return   `<li class="high-score">${score.name} - ${score.score} </li>`
}).join('')
