  const chalk = require('chalk');
  const log = console.log;
  const readline = require('readline');
  var score = 0;
  var letterNumber =  /^[0-9a-zA-Z]+$/;
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

    log(chalk.green(
	'Hello people Get ready for a small quiz on' +
	chalk.underline.red.bold(' coronavirus ')

));

 
log(chalk.green('Only', chalk.underline.red.bold('small and capital letters ') + ' can be used for answering the questions\n\n'));

log(chalk.green('This quiz will let you know how much you know about', chalk.green.underline.bgRed('Covid-19\n')));


 log(chalk.green(
	'I hope you will' +
	chalk.red.bold(' enjoy!! ') + ''

));
 
  //log("I hope you will enjoy this!!\n");

  log(chalk.green(
	'For a wrong answer you will get the' +
	chalk.red.bold(' same question\n\n ')

));





  const questionBankk = [
  {
      question: `
    The first case of novel coronavirus was identified in .....
    a: Beijing
    b: Shanghai
    c: Wuhan, Hubei
    d: Tianjin\n`,
      answer: "c"
    },
    {
      question: `
    Which of the following diseases are related to coronavirus?
    a: MERS
    b: SARS
    c: Both A and B
    d: Neither A nor B\n`,
      answer: "c"
    },
    {
      question: `
    In India, when did the second phase of COVID-19 vaccination start?
    a: December 2020
    b: January 2021
    c: February 2021
    d: March 2021\n`,
      answer: "d"
    },
    {
        question: `
    Name a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition?
    a: Plasma Therapy
    b: Hydroxychloroquine
    c: Remdesivir
    d: Solidarity\n`,
      answer: "a"
    },
    {
        question: `
    When was the COVID-19 vaccine launched in India?
    a: 25th December, 2020
    b: 16th January, 2021
    c: 1st February, 2021
    d: 12th March, 2021\n`,
      answer: "b"
    },
    {
      question: `
    During covid-19 which state suffered most in India?
    a: Rajasthan
    b: Kerala
    c: Maharashtra
    d: Karnataka\n`,
      answer: "c"
    }
  ];

  let qkI = 0;

  function question(){
    rl.question(questionBankk[qkI].question, (answer) => {
      

      
      //console.log(`You answered: ${answer}`);

      if(answer.toLowerCase() == questionBankk[qkI].answer.toLowerCase()) {
       
       log(chalk.green('right' , 'answer'));
       
       //console.log("right answer");
        qkI++;
        score = score+1;
        console.log(score);
        
        
        serve();
      }
      else{

        log(chalk.red('wrong' , 'answer'));
        //console.log("wrong answer");
 
      log(chalk.green('Answers only varies from', chalk.red.bold('a to d either in capital or small\n\n ')));

        //console.log("Answers only varies from a to d either in capital or in small");
        question();
      }
    });
  }
  function serve()
  {
    if(isQuestionBankExhausted()) {
      
      log(chalk.green('Thanks for playing and spending your valuable time'));
      
      //console.log("Thanks for playing and spending your valuable time");
        
               log(chalk.blue('I hope you enjoy this game'));

         log(chalk.green('Your', chalk.red(' final score ') + 'is'));
      

      //console.log("Your final score is");
      console.log(score);
      rl.close();
    }
    else{
      
     
      
      
      
     rl.question("What do you want to do? \nto play then press any key, want to quit then press e", (choice) => {
       
        log(chalk.red('You', 'selected'));

       console.log(`${choice}`);

        if( choice.toLowerCase() !=="e"){
          question();
          
        }
        else{
          
          log(chalk.green('Thanks for playing and spending your valuable time'));
      
          
          //console.log("Thanks for playing");
           log(chalk.blue('I hope you enjoy this game'));
          //log("I hope you enjoy this game");
        
        log(chalk.green('Your', chalk.red(' final score ') + 'is'));
        
        //log("Your final score is");
        console.log(score);
          rl.close();
        }
      });
    }
  }

  function isQuestionBankExhausted() {
    if (questionBankk.length == qkI) {
      return true;
    }
  }

  serve();



