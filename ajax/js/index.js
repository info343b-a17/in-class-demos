'use strict';

$('button').click(function(event) {
  event.preventDefault();

  console.log('You submitted!');
  let query = $('#queryInput').val();
  let url = "https://api.github.com/search/repositories?sort=stars&q="+query;

  console.log("before the fetch")

  // let downloadedPromise = fetch(url) //send the request
  // let processedPromise = downloadedPromise.then(function(response){     
  //     console.log(response);
  //     //return response.url;
  //     let encodedPromise = response.json();

  //     return encodedPromise; //return a value of type promise

  //   })

  //   processedPromise.then(function(data){
  //     console.log(data);
  //   })

  fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(renderSearchResults)
    .catch(function(error){
      console.error(error);
    })


    // .then(function(data){
    //   console.log("you queried: ", data);
    // })

  console.log("after the fetch")

  //data arrives!



  return false;
});

function renderSearchResults(results){
  //makes DOM elements
}


