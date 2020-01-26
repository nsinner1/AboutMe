// 'use strict';

// var score = 0;

// var userName = prompt('What is your name?');
// console.log(userName);

// function questionOne() {
//   var greetUser = prompt('Hello,' + userName + '. Are your ready to play a game?');

//   if (greetUser.toLowerCase() === 'yes') {
//     alert('You chose wisely');
//   } else if (greetUser.toLowerCase() === 'no') {
//     alert('You chose poorly');
//   } else {
//     alert('You are going to play this game wether you like it or not');
//   }
// }
// questionOne();

// function questionTwo() {
//   var natalieAge = prompt('Is Natalie 27 years old?');

//   if (natalieAge.toLowerCase() === 'yes') {
//     score ++;
//     alert('You are correct!');
//   } else if (natalieAge.toLowerCase() === 'no') {
//     alert('You are incorrect');
//   } else {
//     alert('Please add a numerical answer');
//   }
// }
// questionTwo();

// function questionThree() {
//   var hairColor = prompt('Is Natalies hair color blue?');

//   if (hairColor.toLowerCase() === 'yes') {
//     alert('You are incorrect');
//   } else if (hairColor.toLowerCase() === 'no') {
//     score ++;
//     alert('That is correct, I have brown hair');
//   } else {
//     alert('Please answer with yes or no');
//   }
// }
// questionThree();

// function questionFour() {
//   var likeWine = prompt('Does Natalie like wine?');

//   if (likeWine.toLowerCase() === 'yes') {
//     score ++;
//     alert('That is correct, I like red and white wines');
//   } else if (likeWine.toLowerCase() === 'no') {
//     alert('What are you talkin bout Willis, I LOVE wine!');
//   } else {
//     alert('Please answer with yes or no');
//   }
// }
// questionFour();

// function questionFive() {
//   var doesCrossFit = prompt('Does Natalie workout?');

//   if (doesCrossFit.toLowerCase() === 'yes') {
//     score ++;
//     alert('Correct, Natalie enjoys CrossFit');
//   } else if (doesCrossFit.toLowerCase() === 'no') {
//     alert('You are incorrect');
//   } else {
//     alert('Please answer with yes or no');
//   }
// }
// questionFive();

// function questionSix() {
//   var vehicleType = prompt('Does Natalie drive a Mini Cooper?');

//   if (vehicleType.toLowerCase() === 'yes') {
//     score ++;
//     alert(userName + ' Correct! My Mini Cooper is named Sheldon');
//   } else if (vehicleType.toLowerCase() === 'no') {
//     alert(userName + ' You have been tricked, the vehicle that I am driving to school is my mothers');
//   } else {
//     alert(userName + ' Please answer with yes or no');
//   }
// }
// questionSix();

// function questionSeven() {
//   var tries = 0;

//   while (tries < 4) {
//     var numericalAnswer = prompt('How many states has Natalie lived in?');

//     if (numericalAnswer === '2'){
//       score ++;
//       alert('That is correct! Washington and North Carolina.');
//       tries = 10;
//     } else if (numericalAnswer < 2 ) {
//       alert('Number too low');
//       tries++;
//     } else {
//       alert('Number too high');
//       tries++;
//     }
//   }

//   if (tries === 4){
//     alert('The correct answer is 2');
//   }
// }
// questionSeven();


// var tries = 6;
// var statesBeen = 6;
// var states = ['oregon', 'california', 'idaho', 'montana', 'south dakota', 'ohio'];

// function questionEight() {
//   do{
//     var stateName = prompt('Guess what states Natalie has been too?');
//     if(states.includes(stateName.toLowerCase())){
//       score ++;
//       states = true;
//       alert('You answered correctly');
//       console.log('correct');
//     }else{
//       statesBeen --;
//       if(statesBeen < 1)
//         break;
//       alert('Sorry' + ' I have not been to ' + stateName.toLowerCase());
//     }
//   }while(statesBeen < 6);
// }
// questionEight();

// if (tries === 6){
//   alert('The correct answers are Oregon, California, Idaho, Montana, South Dakota, and Ohio.');
// }

// alert('You have correctly answered ' + score + ' questions!');



