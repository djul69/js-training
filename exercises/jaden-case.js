'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

//code

function jadenCase(texte){
    const arrayOfStrings = texte.split(" ");
    const newArray =  arrayOfStrings.map(element=>element.substr(0,1).toUpperCase().concat(element.substr(1,element.length).toLowerCase()));
    return newArray.join(" ");
}

//* Begin of tests
const assert = require('assert');
assert.strictEqual(jadenCase(""), "");
assert.strictEqual(jadenCase("2"), "2");
assert.strictEqual(jadenCase("How are you ?"), "How Are You ?");
assert.strictEqual(jadenCase("how Are You ?"), "How Are You ?");
assert.strictEqual(jadenCase("HoW aRe yOu ?"), "How Are You ?");
// End of tests */
