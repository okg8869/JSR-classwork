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
    var chestRef = brogainDataReference.ref("Chest");
    var backRef = brogainDataReference.ref("Back");
    var armsRef = brogainDataReference.ref("Arms");
    var legsRef = brogainDataReference.ref("Legs");
    var shouldersRef = brogainDataReference.ref("Shoulders");
    var coreRef = brogainDataReference.ref("Core");

    

  // Log the weight and reps? of a workout
    $('#workout-form').submit(function(event){
      event.preventDefault();
      var workout1Weight = $('#workout1').val();
      $('#workout1').val('');
      var workout2Weight = $('#workout2').val();
      $('#workout2').val('');
      var workout3Weight = $('#workout3').val();
      $('#workout3').val('');
      var workout4Weight = $('#workout4').val();
      $('#workout4').val('');
      var workout5Weight = $('#workout5').val();
      $('#workout5').val('');
      var workout6Weight = $('#workout6').val();
      $('#workout6').val('');

      var allWorkoutData = [workout1Weight,workout2Weight,workout3Weight,workout4Weight,workout5Weight,workout6Weight];
      console.log(allWorkoutData[1]);

      var chestDataRef = {
        dumbellpress: allWorkoutData[0],
        declinepress: allWorkoutData[1],
        inclinepress: allWorkoutData[2],
        dumbellfly: allWorkoutData[3],
        cableuppercutfly: allWorkoutData[4],
        pushups: allWorkoutData[5]
      }

      chestRef.push(chestDataRef);
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


  
  // Create graph with Highcharts 
    $('#display-graph').on('click', function(event){
      event.preventDefault();
      var dataRef = brogainDataReference.ref('Chest');
      dataRef.on('value', function(data){

      var data = data.val();
      var keys = Object.keys(data);
      // console.log(data);
      // console.log(keys);
      var trueWeight = [];
      for (var i = 0; i < keys.length; i++) {
        var keyIndex = keys[i];
        var weight = parseInt(data[keyIndex].dumbellpress);
        trueWeight.push(weight);
        console.log(weight)

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
            name: workout1,
            data: trueWeight
          }]
        }
        var chart = new Highcharts.Chart(options);
      });
      });
    });

    




});

