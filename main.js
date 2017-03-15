'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: ( arr, base ) => {
    return arr.reduce( ( ( a, b ) => a + b ), base )
  },

  someObjsContainProp: ( arr, prop ) => {
    return arr.some( function( i ) {
      return i.hasOwnProperty( prop )
    } )
  },

  convertNameArrayToObject: ( arr ) => {
    return arr.map( function( element ) {
      let obj = {};
      obj.first = element[ 0 ];
      obj.last = element[ 1 ];
      return obj
    } )
  },

  objContainsProp: ( arr, prop ) => {
    return arr.every( function( i ) {
      return i.hasOwnProperty( prop )
    } )
  },

  stringMatch: ( arr, str ) => {
    return arr.filter( function( element ) {
      return element.includes( str )
    } )
  },
};
