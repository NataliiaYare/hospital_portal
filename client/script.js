const questions = [
  { question: "What is 5 + 3?", options: [5, 8, 6, 7], answer: 8 },
  { question: "What is 7 - 2?", options: [5, 3, 6, 4], answer: 5 },
  { question: "What is 6 × 2?", options: [10, 12, 8, 14], answer: 12 },
];

let currentQuestionIndex = 0;

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const buttons = document.querySelectorAll(".option");

  questionElement.textContent = questions[currentQuestionIndex].question;
  buttons.forEach((button, index) => {
    button.textContent = questions[currentQuestionIndex].options[index];
    button.onclick = () =>
      checkAnswer(questions[currentQuestionIndex].options[index]);
  });
}

function checkAnswer(selectedAnswer) {
  const correctAnswer = questions[currentQuestionIndex].answer;
  if (selectedAnswer === correctAnswer) {
    alert("Correct!");
  } else {
    alert("Wrong! Try again.");
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    alert("Quiz Completed!");
    currentQuestionIndex = 0;
    loadQuestion();
  }
}

// Function to update the clock
function updateClock() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  timeElement.textContent = now.toLocaleTimeString();
}

// Update clock every second
setInterval(updateClock, 1000);

// Load first question
loadQuestion();
