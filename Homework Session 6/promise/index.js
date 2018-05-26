let wait5s = function(){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('Day la data');
    }, 5000);
    // reject('gap loi roi');
  });
}

const asyncFunction = async () => {

  try{
    console.log('start');
    let data = await wait5s();
    console.log('5s');
    console.log(data);
    await   wait5s();
    console.log('5s');
    await   wait5s();
    console.log('5s');
  } catch(err) {
    console.log(err);
  }
}
// console.log('start');
//
// wait5s()
// .then(function(data){
//   console.log('5 second');
//   console.log(data);
// })
// .then(wait5s)
// .then(function(data){
//   console.log('5 second');
//   console.log(data);
// })
// .catch(function(reason){
//   console.log(reason);
// });



asyncFunction();

// console.log('start');
//
// wait5s(function(){
//   console.log('5 seconds');
// });
