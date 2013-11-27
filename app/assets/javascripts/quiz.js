// 1. Get quizzes from server, replace the page with the list of quizzes.
//   - AJAX call
//   - DOM manipulation (using templates)

// 2. Get a question from server, replace the page with the question.
//   - need the unique session key
//   - AJAX call
//   - DOM manipulation (using templates)

// 3. Submit an answer, determine whether it was correct.
//   - need the unique session key
//   - AJAX call
//   - DOM manipulation (using templates)
//   - get the next question (if there are more)
//   - display the results (if there aren't more questions)




//(new Date()).getTime().toString())

var Quizzes = {
  init: function() {
    // bind my event handlers here, then call:
    this.getQuizzes()
    $(".container").on("click","a",this.getQuestions)
  },

  getQuizzes: function(){
    //   - AJAX call
    $.get("/quizzes.json").done(this.displayQuizzes)
  },

  displayQuizzes: function(data) {
    //data.quizzes.push({name: "Jeffrey", quiz_id: 2})
    var $quizList = $($("#quiz-list-template").text())
    var quizTemplate = $("#quiz-template").text()
    for (var i=0; i<data.quizzes.length; i++) {
      var $quiz = $(quizTemplate)
      $quiz.find('a').attr("id",data.quizzes[i].quiz_id)
      $quiz.find('a').text(data.quizzes[i].name)
      $quizList.find('ul').append($quiz)
    }
    $("div.container").append($quizList)
  },

  getQuestions: function(){
    console.log($(this).attr("id"))
    quiz_id = $(this).attr("id")
    $.get("/quizzes/"+quiz_id+"/questions/next.json")
  }
}

$(document).ready(function(){
  Quizzes.init()
})
