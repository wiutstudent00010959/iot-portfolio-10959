// Replace this with your Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDimHa5TsCSISbn1QlAkTKLF_oFMzueLLU",
    authDomain: "iot-portfolio-00010959.firebaseapp.com",
    databaseURL: "https://iot-portfolio-00010959-default-rtdb.firebaseio.com/",
    projectId: "iot-portfolio-00010959",
    storageBucket: "iot-portfolio-00010959.appspot.com",
    messagingSenderId: "1049944522021",
    appId: "1:1049944522021:web:9d0f43e87c9370d7f82ecc"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  var dataRef1 = database.ref('distance');
  var dataRef2 = database.ref('distanceLimit');
  var dataRef3 = database.ref('lightCondition');
  var dataRef4 = database.ref('obstacleDetected');
  var dataRef5 = database.ref('photoresistorValue');

  //fetch the data
	  dataRef1.on('value', function(getdata1){
	  	var distance = getdata1.val();
	  	document.getElementById('html-distance').innerHTML = distance + " cm";
	  })
	   dataRef2.on('value', function(getdata2){
	  	var distanceLimit = getdata2.val();
	  	document.getElementById('html-distanceLimit').innerHTML = distanceLimit + " cm";
	  })
      dataRef3.on('value', function(getdata1){
        var lightCondition = getdata1.val();
        document.getElementById('html-lightCondition').innerHTML = lightCondition;
    })
     dataRef4.on('value', function(getdata2){
        var obstacleDetected = getdata2.val();
        document.getElementById('html-obstacleDetected').innerHTML = obstacleDetected;
    })
    dataRef5.on('value', function(getdata1){
        var photoresistorValue = getdata1.val();
        document.getElementById('html-photoresistorValue').innerHTML = photoresistorValue + " from 10-point scale";
    })
	var index=0;
//var btn=document.getElementById("led");




    