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

function visibilityQuestions() {
  $("#start").on("click", function() {
  $(".question").html(questionsList[0]);
    var radioBtn = $('<br><br> <input type="radio" id="choice1" name="rbtnCount" /> <br>'); 
    radioBtn.appendTo('.question');
    var choices = choicesList[i];
    console.log(choicesList[i]);
  });
}

window.onload = function() {
  visibilitySubmit();
  visibilityQuestions();

  $("#next").click(stopwatch.stop);
  $("#submit").click(stopwatch.reset);
  $("#start").click(stopwatch.start);
};

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