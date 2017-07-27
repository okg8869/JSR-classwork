$(document).ready(function(){

  // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAYDf6T7nUmhDLmw3yZ5wX0TQbvJZJM21E",
      authDomain: "brogain-e4808.firebaseapp.com",
      databaseURL: "https://brogain-e4808.firebaseio.com",
      projectId: "brogain-e4808",
      storageBucket: "brogain-e4808.appspot.com",
      messagingSenderId: "1009650252599"
    };
    firebase.initializeApp(config);
    var brogainDataReference = firebase.database();

// Database Reference names 
    var databaseReferences = [];   

  // Log the weight and reps? of a workout
    $('.workout-form').submit(function(event){
      var ref = false;
      if($(this).attr('id') == 'chestform'){
        ref = brogainDataReference.ref("Chest");
      }
      if($(this).attr('id') == 'backform'){
        ref = brogainDataReference.ref("Back");
      }
      if($(this).attr('id') == 'armsform'){
        ref = brogainDataReference.ref("Arms");
      }
      if($(this).attr('id') == 'legsform'){
        ref = brogainDataReference.ref("Legs");
      }
      if($(this).attr('id') == 'shouldersform'){
        ref = brogainDataReference.ref("Shoulders");
      }
      if($(this).attr('id') == 'coreform'){
        ref = brogainDataReference.ref("Core");
      }
      event.preventDefault();
      var formData = $(this).serializeArray();
      console.log(formData)
      $(this).find('input').val('');

      var refdata = {
        workoutInput1: formData[0].value,
        workoutInput2: formData[1].value,
        workoutInput3: formData[2].value,
        workoutInput4: formData[3].value,
        workoutInput5: formData[4].value,
        workoutInput6: formData[5].value
      }

      ref.push(refdata);
    });

    var muscleGroup = "Chest";
    $('#topmenu').find('button').on('click', function(){
      $('.active').removeClass('active');
      if($(this).attr('id') == 'chest'){
        $('#chestform').addClass('active');
        muscleGroup = "Chest";
      }
      if($(this).attr('id') == 'back'){
        $('#backform').addClass('active');
        muscleGroup = "Back";
      }
      if($(this).attr('id') == 'arms'){
        $('#armsform').addClass('active');
        muscleGroup = "Arms";
      }
      if($(this).attr('id') == 'legs'){
        $('#legsform').addClass('active');
        muscleGroup = "Legs";
      }
      if($(this).attr('id') == 'shoulders'){
        $('#shouldersform').addClass('active');
        muscleGroup = "Shoulders";
      }
      if($(this).attr('id') == 'core'){
        $('#coreform').addClass('active');
        muscleGroup = "Core";
      }
    });


// var bodyRefData = {};
// var bodyRef = brogainDataReference.ref('Body')
// bodyRef.on('value', function(data){
//   bodyRefData = data.val();
//   for (var bodyArea in bodyRefData){
//     if (bodyRefData.hasOwnProperty(bodyArea)) {
//       databaseReferences.push(brogainDataReference.ref(bodyArea));
//     }
//   };
//   for (var i=0;i<databaseReferences.length;i++){
//     databaseReferences[i].on('value', function(data){
      
//     })
//   }
// });

   

  // Create graph with Highcharts 
    $('.graphButton').on('click', function(){
      event.preventDefault();
      var dataNode = $(this).data('group');    
      event.preventDefault();
      var dataRef = brogainDataReference.ref(muscleGroup);
      dataRef.on('value', function(data){
        var data = data.val();
        var keys = Object.keys(data);
        var trueWeight = [];
        for (var i = 0; i < keys.length; i++) {
          var keyIndex = keys[i];
          var weight = parseInt(data[keyIndex][dataNode]);
          trueWeight.push(weight);
        };
        var url="https://brogain-e4808.firebaseio.com/.json";
        $.getJSON(url, function(data){
          var options = {
            chart: {
              renderTo: 'container',
              type: 'area',
            },
            title: {
              text: "Your very first Gain Graph!"
            },
            xAxis: {
              type: 'linear'
            },
            yAxis: {
              title: {
                text: "Weight in Pounds"
              },
              plotlines: [{
                value: 0,
                width: 1,
                color: '#808080'
              }]
            },
            plotOptions: {
              series: {
                allowPointSelect: true
              }
            },
            series: [{
              // name: workout,
              data: trueWeight
            }]
          }
          var chart = new Highcharts.Chart(options);
        });
      });
    });

    




});













//(KEEPING THIS FOR REFERNECE -- ALREADY RECREATED Above)
    //   var workout1Reference = brogainDataReference.ref('Dumbell Press');
    //   var workout2Reference = brogainDataReference.ref('Decline Press');
    //   var workout3Reference = brogainDataReference.ref('Incline Press');
    //   var workout4Reference = brogainDataReference.ref('Dumbell Fly');
    //   var workout5Reference = brogainDataReference.ref('Cable Uppercut Fly');
    //   var workout6Reference = brogainDataReference.ref('Pushups');

    //   workout1Reference.push({
    //     weight: workout1Weight,
    //   });
    //   workout2Reference.push({
    //     weight: workout1Weight,
    //   });
    //   workout3Reference.push({
    //     weight: workout1Weight,
    //   });
    //   workout4Reference.push({
    //     weight: workout1Weight,
    //   });
    //   workout5Reference.push({
    //     weight: workout1Weight,
    //   });
    //   workout6Reference.push({
    //     weight: workout1Weight,
    //   });
    // });

  // Retreiving Data from Firebase (KEEPING THIS FOR REFERNECE -- ALREADY RECREATED BELOW)
    // var dataRef = brogainDataReference.ref('Dumbel Press')
    // dataRef.on('value', gotData, errData);


    // function gotData(data) {
    //   var data = data.val();
    //   var keys = Object.keys(data);
    //   // console.log(data);
    //   // console.log(keys);
    //   for (var i = 0; i < keys.length; i++) {
    //     var keyIndex = keys[i];
    //     var weight = data[keyIndex].weight;
    //     // console.log(weight)
    //   }
    // }

    // function errData(err) {
    //   console.log("Error!");
    //   console.log(err);
    // }
