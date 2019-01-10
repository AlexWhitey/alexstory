'use strict';
var count = 0;

alert('Welcome to my page! Take a little quiz about me');

var name = prompt('What is your name?');
console.log('user name', name);
document.getElementById('name').innerHTML = name;

 var age = prompt('First Question! How old am I?');
 console.log('my age:', age);

 if (age === '24' || age === 'Twenty four') {
     document.getElementById('one').innerHTML = 'Thats correct!';
     document.getElementById('one').style.color = 'green';
     count++;
 } else {
     document.getElementById('one').innerHTML = 'Thats wrong!';
     document.getElementById('one').style.color = 'red';
 }

 var pizza = prompt('Second Question! Do I like pineapples on my pizza?').toUpperCase();
    console.log('pizza:', pizza);

 if (pizza === 'NO' || pizza === 'N') {
     document.getElementById('two').innerHTML = 'Thats correct!';
     document.getElementById('two').style.color = 'green';
     count++;
 } else {
     document.getElementById('two').innerHTML = 'Thats wrong!';
     document.getElementById('two').style.color = 'red';
 }

var countries = prompt('Third Question! How many countries do you think I have been to?');
console.log('number of countries:', countries);

if (parseInt(countries) >= 40 && parseInt(countries) < 45 || parseInt(countries) > 45 && parseInt(countries) <= 50) {
    document.getElementById('three').innerHTML = 'Thats close!';
} 
else if (countries === '45') {
    document.getElementById('three').innerHTML = 'Thats correct!';
    document.getElementById('three').style.color = 'green';
    count++;
 } else {
    document.getElementById('three').innerHTML = 'Thats wrong!';
    document.getElementById('three').style.color = 'red';
}

 var moto = prompt('Fourth Question! Do I drive a motorcycle?').toUpperCase();
    console.log ('motorcycle', moto);

 if (moto === 'YES' || moto === 'Y') {
     document.getElementById('four').innerHTML = 'Thats correct!';
     document.getElementById('four').style.color = 'green';
     count++;
 } else {
     document.getElementById('four').innerHTML = 'Thats wrong!';
     document.getElementById('four').style.color = 'red';
 }

 var last = prompt('Fifth Question! Would you like to know more?').toUpperCase();
    console.log ('more', last);

 if (last === 'YES' || last === 'Y') {
     document.getElementById('five').innerHTML = 'Well then strap in!';
     document.getElementById('five').style.color = 'green';
     count++;
 } else {
     document.getElementById('five').innerHTML ='Too bad! There is more!';
     document.getElementById('five').style.color = 'red';
 }


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





var answ = ['apple', 'banana', 'pear', 'orange']

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
