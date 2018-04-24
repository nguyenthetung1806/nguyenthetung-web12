'use strict'

function sort(input) {
  if (input.length === 0){
    return input = [];
  } else {

  var  left = [],
       right = [],
       pivot = input[input.length - 1];

   for (var i = input.length - 2; i >= 0; i--) {
      if(input[i] < pivot){
        left.push(input[i]);
      } else  {
        right.push(input[i]);
      }
   }

   return sort(left).concat(pivot, sort(right));
  }
}

var input = [2,4,5,7,8,3,2,67,43,65,-2,-5,-3];

console.log(sort(input));
module.exports = sort
