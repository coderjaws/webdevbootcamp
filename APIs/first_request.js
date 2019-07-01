//var request = require('request');
//request('http://www.google.com', function(error, response, body){
//   if(!error && response.statusCode == 200){
//       console.log(body);
//   } 
//});

//var request = require('request');
//request('http://www.reddit.com', function(error, response, body){
// if(error){
//   console.log("SOMETHING WENT WRONG!");     
//   console.log(error);     
// } else {
//     if(response.statusCode == 200){
//         //THINGS WORKED!
//         console.log(body);
//     }
// }   
//}); 

//var request = require('request'); 

//request('http://jsonplaceholder.typicode.com/users/1', function(error, response, body){
//    if(!error && response.statusCode == 200){
//        var parsedData = JSON.parse(body);     
//        //console.log(parsedData['name']);     
//        //console.log(parsedData.name);     
//        //console.log(parsedData.name + ' lives in ' + parsedData.address.city);     
//        console.log(`${parsedData.name} lives in ${parsedData.address.city}`);     
//    }   
//});

//const request = require('request'); 

//request('http://jsonplaceholder.typicode.com/users/1', (error, response, body) => {
//    if(!error && response.statusCode == 200){
//        const parsedData = JSON.parse(body);     
//        //console.log(parsedData['name']);     
//        //console.log(parsedData.name);     
//        //console.log(parsedData.name + ' lives in ' + parsedData.address.city);     
//        console.log(`${parsedData.name} lives in ${parsedData.address.city}`);     
//    }   
//}); 

const rp = require('request-promise'); 

rp('http://jsonplaceholder.typicode.com/users/1')
  .then((body) => {
    const parsedData = JSON.parse(body);
    console.log(`${parsedData.name} lives in ${parsedData.address.city}`); 
  })
  .catch((err) => {
    console.log('Error!', err);  
  });

