let userName = 'Daiyaan'
const userQuestion = 'will i have a happy life?'
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = ''

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
console.log(`${userQuestion}`);

switch (randomNumber) {
  case 0:
    eightball = 'It is certain'
    break;
  case 1:
    eightball = 'It is decidedly so'
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    break;
}

console.log(eightBall);
