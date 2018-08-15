'use strict'

const Schema = use('Schema')

class AnswerSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments()
      table.string('answer_text', 254).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('answers')
  }
}

module.exports = AnswerSchema
