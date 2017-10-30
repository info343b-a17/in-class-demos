'use strict';

$('button').click(function(event) {

  console.log('You submitted!');
  let query = $('#queryInput').val();
  let url = "https://api.github.com/search/repositories?sort=stars&q="+query;

  
});



