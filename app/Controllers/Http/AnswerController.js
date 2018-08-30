'use strict'

class AnswerController {
  index({request, response, view}) {
    return view.render('answer');
  }

  create({request, response}) {
    console.log("Create for Answers hit")
  }

  store({request, response}) {
    console.log("Store for Answers hit");
  }

  show({request, response}) {
    console.log("Show for Answers hit:");
  }

  edit({request, response}) {
    console.log("Edit for Answers hit");
  }

  update({request, response}) {
    console.log("Update for Answers hit");
  }

  destroy({request, response}) {
    console.log("Destroy for Answers hit");
  }
}

module.exports = AnswerController
