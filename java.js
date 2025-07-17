function answerCheck(selectedOption, correctAnswer, resultId){
var resultElement= document.getElementById(resultId)
if (selectedOption === correctAnswer ) {
    resultElement.textContent = "Good Job!"
    resultElement.style.color ="green"

}
else {
    resultElement.textContent = "Incorrect. Try Again."
    resultElement.style.color = "red"
}
}



