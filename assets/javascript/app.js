$(document).ready(function() {

    //what the code needs to do:
    //have a timer, if the times runs out, you go to a page where the questions and their respective answer is shown
    //display a series of questions, display two options
    //assign to each option a correct and a false value
    // depending of the user's choice, interpret their input as true or false

    //Global variables 
    var total = 6;
    var correct = 0;
    var incorrect = 0;
    //var userInpunt = [""]

   
      new Audio('assets/audio/PulpFiction.mp3').play();
 


    // hide answers
    $(".answer").hide(); 
    //hide questions
    $("#questions-container").hide(); 

    //Onclick submit will get answers and input from user. Will tell you what quetions you were correct
    $("#button-submit").click(getAnswers);


    //start button
    $("#start-button").click(function(){
      $("#tarantino-start").hide();
      $("#questions-container").show();
    })

  //function get answers from user after click.
  function getAnswers(){

    //get user input
    var q1= document.forms["trivia-form"]["q1"].value;
    console.log(q1)
    var q2= document.forms["trivia-form"]["q2"].value;
    var q3= document.forms["trivia-form"]["q3"].value;
    var q4= document.forms["trivia-form"]["q4"].value;
    var q5= document.forms["trivia-form"]["q5"].value;
    var q6= document.forms["trivia-form"]["q6"].value;

    //check all boxes

    for( i = 1; i <= total; i+=1){
      if(eval('q'+i) == null || eval ('q'+i) == ''){
        alert("You misssed a question, please check!")
        return false;
      }
    }
    
    // var correctanswers
    var correctAnswers = ["d", "b", "c", "b", "c", "b"];


    // Check user input
    for( i = 1; i <= total; i+=1){
      if(eval('q'+i) == correctAnswers [i - 1]){
        correct+=1
      }//if its not equal to correctSnswers Array, add +=1 to incorrect
      else if(eval('q'+i) !== correctAnswers [i - 1]){
        incorrect+=1
        
      }
    }
    
    //alert("you score " + correct + " and " + incorrect + " incorrect");
    $(".show-number").append("You have " + correct + " correct answers and " + incorrect + " incorrect!")
    hideShow();
  }


  


  function hideShow(){
    $(".input-question").html("");
    $(".answer").show();
  }




  

  


});