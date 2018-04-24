'use strict'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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


function AddBackward(list, upperLimmit, numberToAdd){
  let i = 0;
  while (i < numberToAdd){
    let add = getRandomInt(-10000, upperLimmit);
    if (list.indexOf(add) == -1){
      list.unshift(add);
      i++;
    }
  }
  return list;
}


function AddForward(list, lowerLimmit, numberToAdd) {
  let i = 0;
  while (i < numberToAdd){
    let add = getRandomInt(lowerLimmit, 100000);
    if (list.indexOf(add) == -1){
      list.push(add);
      i++;
    }
  }
  return list;
}


function generateNone(length, target){
  let list = [];
  let result =   {"input": [],
                  "target" : target,
                  "output" : -1};
  let midsplit = getRandomInt(1, length);
  AddBackward(list, target, midsplit);
  AddForward(list, target, length - midsplit);
  result.input = sort(list);
  return result;
}

function generateFirst(length, target) {
  let list = [target];
  let result =   {"input": [],
                  "target" : target,
                  "output" : 0};
  AddForward(list, target, length - 1);
  result.input = sort(list);
  return result;
}

function generateLast(length, target) {
  let list = [target];
  let result =   {"input": [],
                  "target" : target,
                  "output" : length - 1};
  AddBackward(list, target, length - 1);
  result.input = sort(list);
  return result;
}

function generateMid(length, target){
  let list = [target];
  let result =   {"input": [],
                  "target" : target,
                  "output" : getRandomInt(1, length - 2)};
  AddBackward(list, target, result.output);
  AddForward(list, target, length - result.output - 1);
  result.input = sort(list);
  return result;
}


function generateWhatever(length, target){
  let chance = getRandomInt(1, 2);
  let list = [];
  let result =   {"input": [],
                  "target" : target,
                  "output": -4};
  if(chance == 1){
    list.push(target);
    AddBackward(list, 10000, length - 1);
  } else {
    AddBackward(list, 10000,  length);
  }
  result.input = sort(list);
  result.output = search(result.input, target);
  return result;
}

function generate(testLengthArray){
  let casePicked = [0, 1, 2, 3];
  let target = 2;
  let finalResult =[];

  for (let i = 0; i < testLengthArray.length; i++){

    if (i == 0){
      finalResult.push(generateNone(testLengthArray[i], target));
    } else if (i == 1){
      finalResult.push(generateFirst(testLengthArray[i], target));
    }else if (i == 2){
      finalResult.push(generateLast(testLengthArray[i], target));
    }else if (i == 3){
      finalResult.push(generateMid(testLengthArray[i], target));
    } else {
      finalResult.push(generateWhatever(testLengthArray[i], target));
    }
  }
  return finalResult;
}

var testLengthArray = [6,4,5,6,7,8,9];

console.log(generate(testLengthArray));


module.exports = generate
