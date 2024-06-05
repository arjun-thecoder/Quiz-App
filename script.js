// JavaScript for Handling Quiz Logic
document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Lisbon"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            answer: "Mars"
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean"
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const questionContainer = document.getElementById('question-container');
    const nextButton = document.getElementById('next-button');
    const resultContainer = document.getElementById('result-container');
    const scoreElement = document.getElementById('score');
    const restartButton = document.getElementById('restart-button');

    nextButton.addEventListener('click', () => {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption) {
            if (selectedOption.value === questions[currentQuestionIndex].answer) {
                score++;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                displayResult();
            }
        } else {
            alert("Please select an option!");
        }
    });

    restartButton.addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.style.display = 'none';
        questionContainer.style.display = 'block';
        nextButton.style.display = 'block';
        displayQuestion();
    });

    function displayQuestion() {
        const question = questions[currentQuestionIndex];
        questionContainer.innerHTML = `
            <div class="question">${question.question}</div>
            ${question.options.map(option => `
                <label class="option">
                    <input type="radio" name="option" value="${option}">
                    ${option}
                </label>
            `).join('')}
        `;
    }

    function displayResult() {
        questionContainer.style.display = 'none';
        nextButton.style.display = 'none';
        resultContainer.style.display = 'block';
        scoreElement.textContent = `Your score: ${score}`;
    }

    // Display the first question initially
    displayQuestion();
});
