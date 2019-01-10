'use strict';
var count = 0;

alert('Welcome to my page! Take a little quiz about me');

var name = prompt('What is your name?');
console.log('user name', name);
document.getElementById('name').innerHTML = name;

// Question 1

 var age = prompt('First Question! How old am I?');
 console.log('my age:', age);

 if (age === '24' || age === 'Twenty four') {
     alert('You are correct');
     document.getElementById('one').innerHTML = 'Your Answer: ' + age;
     document.getElementById('one').style.color = 'green';
     count++;
 } else {
    alert('Wrong! I am 24');
     document.getElementById('one').innerHTML = 'Your Answer: ' + age;
     document.getElementById('one').style.color = 'red';
 }

// Question 2

 var pizza = prompt('Second Question! Do I like pineapples on my pizza?').toUpperCase();
    console.log('pizza:', pizza);

 if (pizza === 'NO' || pizza === 'N') {
    alert('You are correct');
     document.getElementById('two').innerHTML = 'Your Answer: ' + pizza;
     document.getElementById('two').style.color = 'green';
     count++;
 } else {
    alert('Wrong! That is gross');
     document.getElementById('two').innerHTML = 'Your Answer: ' + pizza;
     document.getElementById('two').style.color = 'red';
 }

// Question 3

var countries = prompt('Third Question! How many countries do you think I have been to?');
console.log('number of countries:', countries);

if (countries === '45') {
    alert('You are correct');
    document.getElementById('three').innerHTML = 'Your Answer: ' + countries;
    document.getElementById('three').style.color = 'green';
    count++;
 } else {
    alert('Wrong! I have been to 45 countries');
    document.getElementById('three').innerHTML = 'Your Answer: ' + countries;
    document.getElementById('three').style.color = 'red';
}

// Question 4

 var moto = prompt('Fourth Question! Do I drive a motorcycle?').toUpperCase();
    console.log ('motorcycle', moto);

 if (moto === 'YES' || moto === 'Y') {
    alert('You are correct! His name is Dulahan');
     document.getElementById('four').innerHTML = 'Your Answer: ' + moto;
     document.getElementById('four').style.color = 'green';
     count++;
 } else {
    alert('Wrong! I love my motorcycle');
     document.getElementById('four').innerHTML = 'Your Answer: ' + moto;
     document.getElementById('four').style.color = 'red';
 }

// Question 5

 var last = prompt('Fifth Question! Would you like to know more?').toUpperCase();
    console.log ('more', last);

 if (last === 'YES' || last === 'Y') {
    alert('Well then strap in!');
     document.getElementById('five').innerHTML = 'Your Answer: ' + last;
     document.getElementById('five').style.color = 'green';
     count++;
 } else {
     alert('Too bad! There is more')
     document.getElementById('five').innerHTML = 'Your Answer: ' + last;
     document.getElementById('five').style.color = 'red';
 }

// Question 6

    var min=1; 
    var max=10;  
    var random =Math.floor(Math.random() * 10);

for (var i = 4; i > 0 ; i--) {
    var x = parseInt(prompt('Guess a number between one and ten.'));
    console.log('number guessed', x);
    if (x === random) {
        alert('That is correct')
        document.getElementById('six').innerHTML = 'Your answer: ' + x;
        document.getElementById('six').style.color = 'green';
         count++;
        break;
    }
    if (x > random) {
        alert('Too high')
    }
    if (x < random) {
        alert('Too low')
    }
}

// Question 7

var answ = ['apples', 'bananas', 'pears', 'oranges']

for (var i = 6; i > 0 ; i--) {
    var y = prompt('What kind of fruit do I like? You have '+ i +' attempts left.').toLowerCase();
    console.log('fruit guessed', y);

for (var c = 0; c < answ.length; c++){
console.log('answers', answ[c]);
    if(y === answ[c]) {
        alert('That is correct! Here are all the fruits I like: apples, bananas, pears and oranges');
        document.getElementById('seven').innerHTML = 'Your answer: ' + y;
        document.getElementById('seven').style.color = 'green';
        count++;
        i=0;
    }
}
}


alert('Congragts'+ name +' You got ' + count + ' out of 7 correct!')
