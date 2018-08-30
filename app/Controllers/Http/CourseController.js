'use strict'

class CourseController {
  index({request, response, view}) {
    return view.render('course');
  }

  create({request, response}) {
    console.log("Create for Courses hit")
  }

  store({request, response}) {
    console.log("Store for Courses hit");
  }

  show({request, response}) {
    console.log("Show for Courses hit.");
  }

  edit({request, response}) {
    console.log("Edit for Courses hit");
  }

  update({request, response}) {
    console.log("Update for Courses hit");
  }

  destroy({request, response}) {
    console.log("Destroy for Courses hit");
  }
}

module.exports = CourseController
