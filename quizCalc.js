const quizData = [
  {
    question: "1/10: Which of the following changes would most improve a website's visibility of system status?",
    options: ["a) Adding a loading spinner when a page is processing", "  b) Reducing the number of options in a dropdown menu", "c) Using more vibrant colors for headings", "d) Hiding error messages until the user submits a form"],
    answer: "a) Adding a loading spinner when a page is processing"
  },
  {
    question: "2/10: A website uses terms like 'cart' and 'checkout' for purchasing items, which align with the typical language used in retail. This is an example of which heuristic?",
    options: ["a) Flexibility and efficiency of use", "b) Consistency and standards", "c) Match between system and the real world", "d) Recognition rather than recall"],
    answer: "c) Match between system and the real world"
  },

  {
    question: "3/10: A website provides an 'Undo' option for actions like deleting items or submitting forms. This is an example of which heuristic?",
    options: ["a) Error prevention", "b) User control and freedom", "b) Personalization and Adaptability", "d) Help users recognize, diagnose, and recover from errors"],
    answer: "b) User control and freedom"
  },

  {
    question: "4/10: What change would improve consistency and standards on a website?",
    options: ["a) Using different color schemes for each section of the site", "b) Keeping navigation elements in the same location across all pages", "c) Varying button shapes to match content themes", "  d) Using different fonts for headings and body text"],
    answer: "b) Keeping navigation elements in the same location across all pages"
  },

  {
    question: "5/10: A form that validates input in real-time and prevents submission if errors are detected is an example of which heuristic?",
    options: ["a) Error prevention", "b) Recognition rather than recall", "c) User control and freedom", "d) Aesthetic and minimalist design"],
    answer: "a) Error prevention"
  },

  {
    question: "6/10: Which feature would most support recognition rather than recall on a navigation menu?",
    options: ["a) Using icons alongside text labels for menu items", "b) Hiding all menu items until the user starts typing", "c) Requiring users to memorize shortcuts for navigation", "d) Offering a search function without suggesting common terms"],
    answer: "a) Using icons alongside text labels for menu items"
  },

  {
    question: "7/10: A website offers both a basic search and an advanced search with filters for users who want more control. This is an example of which heuristic?",
    options: ["a) Flexibility and efficiency of use", "c) Magical Unicorn Feedback", "c) Error prevention", "d) Help users recognize, diagnose, and recover from errors"],
    answer: "a) Flexibility and efficiency of use"
  },


  {
    question: "8/10: What change would best improve a site’s aesthetic and minimalist design?",
    options: ["a) Adding multiple banners and promotional pop-ups on the homepage", "b) Reducing the amount of text and focusing on essential information", "c) Using numerous fonts and colors to highlight different sections", "d) Including extensive background images and animations"],
    answer: "b) Reducing the amount of text and focusing on essential information"
  },
  {
    question: "9/10: A website displays an error message with a clear description of the problem and steps to fix it. This is an example of which heuristic?",
    options: ["a) Help users recognize, diagnose, and recover from errors", " b) Error prevention", "c) Match between system and the real world", "c) Flexibility and efficiency of use"],
    answer: " a) Help users recognize, diagnose, and recover from errors"
  },

  {
    question: "10/10: A website includes a comprehensive help section with a search function, step-by-step guides, and a contact form for further assistance. This is an example of which heuristic?",
    options: ["a) Help and documentation", "b) Aesthetic and minimalist design", " c) Recognition rather than recall", " d) Consistency and standards"],
    answer: "a) Help and documentation"
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