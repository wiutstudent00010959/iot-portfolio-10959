// Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDimHa5TsCSISbn1QlAkTKLF_oFMzueLLU",
    authDomain: "iot-portfolio-00010959.firebaseapp.com",
    databaseURL: "https://iot-portfolio-00010959-default-rtdb.firebaseio.com/",
    projectId: "iot-portfolio-00010959",
    storageBucket: "iot-portfolio-00010959.appspot.com",
    messagingSenderId: "1049944522021",
    appId: "1:1049944522021:web:9d0f43e87c9370d7f82ecc"
  };
//data references
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  var dataRef1 = database.ref('distance');
  var dataRef2 = database.ref('distanceLimit');
  var dataRef3 = database.ref('lightCondition');
  var dataRef4 = database.ref('obstacleDetected');
  var dataRef5 = database.ref('photoresistorValue');
//fetching the data from firebase realtime database and displaying them on main html page
dataRef1.on('value', function(getdata1){ //constantly fetching the value, not just once
 var distance = getdata1.val();
document.getElementById('html-distance').innerHTML = distance + " cm";
//custom chart to display the value from ultrasonic sensor using https://canvas-gauges.com 
var gauge = new LinearGauge({
    renderTo: 'distance-graph',
    width: 120,
    height: 600,
    units: "cm",
    minValue: 0,
    maxValue: 300,
    majorTicks: [
        "0",
        "20",
        "40",
        "60",
        "80",
        "100",
        "120",
        "140",
        "160",
        "180",
        "200",
        "220",
        "240",
        "260",
        "280",
        "300"
    ],
    minorTicks: 5,
    strokeTicks: true,
    highlights: [
        {
            "from": 0,
            "to": 50,
            "color": "rgba(200, 50, 50, .75)"
        },
        {
            "from": 50,
            "to": 100,
            "color": "#ffff00"	
        },
        {
            "from": 100,
            "to":300,
            "color": "#008000"	
        }
    ],
    colorPlate: "#fff",
    borderShadowWidth: 0,
    borders: false,
    needleType: "arrow",
    needleWidth: 2,
    animationDuration: 1500,
    animationRule: "linear",
    tickSide: "left",
    numberSide: "left",
    needleSide: "left",
    barStrokeWidth: 7,
    barBeginCircle: false,
    value: distance
}).draw();
})
 dataRef2.on('value', function(getdata2){
    var distanceLimit = getdata2.val();
    document.getElementById('html-distanceLimit').innerHTML = distanceLimit + " cm";
   //custom chart to display the value using https://canvas-gauges.com 
  var gauge1 = new RadialGauge({
      renderTo: 'distance-limit',
      value: distanceLimit,
      width: 300,
      height: 200,
      units: "cm",
      minValue: 10,
      startAngle: 90,
      ticksAngle: 180,
      valueBox: false,
      maxValue: 300,
      majorTicks: [
          "100",
          "120",
          "140",
          "160",
          "180",
          "200",
      ],
      minorTicks: 2,
      strokeTicks: true,
      highlights: [
      //    {
        //      "from": 150,
          //    "to": 200,
            //  "color": "rgba(200, 50, 50, .75)"
          //}
      ],
      colorPlate: "#fff",
      borderShadowWidth: 0,
      borders: false,
      needleType: "arrow",
      needleWidth: 2,
      needleCircleSize: 7,
      needleCircleOuter: true,
      needleCircleInner: false,
      animationDuration: 1500,
      animationRule: "linear"
}).draw();
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
//custom chart to display the value from photoresistor using https://canvas-gauges.com 
  var gauge2 = new LinearGauge({
  renderTo: 'resistor-graph',
  value: photoresistorValue,
  width: 400,
  height: 150,
  minValue: 0,
  maxValue: 10,
  majorTicks: [
      "0",
      "2",
      "4",
      "6",
      "8",
      "10"
  ],
  minorTicks: 2,
  strokeTicks: true,
  colorPlate: "#fff",
  borderShadowWidth: 0,
  borders: false,
  barBeginCircle: false,
  tickSide: "left",
  numberSide: "left",
  needleSide: "left",
  needleType: "line",
  needleWidth: 3,
  colorNeedle: "#FC6C85",
  colorNeedleEnd: "#222",
  animationDuration: 1500,
  animationRule: "linear",
  animationTarget: "plate",
  barWidth: 5,
  ticksWidth: 50,
  ticksWidthMinor: 15 }).draw();
})
/*
Bibliography
Akar Sahingoz, Semra and Şahin, H. (2012). Visually Impaired Individuals and Kitchen Accidents.
Altunay, B., Yalçın, G. and Uysal Saraç, Menekşe. (2021). Orientation and Mobility Problems of Adults with Visual Impairment and Suggestions for Solutions. Journal of Qualitative Research in Education, 21. Available from https://doi.org/10.14689/enad.28.13.
Arduino. (no date). Software. www.arduino.cc. Available from https://www.arduino.cc/en/software [Accessed 1 December 2023].
Canvas Gauges. (no date). Canvas Gauges. Available from https://canvas-gauges.com/ [Accessed 1 December 2023].
Circuits on Tinkercad. (no date). www.tinkercad.com. Available from https://www.tinkercad.com/circuits [Accessed 1 December 2023].
Cisco Networking Academy. (2019). Download The Packet Tracer Simulator Tool & Find Courses | Networking Academy. Netacad.com. Available from https://www.netacad.com/courses/packet-tracer [Accessed 1 December 2023].
dos Santos, A.D.P. et al. (2020). Are electronic white canes better than traditional canes? A comparative study with blind and blindfolded participants. Universal Access in the Information Society. Available from https://doi.org/10.1007/s10209-020-00712-z [Accessed 1 December 2023].
ESP8266 Firebase - Arduino Reference. (no date). www.arduino.cc. Available from https://www.arduino.cc/reference/en/libraries/esp8266-firebase/ [Accessed 1 December 2023].
ESP8266WiFi library — ESP8266 Arduino Core documentation. (2017). Readthedocs.io. Available from https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/readme.html [Accessed 1 December 2023].
GitHub. (2023). GitHub. GitHub. Available from https://github.com/ [Accessed 1 December 2023].
Google. (2023). Firebase. Firebase. Available from https://firebase.google.com/ [Accessed 1 December 2023].
Netlify: All-in-one platform for automating modern web projects. (2019). Netlify: All-in-one platform for automating modern web projects. Netlify. Available from https://www.netlify.com/ [Accessed 1 December 2023].
ProductPlan. (2018). What is MoSCoW Prioritization? | Overview of the MoSCoW Method. Productplan.com. Available from https://www.productplan.com/glossary/moscow-prioritization/ [Accessed 1 December 2023].
Rizzo, J.-R. et al. (2020). The global crisis of visual impairment: an emerging global health priority requiring urgent action. Disability and Rehabilitation: Assistive Technology, 1–6. Available from https://doi.org/10.1080/17483107.2020.1854876 [Accessed 1 December 2023].
Thought. (2021). Stanford researchers build self-navigating smart cane for the visually impaired - The Global Herald. Available from https://theglobalherald.com/thought/stanford-researchers-build-self-navigating-smart-cane-for-the-visually-impaired/ [Accessed 1 December 2023].
World Health Organization. (2023). Blindness and Vision Impairment. World Health Organization. Available from https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment [Accessed 1 December 2023].
Yin, S. (2019). Why is creating electronic canes for the blind so hard? WHYY. Available from https://whyy.org/segments/why-is-creating-electronic-canes-for-the-blind-so-hard/ [Accessed 1 December 2023].

*/

