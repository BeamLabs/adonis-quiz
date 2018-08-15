'use strict'

const Model = use('Model')

class Course extends Model {
  teachers() {
    return this.hasMany('App/Models/Teacher')
  }
  
  students() {
    return this.hasMany('App/Models/Student')
  }

  quizzes() {
    return this.hasMany('App/Modles/Quiz')
  }
}

module.exports = Course
