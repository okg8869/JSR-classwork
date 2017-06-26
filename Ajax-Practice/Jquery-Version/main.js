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

// This is the same as document ready btw.
$(function() {

	$('#movie_form').submit(function(){
		event.preventDefault();
		var input = $('#movie_search').val();
	    var request = $.ajax({
	         url:'http://www.omdbapi.com/',
	         data:{s:input,apikey:'ada5c403'}
	    });
	    request.done(function(data){
	        var movies = data.Search;
	        for (var i=0;i<movies.length;i++){
	        	var movieImage = "<li class='imageList' data-year='"+movies[i].Year+"' data-title='"+movies[i].Title+"' data-id='"+movies[i].imdbID+"'><img src='"+movies[i].Poster+"'></li>";
	        	$('#movie_list').append(movieImage);
	        }
// 	    $('#movie_search').autocomplete({
// 	    	serviceURL: 'http://www.omdbapi.com/',
// 	    	onSelect: function(suggestion) {

// 	    	}
// });
		$('.imageList').click(function(){
			$('#movieInfo').addClass("blockCard");
			$('#title').html($(this).data('title'));
			$('#year').html($(this).data('year'));
	});
		$('.movieSubmit').hover(function(){
			$('.movieSubmit').addClass('customCursor');

		});

	    });

	});

});
