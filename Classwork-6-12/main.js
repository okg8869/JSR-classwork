/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.  

*/

function addToList(list, newThing) {
	var newList = document.createElement('li');
	var listInsides = document.createTextNode(newThing);
	newList.appendChild(listInsides);
	list.appendChild(newList);
}

window.onload = function() {
  // when someone clicks the button...
	var button = document.getElementById('new-thing-button');
	var thingList = document.getElementById('fav-list');
	var newThingInput = document.getElementById('new-thing');

	  button.onclick = function(event) {
// event.preventDefault(); overrides the form being able to submit, then we can take the value and play with it. So it stops th form from trying to actaully submit to somewhere
	    event.preventDefault();
	    var newThing = newThingInput.value;
	    addToList(thingList, newThing);
// this now clears the form field
	    newThingInput = '';

  };



  // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
};


/*

Bonus:

When they click submit without typing anything, alert the user 
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

    // bonus version -- instead of line 28:

    // if (newThing === "") {
    //   alert("You must type in a value!");
    // } else {
    //   addToList(thingList, newThing);
    //   newThingInput.value = "";
    // }

	//     newThingInput.value = "";
	//   };
	// };

*/

//-------------------------------------------------------------------------------
//----------divider for jquery---------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------


// $(document).ready(function(){
// 	alert();
// });

// replaces the following

//  window.onload = function(){
// 	// alert();
//  }



