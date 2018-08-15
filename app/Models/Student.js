'use strict'

const Model = use('Model')

class Student extends Model {
  userProfile() {
    return this.hasOne('App/Models/UserProfile')
  }
}

module.exports = Student
