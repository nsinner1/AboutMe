'use strict';

var userName = prompt('What is your name?');
console.log(userName);

var natalieAge = prompt('Is Natalie 27 years old?');
// console.log(natalieAge);

if (natalieAge.toLocaleLowerCase() === 'yes') {
  alert('You are correct!');
} else if (natalieAge.toLocaleLowerCase() === 'no') {
  alert('You are incorrect');
} else {
  alert('Please add a numerical answer');
}

var hairColor = prompt('Is Natalies hair color blue?');
// console.log(hairColor);

if (hairColor.toLowerCase() === 'yes') {
  alert('You are incorrect');
} else if (hairColor.toLowerCase() === 'no') {
  alert('That is correct, I have brown hair');
} else {
  alert('Please answer with yes or no');
}

var likeWine = prompt('Does Natalie like wine?');
// console.log(likeWine);

if (likeWine.toLowerCase() === 'yes') {
  alert('That is correct, I like red and white wines');
} else if (likeWine.toLowerCase() === 'no') {
  alert('What are you talkin bout Willis, I LOVE wine!');
} else {
  alert('Please answer with yes or no');
}

var doesCrossFit = prompt('Does Natalie workout?');
// console.log(doesCrossFit);

if (doesCrossFit.toLowerCase() === 'yes') {
  alert('Correct, Natalie enjoys CrossFit');
} else if (doesCrossFit.toLowerCase() === 'no') {
  alert('You are incorrect');
} else {
  alert('Please answer with yes or no');
}

var vehicleType = prompt('Does Natalie drive a Mini Cooper?');
// console.log(vehicleType);

if (vehicleType.toLowerCase() === 'yes') {
  alert('Correct! My Mini Cooper is named Sheldon');
} else if (vehicleType.toLowerCase() === 'no') {
  alert('You have been tricked, the vehicle that I am driving to school is my mothers');
} else {
  alert('Please answer with yes or no');
}

