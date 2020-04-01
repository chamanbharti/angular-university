const name = 'Chaman';//+'Bharti';
console.log(name);
const classicString = 'Line One\n' +
    'Line Two\n' +
    'Line Three. Hello '+ name + '!';
console.log(classicString);
console.log('Back-ticked strings');
const backtickedString = `Line One
    Line Two
    Line Three. Hello ${name}!`;
console.log(backtickedString);
console.log('Five plus seven is 12 using stirng interpolation ');
const expressionString = `Five plus seven is ${5 + 7}`;
console.log(expressionString);
