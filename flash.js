function showCard() {
    console.log('hallo')
    let random = Math.floor(Math.random()*5)
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

