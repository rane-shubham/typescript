var naem = "Shubham";
console.log(naem);
//arrays
var array = ['alpha', 'beta', 'gamma'];
console.log(array);
//add fourth element to the array
array.push('zeta');
console.log(array);
//Print all elements of an array
array.forEach(function (val) { return console.log(val); });
//objects
var objects = {
    name: 'Tobyy',
    gender: 'Male',
    age: 23
};
console.log(objects);
//union types
var mixed = [];
mixed.push('Jade');
mixed.push(23);
mixed.push(true);
console.log(mixed);
