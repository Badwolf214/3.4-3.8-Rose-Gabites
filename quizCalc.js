const quizData = [
  {
    question: "  Which of the following changes would most improve a website's visibility of system status?",
    options: ["a) Adding a loading spinner when a page is processing", "  b) Reducing the number of options in a dropdown menu", "c) Using more vibrant colors for headings", "d) Hiding error messages until the user submits a form"],
    answer: "a) Adding a loading spinner when a page is processing"
  },


];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;

  optionsElement.innerHTML = "";
  question.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quiz.innerHTML = `
    <h1>Quiz Completed!</h1>
    <p>Your score: ${score}/${quizData.length}</p>
  `;
}

showQuestion();