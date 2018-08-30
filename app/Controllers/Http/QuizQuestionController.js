'use strict'

class QuizQuestionController {
  index({request, response, view}) {
    console.log("view: ", view);    

    return view.render('quiz-questions');
  }

  create({request, response}) {
    console.log("Create for QuizQuestionController hit")
  }

  store({request, response}) {
    console.log("Store for QuizQuestionController hit");
  }

  show({request, response}) {
    console.log("Show for QuizQuestionController hit.");
  }

  edit({request, response}) {
    console.log("Edit for QuizQuestionController hit");
  }

  update({request, response}) {
    console.log("Update for QuizQuestionController hit");
  }

  destroy({request, response}) {
    console.log("Destroy for QuizQuestionController hit");
  }
}

module.exports = QuizQuestionController
