(function(){

//var randomPresidents = [];

var President = function(name, votes) {
  this.name = name;
  this.votes = votes;
}

var omalley = new President("OMalley", 0);
var cruz = new President("Cruz", 0);
var webb = new President("Webb", 0);
var rubio = new President("Rubio", 0);
var clinton = new President("Clinton", 0);
var paul = new President("Paul", 0);

function presChartVotes(pres1votes, pres2votes, pres3votes, pres4votes, pres5votes, pres6votes) {

  var data = [
    {
        value: pres1votes,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "pres1"
    },
    {
        value: pres2votes,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "pres2"
    },
    {
        value: pres3votes,
        color: "#C9D787",
        highlight: "#C9D580",
        label: "pres3"
    },
    {
        value: pres4votes,
        color: "#9C4CFF",
        highlight: "#9C1CFF",
        label: "pres4"
    },
    {
        value: pres5votes,
        color: "#03FF85",
        highlight: "#03FF22",
        label: "pres5"
    },
    {
        value: pres6votes,
        color: "#FFF62D",
        highlight: "#FF062D",
        label: "pres6"
    },
    ];
 var options = {
 //Boolean - Whether we should show a stroke on each segment
       segmentShowStroke : true,

       //String - The colour of each segment stroke
       segmentStrokeColor : "#fff",

       //Number - The width of each segment stroke
       segmentStrokeWidth : 2,

       //Number - The percentage of the chart that we cut out of the middle
       percentageInnerCutout : 50, // This is 0 for Pie charts

       //Number - Amount of animation steps
       animationSteps : 100,

       //String - Animation easing effect
       animationEasing : "easeOutBounce",

       //Boolean - Whether we animate the rotation of the Doughnut
       animateRotate : true,

       //Boolean - Whether we animate scaling the Doughnut from the centre
       animateScale : false,

       //String - A legend template
       legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

};

var ctx = document.getElementById("presChart").getContext("2d");
var myPresChart = new Chart(ctx).Bar(data,options);
}

 //function getSixPres(imgAr) {

   // Clears the div for new cat photos.
   //var $presDiv = $('#Images').empty();

  //  var num = Math.floor(Math.random() * imgAr.length);
  //  var num2 = Math.floor(Math.random() * imgAr.length);

  // while(num === num2) {
  //   num2 = Math.floor(Math.random() * imgAr.length);
  //  }

  //  var kitten1 = imgAr[num];
  //  var kitten2 = imgAr[num2];

   var img1 = $('<img>').attr({
    id: 'imgOne',
    src: "../public/Images/OMalley.jpg"
   });

   var img2 = $('<img>').attr({
    id: 'imgTwo',
    src: "../public/Images/Cruz.jpg"
   });

   var img3 = $('<img>').attr({
    id: 'imgThree',
    src: "../public/Images/Webb.jpg"
   });

   var img4 = $('<img>').attr({
    id: 'imgFour',
    src: "../public/Images/Rubio.jpg"
   });

   var img5 = $('<img>').attr({
    id: 'imgFive',
    src: "../public/Images/Clinton.jpg"
   });

   var img6 = $('<img>').attr({
    id: 'imgSix',
    src: "../public/Images/Paul.jpg"
   });
   var $presDiv = $('#presDiv').empty();
   $presDiv.append(img1, img2, img3, img4, img5, img6);

   //var $kitten1image = $('#imgOne');
   //var $kitten2image = $('#imgTwo');

   $('#imgOne').on('click', function() {
      $(this).css("border", "5px solid yellow");

      omalley.votes++;

      //kitten1.timesShown++;
      //kitten2.timesShown++;

      //setTimeout(getTwoKittens, 500, randomKittens);

      presChartVotes(omalley.votes, cruz.votes, webb.votes, rubio.votes, clinton.votes, paul.votes);
   });
   $('#imgTwo').on("click", function() {
    $(this).css("border", "5px solid yellow");

      cruz.votes++;

        // kitten1.timesShown++;
       //kitten2.timesShown++;

      //setTimeout(getTwoKittens, 500, randomKittens);

      presChartVotes(omalley.votes, cruz.votes, webb.votes, rubio.votes, clinton.votes, paul.votes);
   });
 $('#imgThree').on("click", function() {
    $(this).css("border", "5px solid yellow");

      webb.votes++;

        // kitten1.timesShown++;
       //kitten2.timesShown++;

      //setTimeout(getTwoKittens, 500, randomKittens);

      presChartVotes(omalley.votes, cruz.votes, webb.votes, rubio.votes, clinton.votes, paul.votes);
   });
 $('#imgFour').on("click", function() {
    $(this).css("border", "5px solid yellow");

      rubio.votes++;

        // kitten1.timesShown++;
       //kitten2.timesShown++;

      //setTimeout(getTwoKittens, 500, randomKittens);

      presChartVotes(omalley.votes, cruz.votes, webb.votes, rubio.votes, clinton.votes, paul.votes);
   });
 $('#imgFive').on("click", function() {
    $(this).css("border", "5px solid yellow");

      clinton.votes++;

        // kitten1.timesShown++;
       //kitten2.timesShown++;

      //setTimeout(getTwoKittens, 500, randomKittens);

      presChartVotes(omalley.votes, cruz.votes, webb.votes, rubio.votes, clinton.votes, paul.votes);
   });
 $('#imgSix').on("click", function() {
    $(this).css("border", "5px solid yellow");

      paul.votes++;

        // kitten1.timesShown++;
       //kitten2.timesShown++;

      //setTimeout(getTwoKittens, 500, randomKittens);

      presChartVotes(omalley.votes, cruz.votes, webb.votes, rubio.votes, clinton.votes, paul.votes);
   });

//generateKittenObjs();

}());
