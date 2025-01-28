const string = document.getElementById('press-quote');
const myArray = ['NAPS is by far the most significant cultural force of the decade. — New York Times', 'Siestas: The secret ingredient to a happier, more productive life.', 'Embrace the power of rest—because even the busiest minds need a timeout.'];
const number = Math.floor(Math.random() * 3);
string.innerHTML = myArray[number];
