'use strict'

const Schema = use('Schema')

class UserProfileSchema extends Schema {
  up () {
    this.create('user_profiles', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_profiles')
  }
}

module.exports = UserProfileSchema
