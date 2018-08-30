'use strict'

class QuizController {
  index({request, response, view}) {
    return view.render('quiz');
  }

  create(request, response) {
    console.log("Create for QuizController hit")
  }

  store() {
    console.log("Store for QuizController hit");
  }

  show(params) {
    console.log("Show for QuizController hit. params: ", params);
  }

  edit() {
    console.log("Edit for QuizController hit");
  }

  update() {
    console.log("Update for QuizController hit");
  }

  destroy() {
    console.log("Destroy for QuizController hit");
  }
}

module.exports = QuizController
