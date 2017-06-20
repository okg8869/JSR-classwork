'use strict';

//using 'objects', 'handlebars', and 'anonymous functions'


var MyApp = {};

//We need ::
//addToList, removeFromList, populateList (if list already exists on page)
MyApp.compileItem = function(item){
	var source = $('#todo-template').html();
	var template = HandLebars.compile(source);
	return template(item);
};

MyApp.addToList = function($list, thing){
	var itemObject = {toDo: item.val()};
	var compiledItem = MyApp.compileItem(itemObject);
	list.append(compiledItem);
};

MyApp.removeFromList = function(){


};


$(document).ready(function(){
	var $newTaskForm = $('#new_task');
	var $taskList = $('#task_list');
	$newTaskForm.submit(function(event){
		event.preventDefault();
		var $newTaskInput = $('#new_task_input');
		MyApp.addToList($taskList, $newTaskInput);
	});

});