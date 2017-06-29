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
var MovieApp = {
	movies:[],

};


MovieApp.baseEndpoint = 'http://www.omdbapi.com/';
MovieApp.populateMovieList = function(movie){
	var movies = MovieApp.movies;
	for(vari=0;i<movies.length;i++){
		var html = MovieApp.createMovie(movie)
	}

}

MovieApp.createMovie = function(item) {
  var source = $('#movie_template').html();
  var template = Handlebars.compile(source);
  return template(item);
}
// This is the same as document ready btw.
$(function() { 	
	$('#movie_form').submit(function(event){
		MovieApp.movies = [];
		$('#movies_list').html('');
		event.preventDefault();
		var input = $('#movie_search').val();		
		var request = $.ajax({
	 		url:MovieApp.baseEndpoint,
	 		data:{s:input,apikey:"ada5c403"}
	 	});
	 	request.done(function(data){
	 		var movies = data.Search;
	 		MovieApp.movies = movies;
	 		console.log(movies);
	 		for(var i=0;i<movies.length;i++){
	 			console.log(movies[i]);
	 			var tempMovie = {
	 				poster: movies[i].Poster,
	 				id:movies[i].imdbID
	 			};
	 			var movieHTML = MovieApp.createMovie(tempMovie);
	 			$('#movies_list').append(movieHTML);
	 		}
	 	});
	});
 	

});
