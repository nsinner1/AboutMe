'use strict';

var userName = prompt('What is your name');
console.log(userName);

var natalieAge = prompt('Is Natalie 27 years old?');

if (natalieAge.toLocaleLowerCase() === 'yes') {
  alert('You are correct!');
} else if (natalieAge.toLocaleLowerCase() === 'no') {
  alert('You are incorrect');
} else {
  alert('Please add a numerical answer');
}

var hairColor = prompt('Is Natalies hair color blue?');

if (hairColor.toLowerCase() === 'yes') {
  alert('You are incorrect');
} else if (hairColor.toLowerCase() === 'no') {
  alert('That is correct, my hair color is brown');
} else {
  alert('Please answer with yes or no');
}
