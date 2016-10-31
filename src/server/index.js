/* eslint-disable no-console */

import Dog from '../shared/dog';

const str = 'es6';
console.log(`Hello ${str}`);

// const Dog   = require('./dog');
// const toby  = new Dog('Toby');
//
// console.log(toby.bark('Woof'));
// console.log(toby.bark('Bark Bark'));

const toby = new Dog('Toby');

console.log(toby.bark('Woof'));
console.log(toby.bark('Bark Bark'));
