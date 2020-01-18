'use strict';

// var userName = prompt('What is your name?');
// console.log(userName);

// var greetUser = prompt('Hello,' + userName + '. Are your ready to play a game?');

// if (greetUser.toLowerCase() === 'yes') {
//   alert('You chose wisely');
// } else if (greetUser.toLowerCase() === 'no') {
//   alert('You chose poorly');
// } else {
//   alert('You are going to play this game wether you like it or not');
// }

// var natalieAge = prompt('Is Natalie 27 years old?');
// // console.log(natalieAge);

// if (natalieAge.toLocaleLowerCase() === 'yes') {
//   alert('You are correct!');
// } else if (natalieAge.toLocaleLowerCase() === 'no') {
//   alert('You are incorrect');
// } else {
//   alert('Please add a numerical answer');
// }

// var hairColor = prompt('Is Natalies hair color blue?');
// // console.log(hairColor);

// if (hairColor.toLowerCase() === 'yes') {
//   alert('You are incorrect');
// } else if (hairColor.toLowerCase() === 'no') {
//   alert('That is correct, I have brown hair');
// } else {
//   alert('Please answer with yes or no');
// }

// var likeWine = prompt('Does Natalie like wine?');
// // console.log(likeWine);

// if (likeWine.toLowerCase() === 'yes') {
//   alert('That is correct, I like red and white wines');
// } else if (likeWine.toLowerCase() === 'no') {
//   alert('What are you talkin bout Willis, I LOVE wine!');
// } else {
//   alert('Please answer with yes or no');
// }

// var doesCrossFit = prompt('Does Natalie workout?');
// // console.log(doesCrossFit);

// if (doesCrossFit.toLowerCase() === 'yes') {
//   alert('Correct, Natalie enjoys CrossFit');
// } else if (doesCrossFit.toLowerCase() === 'no') {
//   alert('You are incorrect');
// } else {
//   alert('Please answer with yes or no');
// }

// // var vehicleType = prompt('Does Natalie drive a Mini Cooper?');
// // console.log(vehicleType);

// // if (vehicleType.toLowerCase() === 'yes') {
//   alert(userName + ' Correct! My Mini Cooper is named Sheldon');
// } else if (vehicleType.toLowerCase() === 'no') {
//   alert(userName + ' You have been tricked, the vehicle that I am driving to school is my mothers');
// } else {
//   alert(userName + ' Please answer with yes or no');
// }

// var endMessage = prompt('Thanks for playing ' + userName);
// console.log(endMessage);

// var numericalAnswer = prompt('How many states has Natalie lived in?');
console.log(numericalAnswer);

var tries = 0;

while (tries < 4) {
    var numericalAnswer = prompt('How many states has Natalie lived in?');
    // console.log('answer less then 2');

    if (numericalAnswer === 2) {
        alert('you win');
        tries = 10; 
    } else {
        alert('wrong');
     tries++;
    }

if (numericalAnswer === 2 ) {
  alert('That is correct! Washington and North Carolina.');
} else if (numericalAnswer < 2 ) {
  alert('too low');
} else { (numericalAnswer > 2);
  alert('too high');
}


