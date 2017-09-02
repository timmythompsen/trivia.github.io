
var trivia = [
	 {
		question: "The first person shooter video game Doom was released in what year?",
		a1: "1996",
		a2: "2000",
		a3: "1993",//
		a4: "1997"
	},
	 {
		question: "What year was the first apple computer released?",
		a1: "1976",//
		a2: "1980",
		a3: "1985",
		a4: "1973"
	},
	 {
		question: "What year was Nintendo 64 released?",
		a1: "1990",
		a2: "1999",
		a3: "1996",//
		a4: "1993"
	},
	 {
		question: "What year was facebook founded?",
		a1: "2000",
		a2: "2004",//
		a3: "1998",
		a4: "2006"
	},
	 {
		question: "What year was the first Iphone released?",
		a1: "2004",
		a2: "2007",//
		a3: "2010",
		a4: "2006"
	}
]

var intervalId;
var clockRunning = false;
var correct = 0;
var incorrect =0;
var index = 0;
var outOfTime=null;

var timer = {

	time: 30,

    reset: function() {
    	timer.time = 30;
    	$("#display").html("30");
    	
     },

    start: function() {
      if (!clockRunning) {
        intervalId = setInterval(timer.count, 1000);
        clockRunning = true;
      	}
  	},
  	count: function() {
    timer.time--;
    $("#display").html("Time Remaining: " + timer.time);
	    if(timer.time == 0){
	    	clearInterval(intervalId);
	    	timer.start();
	    }
  	},

  	timeUp: function(){
  		outOfTime = true;
  		return outOfTime;
  	}
  }

var game = {

	reset: function(){
		 clockRunning = false;
		 correct = 0;
		 incorrect =0;
		 index = 0;
		 outOfTime=null;
	},

   displayGame: function(){
   		if(index < 5){
		  	$("#question").html("Question: " + trivia[index].question + "</br>");
		  	$("#question").append("<input id='a1' type='radio' name='answer' value='1'>" + trivia[index].a1 + "<br>");
			$("#question").append("<input id='a2' type='radio' name='answer' value='2'>" + trivia[index].a2 + "<br>");	
			$("#question").append("<input id='a3' type='radio' name='answer' value='3'>" + trivia[index].a3 + "<br>");
			$("#question").append("<input id='a4' type='radio' name='answer' value='4'>" + trivia[index].a4 + "<br>");	
			index++;
			console.log(index);
			game.getVal();
			$("#next").click(timer.reset).click(game.displayGame).click(timer.start);
		}
		else if(index === trivia.length){
			$("#question").html("<h1>Correct: " + correct + "</h1><br>");
			$("#question").append("<h1>Incorrect: " + incorrect + "</h1><br>");
			$("#question").append("<h1>GAME OVER</h1><br>");
			$("#display").append("");
			clearInterval(intervalId);

		}


  	},

  	getVal: function(){
		$('#a1').click(function(){
		    if($(this).is(':checked') && index ===2){
		    	alert('Correct!');
		    	correct++
		    }
		    else{
		    	alert('false');
		    	incorrect++;
		    } 
		    
		});
		$('#a2').click(function(){
		    if($(this).is(':checked') && index ===3 || index ===4){
		    	alert('Correct!'); 
		    	correct++;
		    }
		    else {
		    	alert('false');
		    	incorrect++;
		    }
		});
		$('#a3').click(function(){
		    if($(this).is(':checked')&& index === 0 ||  index ===2){
		    	alert('Correct'); 
		    	correct++;
		    }
		    else {
		    	alert('false');
		    	incorrect++;
		    }
		});
		$('#a4').click(function(){
		    if ($(this).is(':checked')){
		     alert('False!');
		     incorrect++; 
		    }
		    
		});
		console.log(correct);
		console.log(incorrect);
	}
}
 



window.onload = function() {

 	$("#start").click(timer.start).click(game.displayGame);
	
};


console.log(trivia);