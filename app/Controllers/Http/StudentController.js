'use strict'

class StudentController {
  index({request, response, view}) {
    return view.render('student');
  }

  create({request, response}) {
    console.log("Create for StudentController hit")
  }

  store({request, response}) {
    console.log("Store for StudentController hit");
  }

  show({request, response}) {
    console.log("Show for StudentController hit. params: ", params);
  }

  edit({request, response}) {
    console.log("Edit for StudentController hit");
  }

  update({request, response}) {
    console.log("Update for StudentController hit");
  }

  destroy({request, response}) {
    console.log("Destroy for StudentController hit");
  }
}

module.exports = StudentController
