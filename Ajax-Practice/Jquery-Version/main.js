// Lets create a movie app that will accept a search and return a list of results
/*
1) Accept a query from the user and get results. (All via AJAX... duhhhh)
2) I want it to display the results by outputting the movie posters as image tags
3) Upon interacting with the movie poster (click, mouseover, etc..) you should display 4 extra pieces 
  of information about that movie. I don't care which
4) Bonus: Display a total of 8 pieces of information about the movie
5) Bonus: Do a type ahead so that the form works as autocomplete. 
6) Bonus: Make it pretty

Example endpoint: http://www.omdbapi.com/?i=tt3896198&apikey=ada5c403
*/
'use strict';
var MovieApp = {};

MovieApp.createMovie = function(item){
  var source = $('#movie_list_template').html();
  var template = Handlebars.compile(source);
  return template(item);
};

MovieApp.createInfoBlock = function (item){
  var source = $('#movie_info_template').html();
  var template = Handlebars.compile(source);
  return template(item);
};

// This is the same as document ready btw.
$(function() {

	$('#movie_form').submit(function(){
		event.preventDefault();
		var input = $('#movie_search').val();
		var omdbKey = 'ada5c403';
	    var request = $.ajax({
	         url:'http://www.omdbapi.com/',
	         data:{s:input,apikey:omdbKey}
	    });
	    request.done(function(data){
	        var movies = data.Search;
	        for (var i=0;i<movies.length;i++){
	        	var movieInfo = {
	        		year:movies[i].Year,
	        		title:movies[i].Title,
	        		id:movies[i].imdbID,
	        		posterImage:movies[i].Poster
	        	}
	        	var movieHTML = MovieApp.createMovie(movieInfo);
	        	$('#movie_list').append(movieHTML);
	        }
	    });

	});
			$('body').on('mouseover', '.imageList', function(){
				$('#movieInfo').addClass("blockCard");
				var movieInfoBlock = MovieApp.createInfoBlock(movieInfo);
				$('#movieInfo').html(movieInfoBlock);
			});
});





// $('body').on('click','.imageList', function (){
// 	var newID = $(this).data('id');
// 	var request = $.ajax({
// 		url:'http://www.omdbapi.com/',
// 		data: {
// 			i: currentId,
// 			plot: 'short',
// 			apikey: omdbKey
// 		}
// 	})
// 	request.done(function(data){
// 		alert(data);
// 	})
// });