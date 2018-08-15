'use strict'

const Model = use('Model')

class Quiz extends Model {
  questions() {
    return this.hasMany('App/Models/Question')
  }
}

module.exports = Quiz
