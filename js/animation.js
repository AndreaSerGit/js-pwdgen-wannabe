var name = prompt('qual è il tuo nome?');
console.log(name)

var surname = prompt('qual è il tuo cognome?');
console.log(surname)

var color = prompt('qual è il tuo colore preferito?');
console.log(color)

var password = name + surname + color;
console.log(password)

document.getElementById('password').innerHTML = password;
