//$.get("/quizzes.json", this.quizzesCallback)  // jQuery might override scope
 //$.get("/quizzes.json", this.quizzesCallback.bind(this))
 // $.get("/quizzes.json", function(data) { this.quizzesCallback(data) })