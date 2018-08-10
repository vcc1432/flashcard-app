function showCard() {
    console.log('hallo')
    let random = Math.floor(Math.random()* document.getElementsByClassName('card').length)
    console.log(random)
    let randomCard = document.getElementsByClassName("card")
    console.log(randomCard)
    for(var i = 0; i < randomCard.length; i++) {
        randomCard[i].style.display = 'none'
    }
    
    randomCard[random].style.display = 'block'
    
}

function showAnswer(i) {
    console.log('en nu?')
    let answerCard = document.getElementsByClassName('answer')
    let questionCard = document.getElementsByClassName('question')
        answerCard[i].style.display = 'block'
        questionCard[i].style.display = 'none'
 
}

function showQuestion(i) {
    console.log('freaky mouse')
    let answerCard = document.getElementsByClassName('answer')
    let questionCard = document.getElementsByClassName('question')
        answerCard[i].style.display = 'none'
        questionCard[i].style.display = 'block' 
}

function createForm(q, a) {
    

    console.log('Wrecked?');

    let amountOfCard = document.getElementsByClassName('card').length
    console.log(amountOfCard);
    
    let newCard = document.createElement('div')
    console.log('werkt het?')
    newCard.className = "card"
    console.log('nog steeds?')
    //newCard.onmousemove = showAnswer(amountOfCard + 1)
    //newCard.onmouseout = showQuestion(amountOfCard + 1)
    newCard.addEventListener('onmousemove', () => showAnswer(amountOfCard + 1))
    newCard.addEventListener('onmouseout', () => showQuestion(amountOfCard + 1))

    console.log('halloooooo')


    let newQuestion = document.createElement('p')
    newQuestion.className = "question"
    newCard.appendChild(newQuestion)
    newQuestion.innerText = q
    console.log('ja?')

    let newAnswer = document.createElement('p')
    newAnswer.className = "answer"
    newCard.appendChild(newAnswer)
    newAnswer.innerText = a
    console.log('echt?')

    return newCard
    
}

function submitForm(event) {
    event.preventDefault()
    const newQuestionInput = document.getElementById("questionAdd").value
    const newAnswerInput = document.getElementById("answerAdd").value

    const newCard = createForm(newQuestionInput, newAnswerInput)
    document.getElementById('cardContainer').appendChild(newCard)
    console.log('en nu dan?')
}



