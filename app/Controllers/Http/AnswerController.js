'use strict'

class AnswerController {
  index({request, response}) {
    console.log("request: ", request);
    console.log("response: ", response);
    return response.json({name: "Hello"});
  }

  create(request, response) {
    console.log("Create for Answers hit")
  }

  store() {
    console.log("Store for Answers hit");
  }

  show(params) {
    console.log("Show for Answers hit. params: ", params);
  }

  edit() {
    console.log("Edit for Answers hit");
  }

  update() {
    console.log("Update for Answers hit");
  }

  destroy() {
    console.log("Destroy for Answers hit");
  }
}

module.exports = AnswerController
