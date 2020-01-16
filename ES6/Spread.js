var line1 = ['Amature', 'artificial', 'arnt at'];
var line2 = ['hello', 'hi', 'hey'];

var fullLine = [...line1, ...line2, 'Dog', 'Cow'];

console.log(...line1);
console.log(...line2);
console.log(...fullLine);


sentence = function (animal, bird) {
    console.log('This is a '+animal +' This is a '+bird);
}

sentence('Cow', 'Pakhi');

args = ['Dog', 'Harming'] 

// sentence(args);      //one arg should be undifained

sentence(...args) 