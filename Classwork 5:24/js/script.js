$(document).ready(function(){	
	/*********** PUT THINGS HERE ****************/

	/****** QUESTION 1 ************/
	document.getElementById('return5th_submit').onclick = function(){
			var text = document.getElementById('return5th_input').value;
			document.getElementById('return5th_display').innerHTML = text.charAt(4);
	}

    /****** QUESTION 2 ************/
    // Same as above except output second to last char of a input string
	document.getElementById('returnLast_submit').onclick = function(){
			var text = document.getElementById('returnLast_input').value;
			document.getElementById('returnLast_display').innerHTML = text.charAt(-2);
	}

	/****** QUESTION 3 ************/
	// Check to see if a word exists in a hard-coded paragraph, display "YES" if found and "NO" if not
	document.getElementById('checkWork_submit').onclick = function() {
		var searchWord = document.getElementById('checkWork_input').value;
		var searchResult = (document.getElementById('ps3text').innerHTML.indexOf(searchWord) >= 0) ? "yes" : "no";
		document.getElementById('checkWork_display').innerHTML = "<br />" + searchResult;
	}

	/****** QUESTION 4 ************/
	// Reverse string inputted by user
	document.getElementById('reverseString_submit').onclick = function(){
		var string = document.getElementById('reverseString_input').value;
		var reversal = string.split('').reverse().join('');
		document.getElementById('reverseString_display').innerHTML = reversal;
	}

	/****** QUESTION 5 ************/
	// Output HELLO WORLD into a div, but you must first store "hello world" into a variable and then output the variable
	document.getElementById('helloworld_submit').onclick = function(){
		var display = document.getElementById('helloworld_display');
		var hWorld = "Hello World";
		document.getElementById('helloworld_display').innerHTML = hWorld;
	}


	/****** QUESTION 6 ************/
	// Provide an input for user to type their name and greet them with their name "Hello BLANK, welcome to the website" should go in greet1 display
	document.getElementById('greet1_submit').onclick = function(){
		var name = document.getElementById('greet1_input').value;
		var greeting = "Hello " + name + ", welcome to the website";
		document.getElementById('greet1_display').innerHTML = greeting;
	}


	/****** QUESTION 7 ************/
	// Do the same as above but only greet them if their names are Alice, Bob, or YOUR NAME
	document.getElementById('greet2_submit').onclick = function(){
		var name = document.getElementById('greet2_input').value;
		if (name == "Alice" ||name == "Bob" || name == "Oliver"){
			var greeting = "Hello " + name + ", welcome to the website";
			document.getElementById('greet2_display').innerHTML = greeting;
		} else {
			document.getElementById('greet2_display').innerHTML = "How dare you sir!";
		}
		
		
	}


	/****** QUESTION 8 ************/
	// Accept two integers from the user and display the larger
	document.getElementById('integerMax_submit').onclick = function(){
		var input1 = document.getElementById('integerMax_input1').value;
		var input2 = document.getElementById('integerMax_input2').value;
		if (input1 < input2){
			document.getElementById('integerMax_display').innerHTML = input2;
		} else{
			document.getElementById('integerMax_display').innerHTML = input1;
		}
		
	}


	/****** QUESTION 9 ************/
	// Accept three integers from the user and display the SIGN of the product of the three (aka: display + or -)



	/****** QUESTION 10 ************/
	// Write a JavaScript program to sort three numbers. Display them in order from greatest to smallest



	/****** QUESTION 11 ***********/
	// Write a function called play() to play rock, paper, scissors and output the winner (player 1 or player 2). This requires ressearch on how to make a function



	/****** QUESTION 12 ***********/
	// Calculate the factoral of a number inputted by the user



	/****** QUESTION 13 ***********/
	//Write a JavaScript program to construct the following pattern:
	//*
	//**
	//***
	//****
	//*****				


	/****** QUESTION 14 ***********/
	//Write a function that multiplies a base by itself a certain number of times (exponent)

	/****** QUESTION 15 ***********/
	//Write a program that prints the numbers from 1 to 100. But for multiples of three print "Foo" instead of the number and for the multiples of five print "Bar". For numbers which are multiples of both three and five print "FooBar"
	
	
});	
