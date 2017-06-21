	'use strict';

var MyApp = {};

MyApp.comments = [{
		name:'Bob Smith',
		email:'test@test.com',
		comments:"First comment here"
  }
  ];

// Blog App
// Use the todo app as an example of how this app should work.
// 1) Make it so that you can add a comment, use handlebars for templating. Add comment to a javascript array.
// 1a) Comment should include the users name, email address and their comment
// 2) Create list of existing comments and add them on page load to the comment section
// 3) Make it so that a comment can get deleted, also deleting it from the array
// 4) BONUS: Make the other comment section work
// 5) BONUS: Make it so that you can edit a comment

MyApp.compileComment = function(comment){
	var source = $('#comment-template').html();
	var template = Handlebars.compile(source);
	return template(comment);
};

MyApp.addComment = function(list,name,email,comment){
	var newComment = {
			name:name.val(),
			email:email.val(),
			comments:comment.val()
	};
	MyApp.comments.push(newComment);
	var compiledComment = MyApp.compileComment(newComment);
	list.append(compiledComment);
};

MyApp.populateComment = function(list){
	for(var i=0; i<MyApp.comments.length; i++){
		var newComment = MyApp.compileComment(MyApp.comments[i]);
		list.append(newComment);
	};
};

MyApp.removeComment = function(list,comment) {
	var commentIndex = comment.index();
	if (commentIndex > -1) {
		MyApp.comments.splice(commentIndex, 1);
	}
	comment.remove();
}

$(document).ready(function(){
	var newCommentForm = $('.comment_form');
	var commentList = $('.comments');


	MyApp.populateComment(commentList);

	newCommentForm.submit(function(event){
		event.preventDefault();
		var newCommentName = $(this).parent().find('.comment_name');
		var newCommentEmail = $(this).parent().find('.comment_email');
		var newCommentText = $(this).parent().find(".comment_text").val();

		if (newCommentText.val() == '') {
			alert('Your comment section is blank');
			return;
		}
		MyApp.addComment(commentList, newCommentName, newCommentEmail, newCommentText);
		console.log(newCommentText);
	});

	commentList.on('click', '.remove', function(del){
		del.preventDefault();
		var newComment = $(this).parent();
		MyApp.removeComment(commentList, newComment);
	});

 
});