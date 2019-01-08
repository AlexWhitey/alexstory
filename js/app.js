var age = prompt('First Question! How old am I?');
console.log('my age:', age);

if (age === '24' || age === 'Twenty four') {
    document.getElementById("one").innerHTML = "Thats correct!";
} else {
    alert('Thats wrong')
}
