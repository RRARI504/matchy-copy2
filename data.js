/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};

animal.species = 'Dog';
animal['name'] = 'Rex'
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises[0] = 'bark';
noises.push('meow');
noises.unshift('hiss');
noises.splice(1, 0, 'purr');

console.log(noises.length)
console.log(noises.length - 1)
console.log(noises)


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal.noises = noises
noises.push('BRrr')
console.log(animal)


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal)
console.log(animals)

let duck = { 
  species: 'duck',
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh'] 
}
animals.push(duck);
console.log(animals);

let rooster = {
  species: 'rooster',
  name: 'RIDER',
  noises: ['CockAdoodle', 'wakeuP', 'CRRRR']
}

let rat = {
  species: 'rat',
  name: 'ashlee',
  noises: ['AHH', "Ya moma", 'BArk']
}

animals.push(rooster, rat);
console.log(animals);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//a good data structure for list is an array

var friends = [];//empty array for friends 
function getRandom(animals){ //funtion that gets random index of animals array
  return Math.floor(Math.random() * animals.length);
  //math.random gets a random number between 1 and 10 
  //math.floor rounds number to nearest integer
  // Combining these functions allows generating random integers within a specific range. 
}

let ranD = getRandom(animals)
//set variable equal to invokation of the getRandom function with our animals array as a parameter
friends.push(animals[ranD].name)
//push the result of the random animals name to the output
console.log(friends)

animals[ranD]['friends'] = friends
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}