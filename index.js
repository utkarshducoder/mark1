var readlineSync= require("readline-sync");
var score = 0;
const chalk = require('chalk');

let log = console.log

let blueBright = chalk.bold.blueBright
let green = chalk.bold.green
let red = chalk.bold.red
let cyan = chalk.bold.cyan
let yellow = chalk.bold.yellow 
let title = chalk.black.bold.bgYellow
let white = chalk.white.bold.underline

log(blueBright('Hey guys let us know how much you know about', chalk.underline.bgGreenBright('Utkarsh Gupta!\n')));

var userName = readlineSync.question(log(red("may I have your name?" + " ")));

log(green("hello" +" " + userName))



log(blueBright('Keep in mind these intructions lets start with how much you know about',title ('Utkarsh Gupta!\n')))

log(green('Here', 'is', 'the', 'first', 'question\n'));

var questionBank = [{
  question: `The first case of novel coronavirus was identified in .....
    a: Beijing
    b: Shanghai
    c: Wuhan, Hubei
    d: Tianjin\n`,
      answer: "c"},
{
  question: `Which of the following diseases are related to coronavirus?
    a: MERS
    b: SARS
    c: Both A and B
    d: Neither A nor B\n`,
      answer: "c"},


{
  question: `In India, when did the second phase of COVID-19 vaccination start?
    a: December 2020
    b: January 2021
    c: February 2021
    d: March 2021\n`,
      answer: "d"},
{
  question: `Name a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition?
    a: Plasma Therapy
    b: Hydroxychloroquine
    c: Remdesivir
    d: Solidarity\n`,
      answer: "a"},
 {
   question: `When was the COVID-19 vaccine launched in India?
    a: 25th December, 2020
    b: 16th January, 2021
    c: 1st February, 2021
    d: 12th March, 2021\n`,
      answer: "b"},
 {
   question: `During covid-19 which state suffered most in India?
    a: Rajasthan
    b: Kerala
    c: Maharashtra
    d: Karnataka\n`,
      answer: "c"},
];


 


function play(question,answer){
 
userAnswer = readlineSync.question(red(question+"\n"));

if(userAnswer.toUpperCase() === answer.toUpperCase()){
console.log("you were right!");
score = score + 4;

}
else{
  console.log("you were wrong");
 
  score = score - 2;
}
console.log("your score is :", score);


} 





for( var i = 0; i<questionBank.length; i++)
{
 var cur= questionBank[i];
 play(cur.question,cur.answer);
 console.log(" ");
 console.log(chalk.yellow("*-*-*-*-*-*-*-*-*-*-*-*-*-*"));

}

log(cyan("THE END"))
log(green("Thank you for spending your valuable time"), red("I hope you like this game"))
