$(document).ready(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD6R9fk9MMU1CsND5IfPrgQLA_SFMbcNAg",
    authDomain: "jsr-classwork-firebase.firebaseapp.com",
    databaseURL: "https://jsr-classwork-firebase.firebaseio.com",
    projectId: "jsr-classwork-firebase",
    storageBucket: "jsr-classwork-firebase.appspot.com",
    messagingSenderId: "759458464055"
  };
  firebase.initializeApp(config);

  var messageAppReference = firebase.database();

// Create a Message
  $('#message-form').submit(function(event){
      event.preventDefault();
      var messageee = $('#message').val();
      $('#message').val('');
      var messageReference = messageAppReference.ref('CreateTable');

      messageReference.push({
        message: messageee,
        votes: 0
      });

  });

  $('#comments').on('click', '.delete_comment', function(){
    var comment_id = $(this).closest('li').attr('id');
    deleteMessages(comment_id);
    $(this).closest('li').remove();
  });

// Read a Message
function getMessages(){
      var messageReference = messageAppReference.ref("CreateTable");
      messageReference.on('value',function(results){
        results.forEach(function(message){
          var tempLi = "<li id='"+message.getKey()+"'>"+message.val().message+"<button class='delete_comment'>delete</button></li>";
          $('#comments').append(tempLi);
        })
      });
    };

// Update a Message
    function updateMessages(id, votes){
      var messageReference = messageAppReference.ref("CreateTable").child(id);
      messageReference.update({
        votes:votes
      });
    };

// Delete a Message
    function deleteMessages(id){
      var messageReference = messageAppReference.ref("CreateTable").child(id);
      messageReference.remove();
    };



    getMessages();

});