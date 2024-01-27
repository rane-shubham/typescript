let naem:string = "Shubham";
console.log(naem);

//arrays
let array = ['alpha','beta','gamma'];
console.log(array);

//add fourth element to the array
array.push('zeta');
console.log(array);

//Print all elements of an array
array.forEach(val => console.log(val));

//objects
let objects = {
    name: 'Tobyy',
    gender: 'Male',
    age: 23
};
console.log(objects);

//union types
let mixed: (string|number|boolean)[] = []
mixed.push('Jade');
mixed.push(23);
mixed.push(true);
console.log(mixed);