document.addEventListener('DOMContentLoaded', () => {
    const defaultPrompt = document.getElementById('defaultPrompt');
    const loginButton = document.getElementById('login');
    const signUpButton = document.getElementById('signUp');

    loginButton.addEventListener('click', startQuiz);
    signUpButton.addEventListener('click', startQuiz);

    function startQuiz() {
        const topic = defaultPrompt.value;
        const numberOfQuestions = 5; // Example: fixed number of questions
        fetchQuestions(topic, numberOfQuestions);
    }

    async function fetchQuestions(topic, numberOfQuestions) {
        try {
            const response = await fetch(`/api/quiz?topic=${topic}&limit=${numberOfQuestions}`);
            const questions = await response.json();
            displayQuestions(questions);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    }

    function displayQuestions(questions) {
        const quizContainer = document.createElement('div');
        quizContainer.id = 'quizContainer';
        document.body.appendChild(quizContainer);

        questions.forEach((question, index) => {
            const questionElement = document.createElement('div');
            questionElement.className = 'question';
            questionElement.innerHTML = `
                <h4>${question.title}</h4>
                <p>${question.question}</p>
                ${question.options.map((option, i) => `
                    <label>
                        <input type="radio" name="question${index}" value="${option}">
                        ${option}
                    </label>
                `).join('')}
            `;
            quizContainer.appendChild(questionElement);
        });

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.addEventListener('click', () => checkAnswers(questions));
        quizContainer.appendChild(submitButton);
    }

    function checkAnswers(questions) {
        let correctAnswers = 0;
        let incorrectAnswers = 0;

        questions.forEach((question, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption && selectedOption.value === question.correct_answer) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        });

        displayResults(correctAnswers, incorrectAnswers);
    }

    function displayResults(correct, incorrect) {
        const resultsContainer = document.createElement('div');
        resultsContainer.id = 'resultsContainer';
        resultsContainer.innerHTML = `
            <h3>Results</h3>
            <p>Correct Answers: ${correct}</p>
            <p>Incorrect Answers: ${incorrect}</p>
        `;
        document.body.appendChild(resultsContainer);
    }
});
