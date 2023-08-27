const quizData = [
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Which is the largest mammal?",
        options: ["Elephant", "Whale", "Giraffe", "Hippopotamus"],
        answer: "Whale"
    }
];

let currentQuestion = 0;

window.onload = () => {
    displayQuestion();
};

function displayQuestion() {
    const questionData = quizData[currentQuestion];
    const quizContainer = document.getElementById('quiz-container');
    
    let optionsHtml = '';
    questionData.options.forEach((option, index) => {
        optionsHtml += `<div class="form-check">
            <input class="form-check-input" type="radio" name="quizOption" id="option${index}" value="${option}">
            <label class="form-check-label" for="option${index}">${option}</label>
        </div>`;
    });

    quizContainer.innerHTML = `<h4>${questionData.question}</h4>` + optionsHtml;
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="quizOption"]:checked').value;
    
    if (selectedOption === quizData[currentQuestion].answer) {
        alert("Correct!");
    } else {
        alert("Wrong. The correct answer was " + quizData[currentQuestion].answer);
    }
    
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        alert("Quiz completed!");
    }
}
