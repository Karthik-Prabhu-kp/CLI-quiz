var readlineSync = require("readline-sync")
const chalk = require('chalk');
var score = 0

var userName = readlineSync.question("What is your name ? ")
console.log("Welcome " + userName + " do you know karthik ? ");

//play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("you are right!"))
    score++
  }
  else {
    console.log(chalk.red("you are wrong."))
  }
  console.log("score is: ", score);
  console.log(chalk.blue("---------------"))
}


//arry with questions
var questions = [{
  question: "where do i live? ",
  answer: "Bangalore"
}, {
  question: "who is my favoutie superhero? ",
  answer: "Hulk"
}]
//loop array 
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)

}

var highScores = [
  {
    name: "karthik",
    score: 2,
  },
  {
    name: "Tarun",
    score: 1,
  }
]

for (var j = 0; j < highScores.length; j++) {
  currentHighScore = highScores[j]
  console.log(chalk.yellow("high score is " + currentHighScore.score))
  console.log(chalk.yellow("Achieved by ", currentHighScore.name))
}
