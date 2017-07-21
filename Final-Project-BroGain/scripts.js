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

  var firebaseAppReference = firebase.database();

  var fakeInput1 = {
  	input1: 15,
  	input2: 15,
  	input3: 20,
  	input4: 28,
  	input5: 35,
  	input6: 45,
  }






    // $('#workout-form').submit(function(event){
    //       event.preventDefault();
    //       var workoutInput = $('#')

    $('#testerz').Highcharts.chart('container', {

          title: {
              text: 'Solar Employment Growth by Sector, 2010-2016'
          },

          subtitle: {
              text: 'Source: thesolarfoundation.com'
          },

          yAxis: {
              title: {
                  text: 'Number of Employees'
              }
          },
          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
          },

          plotOptions: {
              series: {
                  pointStart: 2010
              }
          },

          series: [{
              name: 'Installation',
              data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
          }, {
              name: 'Manufacturing',
              data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
          }, {
              name: 'Sales & Distribution',
              data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
          }, {
              name: 'Project Development',
              data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
          }, {
              name: 'Other',
              data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
          }]

      });
    });

