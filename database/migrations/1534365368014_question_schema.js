'use strict'

const Schema = use('Schema')

class QuestionSchema extends Schema {
  up () {
    this.create('questions', (table) => {
      table.increments()
      table.string('question_text', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('questions')
  }
}

module.exports = QuestionSchema
