'use strict'

class TeacherController {
  index({request, response, view}) {
    return view.render('teacher');
  }

  create({request, response}) {
    console.log("Create for TeacherController hit")
  }

  store({request, response}) {
    console.log("Store for TeacherController hit");
  }

  show({request, response}) {
    console.log("Show for TeacherController hit. params: ", params);
  }

  edit({request, response}) {
    console.log("Edit for TeacherController hit");
  }

  update({request, response}) {
    console.log("Update for TeacherController hit");
  }

  destroy({request, reponse}) {
    console.log("Destroy for TeacherController hit");
  }
}

module.exports = TeacherController
