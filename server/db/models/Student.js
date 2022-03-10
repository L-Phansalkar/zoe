const Sequelize = require('sequelize')
const db = require('../db')

const Student = db.define('student', {
  initials: {
    type: Sequelize.STRING,
    allowNull: false
  },
  birthday: {
    type: Sequelize.STRING,
  }
})

module.exports = Student