'use strict';

var userName = prompt('What is your name');
console.log(userName);

var natalieAge = prompt('Is Natalie 27 years old?');

if (natalieAge.toLocaleLowerCase() === 'yes') {
  alert('You are correct!');
} else if (natalieAge.toLocaleLowerCase() === 'no') {
  alert('You are wrong');
} else {
  alert('Something wrong');
}

