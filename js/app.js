'use strict';

// var score = 0;
// alert(score++); for each question 

var userName = prompt('What is your name?');
console.log(userName);

function questionOne() {
  var greetUser = prompt('Hello,' + userName + '. Are your ready to play a game?');

  if (greetUser.toLowerCase() === 'yes') {
    alert('You chose wisely');
  } else if (greetUser.toLowerCase() === 'no') {
    alert('You chose poorly');
  } else {
    alert('You are going to play this game wether you like it or not');
  }
}
questionOne();

function questionTwo() {
  var natalieAge = prompt('Is Natalie 27 years old?');
  // console.log(natalieAge);

  if (natalieAge.toLowerCase() === 'yes') {
    alert('You are correct!');
  } else if (natalieAge.toLowerCase() === 'no') {
    alert('You are incorrect');
  } else {
    alert('Please add a numerical answer');
  }
}
questionTwo();

function questionThree() {
  var hairColor = prompt('Is Natalies hair color blue?');
  // console.log(hairColor);

  if (hairColor.toLowerCase() === 'yes') {
    alert('You are incorrect');
  } else if (hairColor.toLowerCase() === 'no') {
    alert('That is correct, I have brown hair');
  } else {
    alert('Please answer with yes or no');
  }
}
questionThree();

function questionFour() {
  var likeWine = prompt('Does Natalie like wine?');
  // console.log(likeWine);

  if (likeWine.toLowerCase() === 'yes') {
    alert('That is correct, I like red and white wines');
  } else if (likeWine.toLowerCase() === 'no') {
    alert('What are you talkin bout Willis, I LOVE wine!');
  } else {
    alert('Please answer with yes or no');
  }
}
questionFour();

function questionFive() {
  var doesCrossFit = prompt('Does Natalie workout?');
  // console.log(doesCrossFit);

  if (doesCrossFit.toLowerCase() === 'yes') {
    alert('Correct, Natalie enjoys CrossFit');
  } else if (doesCrossFit.toLowerCase() === 'no') {
    alert('You are incorrect');
  } else {
    alert('Please answer with yes or no');
  }
}
questionFive();

function questionSix() {
  var vehicleType = prompt('Does Natalie drive a Mini Cooper?');
  // console.log(vehicleType);

  if (vehicleType.toLowerCase() === 'yes') {
    alert(userName + ' Correct! My Mini Cooper is named Sheldon');
  } else if (vehicleType.toLowerCase() === 'no') {
    alert(userName + ' You have been tricked, the vehicle that I am driving to school is my mothers');
  } else {
    alert(userName + ' Please answer with yes or no');
  }
}
questionSix();


// var endMessage = prompt('Thanks for playing ' + userName);
// console.log(endMessage);

function questionSeven() {
  var tries = 0;

  while (tries < 4) {
    var numericalAnswer = prompt('How many states has Natalie lived in?');
    //   console.log('numerical answer for states lived in ' + numericalAnswer);

    if (numericalAnswer === '2'){
      alert('That is correct! Washington and North Carolina.');
      tries = 10;
    } else if (numericalAnswer < 2 ) {
      alert('Number too low');
      tries++;
    } else {
      alert('Number too high');
      tries++;
    }
  }

  if (tries === 4){
    alert('The correct answer is 2');
  }
}
questionSeven();


// var statesBeen = [Oregon, California, Idaho, Montana, South Dakota, Wyoming, Utah, Nebraska, Kansas, Iowa, Minnesota, Wisconsin, Illinios, 
// Missouri, Indiana, Michigan, Ohio, Kentucky, Tennessee, Alabama, Georgia, South Carolina, North Carolina, Virginia, West Virginia]


function questionEight() {
  var states = ['oregon', 'california', 'idaho', 'montana', 'south dakota', 'ohio'];
  // console.log(states);


  var fails = 0;

  // while (fails < 6) {
  for (var x = 0; x < 6; x++){
    var stateName = prompt('Guess what states Natalie has been too?');
    console.log('State guess ' + stateName);

    for ( var i = 0; i < states.length; i++) {
      if (stateName.toLowerCase() === states[i]) {
        alert('You answered correctly');
        console.log('correct');
        break;
      // fails === 0; 
      } else if (stateName.toLowerCase() !== states[i]) {
        alert('You answered incorrectly, please try again');
        console.log('incorrect');
      // fails === 1;
      }
    }
  // fails++;
  }


  // for (var x = 0; x < 6; x++)
  // var stateName = prompt('Guess what states Natalie has been too?');

}
questionEight();


// alert(score);

// for ( var i = 0; i < 6; i++) {
//   var statesBeen = prompt('What states has Natalie been too?');
//   console.log(states[i]);
// }

// if (states.toLowerCase() === 'Oregon', 'California', 'Idaho', 'Montana') {
//     alert('You are correct!');
// } else {
//     alert('no');
// }


