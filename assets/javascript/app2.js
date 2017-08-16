var questionsList = ["The show's theme song is a parody of:", 
                     "Sarah Chalke, the voice of Beth, can do what?",
                      "Which universe does Rick reside in?"];

var choicesList = ["Power Rangers", "Back to the Future", "Daredevil", "Doctor Who",
                   "Play the ukulele", "Program", "Snarf",
                   "D-42", "138084", "CBC2C"
                    ];

var answersList = ["Doctor Who", "Burp on command", "C-137"];


function visibilitySubmit() {
  var getSubmit = document.getElementById("submit");
  var getDisplay = document.getElementById("display");
  var getNext = document.getElementById("next");
  var getPrevious = document.getElementById("previous");
  var getStart = document.getElementById("start");
  getSubmit.style.visibility = "hidden";
  getDisplay.style.visibility = "hidden";
  getNext.style.visibility = "hidden";
  getPrevious.style.visibility = "hidden";
  getStart.style.visibility = "visible";

  $("#start").on("click", function() {
  getSubmit.style.visibility = "visible";
  getDisplay.style.visibility = "visible";
    getNext.style.visibility = "visible";
  getPrevious.style.visibility = "visible";
  getStart.style.visibility = "hidden";
  });
}

var i = 0;

function visibilityQuestions() {
  $("#start").on("click", function() {
    if (i < questionsList.length){
      $("#myDiv1").html("<h3>" + questionsList[i] + "</h3>");
      var choicesOutput = [];
      for (var j = 0; j < choicesList[i].length; j++){
        choicesOutput.push('<p><input type="radio" name='
          +' "questionchoice">'+choices[i][k]+'</p>');
      }
      $("#myDiv2").html(choicesOutput.join(""));
      $("#myDiv3").html('<p><button onClick = "getRadioValue()">Check</button></p> <br>'); //why won't it work?!
    }
  });
}

window.onload = function() {
  visibilitySubmit();
  visibilityQuestions();

  $("#next").click(stopwatch.stop);
  $("#submit").click(stopwatch.reset);
  $("#start").click(stopwatch.start);
};

/*
i = 0;

var listQuestion = function(){  
    if(i < questions.length){
        document.getElementById("myDiv1").innerHTML = '<p>'+questions[i]+'</p>';
        var choicesOutput=[];//new Array()
        for (var k=0; k<choices[i].length; k++){
            choicesOutput.push(
                '<p><input type = "radio" name ='
                +' "questionchoice">'+choices[i][k]+'</p>');
        }
        document.getElementById("myDiv2").innerHTML =choicesOutput.join("");
        document.getElementById("myDiv3").innerHTML = 
            '<p><button onClick = "getRadioValue()">Check</button></p> <br>';
    }
};
var getRadioValue = function(){
    var value = '';
    for (var h = 0; 
        h < document.getElementsByName('questionchoice').length; h++){
        if (document.getElementsByName('questionchoice')[h]
            .checked==true){
            value = document.getElementsByName('questionchoice')[h].value;
            score++;
        }
    }
    if (value == answers[i]){
        document.getElementById("myDiv4").innerHTML =
            "That is correct. </br><button input type = "
            +"'submit' onClick = 'loadContent()'> Next Question</button>";
    }
    else {
        document.getElementById("myDiv4").innerHTML ="That is incorrect. "
           +"</br><button input type = 'submit' onClick = 'loadContent()'> N"
           +"ext Question</button>"; 
    }
    i++;
};
var whatIsScore = function(){
    return score; 
};
function loadContent(){
    document.getElementById("myDiv4").innerHTML="";
    listQuestion();
}
window.onload = listQuestion;*/
//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

var clockRunning = false;

var stopwatch = {

  time: 30,
  lap: 1,

  reset: function() {

    stopwatch.time = 30;
    stopwatch.lap = 1;

    $("#display").html("00:30");
  },

  start: function() {
      if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
      }

  },
  stop: function() {
    clearInterval(intervalId);
  },

  count: function() {
    stopwatch.time--;
    var currentTime = stopwatch.timeConverter(stopwatch.time);
    $("#display").html(currentTime);
    if (stopwatch.time === 28) {
      stopwatch.time;
    }
  },

  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};