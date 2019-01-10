'use strict';

var name = prompt('What is your name?');
console.log('user name', name);
document.getElementById('name').innerHTML = name;

 var age = prompt('First Question! How old am I?');
 console.log('my age:', age);

 if (age === '24' || age === 'Twenty four') {
     document.getElementById('one').innerHTML = 'Thats correct!';
     document.getElementById('one').style.color = 'green';
 } else {
     document.getElementById('one').innerHTML = 'Thats wrong!';
     document.getElementById('one').style.color = 'red';
 }

 var pizza = prompt('Second Question! Do I like pineapples on my pizza?').toUpperCase();
    console.log('pizza:', pizza);

 if (pizza === 'NO' || pizza === 'N') {
     document.getElementById('two').innerHTML = 'Thats correct!';
     document.getElementById('two').style.color = 'green';
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
 } else {
    document.getElementById('three').innerHTML = 'Thats wrong!';
    document.getElementById('three').style.color = 'red';
}

 var moto = prompt('Fourth Question! Do I drive a motorcycle?').toUpperCase();
    console.log ('motorcycle', moto);

 if (moto === 'YES' || moto === 'Y') {
     document.getElementById('four').innerHTML = 'Thats correct!';
     document.getElementById('four').style.color = 'green';
 } else {
     document.getElementById('four').innerHTML = 'Thats wrong!';
     document.getElementById('four').style.color = 'red';
 }

 var last = prompt('Fifth Question! Is this the last question?').toUpperCase();
    console.log ('last', last);

 if (last === 'YES' || last === 'Y') {
     document.getElementById('five').innerHTML = 'It is!';
     document.getElementById('five').style.color = 'green';
 } else {
     document.getElementById('five').innerHTML ='Sadly it is, but say hello if you want to know!';
     document.getElementById('five').style.color = 'red';
 }
