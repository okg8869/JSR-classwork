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

      var workout1Reference = brogainDataReference.ref('Workout-1-Table');
      var workout2Reference = brogainDataReference.ref('Workout-2-Table');
      var workout3Reference = brogainDataReference.ref('Workout-3-Table');
      var workout4Reference = brogainDataReference.ref('Workout-4-Table');
      var workout5Reference = brogainDataReference.ref('Workout-5-Table');
      var workout6Reference = brogainDataReference.ref('Workout-6-Table');

      workout1Reference.push({
        weight: workout1Weight,
        repetitions: 0
      });
      workout2Reference.push({
        weight: workout1Weight,
        repetitions: 0
      });
      workout3Reference.push({
        weight: workout1Weight,
        repetitions: 0
      });
      workout4Reference.push({
        weight: workout1Weight,
        repetitions: 0
      });
      workout5Reference.push({
        weight: workout1Weight,
        repetitions: 0
      });
      workout6Reference.push({
        weight: workout1Weight,
        repetitions: 0
      });
    });

  // Retreiving Data from Firebase
    var dataRef = brogainDataReference.ref('Workout-1-Table')
    dataRef.on('value', gotData, errData);


    function gotData(data) {
      // console.log(data.val());
      var data = data.val();
      var keys = Object.keys(data);
      // console.log(keys);
      for (var i = 0; i < keys.length; i++) {
        var keyIndex = keys[i];
        var weight = data[keyIndex].weight;
        var repetitions = data[keyIndex].repetitions;
        // console.log(weight,repetitions)
      }
    }

    function errData(err) {
      console.log("Error!");
      console.log(err);
    }


  
  // Create graph with Highcharts 
    $('#display-graph').on('click', function(event){
      event.preventDefault();
      dataRef.on('value', function(data){
        var data = data.val();
        var keys = Object.keys(data);
        // console.log(keys);
        console.log(data);
        for (var i = 0; i < keys.length; i++) {
          var keyIndex = keys[i];
          var weight = data[keyIndex].weight;
          var repetitions = data[keyIndex].repetitions;
          // console.log(weight,repetitions)
        }
      });
      var url="https://brogain-e4808.firebaseio.com/.json";
      $.getJSON(url, function(data){
        var options = {
          chart: {
            renderTo: 'container',
            marginTop: 0,
            marginRight: 0,
            marginLeft: 0,
            spacing: [0,0,30,0],
            type: 'area',
            zoomType: 'xy',
            events: {
              // load: renderImage
            }
          },
          legend: {
            enabled: false
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
            data: data
          }]
        }
        var chart = new Highcharts.Chart(options);
      });
    });

    




});

