type Question = {
    question: string;
    answers: string[];
    correctAnswer: number;
};

// Questions
const questions: Question[] = [
    {
        question: "What is TypeScript?",
        answers: [
            "A database",
            "A superset of JavaScript",
            "A CSS framework",
            "An operating system"
        ],
        correctAnswer: 1
    },

    {
        question: "Which file extension is used for TypeScript files?",
        answers: [
            ".js",
            ".css",
            ".ts",
            ".html"
        ],
        correctAnswer: 2
    },

    {
        question: "Which keyword is used to define a type alias?",
        answers: [
            "type",
            "define",
            "interface",
            "alias"
        ],
        correctAnswer: 0
    },

    {
        question: "Which type represents true or false?",
        answers: [
            "string",
            "number",
            "boolean",
            "object"
        ],
        correctAnswer: 2
    },

    {
        question: "Which keyword can be used to create an interface?",
        answers: [
            "interface",
            "struct",
            "typeOf",
            "classType"
        ],
        correctAnswer: 0
    },

    {
        question: "What type is used for text?",
        answers: [
            "text",
            "string",
            "char",
            "words"
        ],
        correctAnswer: 1
    },

    {
        question: "What type is used for numbers?",
        answers: [
            "integer",
            "float",
            "number",
            "numeric"
        ],
        correctAnswer: 2
    },

    {
        question: "Which command can compile TypeScript into JavaScript?",
        answers: [
            "tsc",
            "typescript-run",
            "compile-ts",
            "ts-run"
        ],
        correctAnswer: 0
    },

    {
        question: "Which type allows a variable to have multiple specific types?",
        answers: [
            "Union type",
            "Single type",
            "Fixed type",
            "Multi variable"
        ],
        correctAnswer: 0
    },

    {
        question: "Which symbol is used for a union type?",
        answers: [
            "&",
            "|",
            "||",
            "+"
        ],
        correctAnswer: 1
    }
];

// DOM Elements
const startScreen = document.getElementById("start-screen")!;
const quizScreen = document.getElementById("quiz-screen")!;
const resultScreen = document.getElementById("result-screen")!;

const startBtn = document.getElementById("start-btn")!;
const nextBtn = document.getElementById("next-btn")!;
const restartBtn = document.getElementById("restart-btn")!;

const questionNumber = document.getElementById("question-number")!;
const questionElement = document.getElementById("question")!;
const answersElement = document.getElementById("answers")!;
const scoreElement = document.getElementById("score")!;
const finalScore = document.getElementById("final-score")!;



// Variables
let currentQuestion = 0;
let score = 0;
let selectedAnswer = false;


// showQuestion Function
function showQuestion(): void {

    const current = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;

    questionElement.textContent = current.question;

    answersElement.innerHTML = "";

    selectedAnswer = false;

    current.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.classList.add("answer-btn");

        button.textContent = answer;

        button.addEventListener("click", () => {
            checkAnswer(index, button);
        });

        answersElement.appendChild(button);
    });
}


// checkAnswer Function
function checkAnswer(
    selectedIndex: number,
    button: HTMLButtonElement
): void {

    if (selectedAnswer) {
        return;
    }

    selectedAnswer = true;

    const correctIndex = questions[currentQuestion].correctAnswer;

    if (selectedIndex === correctIndex) {
        button.classList.add("correct");

        score++;

        scoreElement.textContent = `Score: ${score}`;
    } else {
        button.classList.add("wrong");

        const buttons = answersElement.querySelectorAll(".answer-btn");

        buttons[correctIndex].classList.add("correct");
    }
}

// Next Button Event Listener
nextBtn.addEventListener("click", () => {

    if (!selectedAnswer) {
        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();
    }
});


// showResult Function
function showResult(): void {

    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    finalScore.textContent =
        `You scored ${score} out of ${questions.length}`;
}  



// startBtn Event Listener
startBtn.addEventListener("click", () => {

    startScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");

    showQuestion();
});


// tryAgainBtn 
restartBtn.addEventListener("click", () => {

    currentQuestion = 0;
    score = 0;

    scoreElement.textContent = "Score: 0";

    resultScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");

    showQuestion();
});