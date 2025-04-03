/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//const { animal } = require("./data");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: an array representing animals and a string representing the name of 
//an animal on which to perform a search.
//O: should be the animal's Object if an animal with that name exists. 
//Returns `null` if no animal with that name exists


function search(animals, string){
    for(var i = 0; i < animals.length; i++){//iterate through the forloop
        if(animals[i].name === string){//if the current iterations name is equal to the string
            return animals[i];//returns the animals object name instanly
        }
    }
    return null;//else return null

}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement){
    for(var i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            animals[i] = replacement;
        } 
    }
};

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name){
     for(var i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            animals.splice(animals[i], 1)
        }
     }

};

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal){
    if(animal.name > 0){
        //animal.name checks the animal object for a 'name' property

    }
    
   

}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}