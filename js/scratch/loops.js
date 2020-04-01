// for loop
const names = ['Rahi', 'Chaman','Nasrin', 'Sahil','Aman', 'Naman'];
console.log('For Loop');
for (let i=0;i<names.length;i++){
    console.log(names[i]);
}
// For of loop
console.log('for…of — loops over iterable objects such as arrays, strings, etc.');
for (let name of names){
    console.log(name);
}

// For in loop
console.log('for…in — loops through the properties of an object\nprinting index based');
for (let name in names){
   // console.log(name);
    console.log(names[name]);
}
console.log('while loop');
let counter = 10;
while (counter > 0){
    counter--;
    console.log(counter);
}
console.log('do..while loop');
counter = 0;
do{
    counter--;
    console.log(counter);
}while (counter > 0);
