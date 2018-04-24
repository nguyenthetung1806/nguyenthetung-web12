'use strict'

function search(input, target) {
  let left = 0;
  let right = input.length - 1;

  for (let i =0; i >=0; i++){
    let mid = parseInt((left + right) /2);
    if (left + 1 == right){

      if (input[left] == target){
        return left;
        break;
      } else if (input[right] == target){
        return right;
        break;
      } else {
        return -1;
        break;
      }
    } else {
      if (input[mid] == target){
        return mid;
        break;
      } else if (input[mid] < target) {
        left = mid;
      } else {
        right = mid;
      }
    }
  }
}

var input = [-4,-1,0,1,2,3,5,6,7,8,9,100,344,3334];
var target = 4;
console.log(search(input, target));

module.exports = search
