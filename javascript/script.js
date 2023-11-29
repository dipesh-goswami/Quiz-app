const questions = [
  {
    question: "[(288)2÷ 24 × 36] ÷ 18 = √?",
    answers: [
      { title: "6912", correct: false },
      { title: "3456", correct: false },
      { title: "216", correct: false },
      { title: "6912^2", correct: true },
    ]
  },
  {
    question: "1454 + 2365 + 9710 + 3020 = ?",
    answers: [
      { title: "20718", correct: false },
      { title: "18121", correct: false },
      { title: "16549", correct: true },
      { title: "14226", correct: false },
    ]
  },
  {
    question: "67.5% of 960 + ?% of 640 = 728",
    answers: [
      { title: "12.5", correct: true },
      { title: "25", correct: false },
      { title: "12", correct: false },
      { title: "11", correct: false },
    ]
  },
  {
    question: "(√8 × √8)1/2 + 91/2 = ?3+ √8 – 340",
    answers: [
      { title: "7", correct: true },
      { title: "19", correct: false },
      { title: "18", correct: false },
      { title: "9", correct: false },
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  currentQuestion.answers.forEach(answers => {
    const button = document.createElement("button");
    button.innerHTML = answers.title;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answers.correct) {
      button.dataset.correct = answes.correct;

    }
    button.addEventListener("click", selectAnswer);
  })
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }

}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
  }
  else {
    selectedBtn.classList.add("incorrect");
  }
}
startQuiz();