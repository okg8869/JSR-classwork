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
	        	var movieImage = "<li class='imageList'><img src='"+movies[i].Poster+"'></li>";
				var title = movies[i].Title;
				var year = movies[i].Year;
				var movieID = movies[i].imdbID;
				var type = movies[i].Type;
	        	console.log(title + year + movieID + type);
	        	$('#movie_list').append(movieImage);
	        }

		$('.imageList').click(function(){
			$('.imageList').append("why");
	});
	    });

	});

});



// code that works:
// 'use strict';
// var MovieApp = {};

// // This is the same as document ready btw.
// $(function() {
//   // This is where you register your event listeners
//   $('#movie_form').submit(function(event) {
//           event.preventDefault();
//           var input = $('#movie_search').val();
//           var request = $.ajax({
//               url: 'http://www.omdbapi.com/',
//               data: {s:input, apikey: 'ada5c403'}
//           });

//           request.done(function(data){
//               console.log(data.Search);
//               var movies = data.Search;
//               for(var i=0; i<movies.length; i++) {
//                   var image = movies[i].Poster;
//                   var $html = $('<a class="image" data-year="'+movies[i].Year+'" data-title="'+movies[i].Title+'"><img src="'+image+'"/></a>');
//                   $('body').append($html);    
//               }
//           });
//   });

//   $('body').on('click','.image',function(){
//       console.log($(this).data('title'));
//       console.log($(this).data('year'));
//       $('#title').html($(this).data('title'));
//       $('#year').html($(this).data('year'));
      
                      
//     });

// }); 
