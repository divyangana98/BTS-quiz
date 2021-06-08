var readlineSync = require("readline-sync");
var chalk =  require("chalk");

const ques = chalk.bold.blue;
const error = chalk.bold.redBright;
const right = chalk.bold.green;

var userScore = 0;

var userName = readlineSync.question(chalk.bold.blueBright("Enter your name: "));

console.log(chalk.bold.magentaBright("Welcome "+userName+" to the BTS quiz. "));

var quizQuestions = [{
  options:[3,4,7,10],
  question: "How many members are there in BTS kpop group?",
  answer:7
},{
  options:["Kim Namjoon","Jung Hoseok","Soekjin","Min Yoongi"],
  question: "Who is the leader of this group?",
  answer:"Kim Namjoon"
},{
  options:["yes","no","I don't know"],
  question: "Was this group nominated in the Grammy awards?",
  answer:"yes"
},{
  options:["V","JK","Hope","T"],
  question: "What is the stage name of Kim Taehyung?",
  answer: "V"
},{
  options:["Speak Yourself","Love Yourself","Love Myself","Sarang"],
  question: "Name the campaign for which BTS joined hands with UNICEF against violence towards children and teenagers.",
  answer: "Love Myself"
},{
  options:["Rising Strong","Braving the Wilderness","Into the Magic Shop","I don't know"],
  question:"BTS album 'Love Yourself Tear' is inspired by one of the Stanford professors Dr James Doty's book. What is the name of this book?",
  answer:"Into the Magic Shop"
},{
  options: ["Fire","Sea","Butterfly","Black Swan","Mikrokosmos"],
  question:"'A dancer dies twice - once when they stop dancing, and this first death is more painful'.Which BTS song depicts this quote by Martha Graham?",
  answer:"Black Swan"
},{
  options:["Bulletproof Scouts","Behind The Scene","Bangtan Boys","None of the above"],
  question:"What does BTS stands for?",
  answer:"Bulletproof Scouts"
},{
  options:["Park Jimin","Min Yoongi","Jeon Jungkook","Kim Namjoon"],
  question:"Which BTS member gave a speech at the launch of Unlimited, at the UN General Assembly?",
  answer:"Kim Namjoon"
},{
  options:["BE","Mono","Hope World","Persona"],
  question:"Which BTS album is based on the book 'Jung’s Map Of The Soul: An Introduction'",
  answer:"Persona"
}];

function playQuiz(optionsList,question,answer){
  var userAnswer = readlineSync.keyInSelect(optionsList,ques(question));

  if(optionsList[userAnswer] === answer || userAnswer == answer){
    
    console.log(right("Yay!!!Correct Answer"));
    userScore = userScore + 1;
  }else{
    console.log(error("Sorry.Wrong Answer"));
    console.log(chalk.yellow("The correct answer is "+answer));
    userScore = userScore + 0;
  }
}

for(var i=0;i<quizQuestions.length;i++){

  var currentQuestion = quizQuestions[i];
  playQuiz(currentQuestion.options,currentQuestion.question,currentQuestion.answer);

}
console.log(chalk.underline.bold.red("Your score is "+userScore));

console.log("Let's check who's leading...");

var topRankers = [{
  name:"Drikpriya",
  score:9
},{
  name:"Strishti",
  score:8
}];

function checkRank(userName,userScore){
var tempName = userName;
var tempScore = userScore;
for(var i=0;i<topRankers.length;i++){
  var currentUser = topRankers[i];
  if(currentUser.score<tempScore){
    tempName = tempName;
    tempScore = tempScore;
  
  }else{
    tempName = currentUser.name;
    tempScore = currentUser.score;
  }
}

return tempName;
}

var str = checkRank(userName,userScore);
console.log(chalk.bold.yellow(str +" has the highest score."));







