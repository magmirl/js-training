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
function jadencase (str){
    return str.charAt(0).toUpperCase()+str.slice(1);
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadencase("pomme"), "Pomme")
// End of tests */
