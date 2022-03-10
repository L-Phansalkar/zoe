const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('event', {
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  testType: {
    type: Sequelize.STRING,
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  time: {
    type: Sequelize.TIME,
    allowNull: false
  },
  age: {
      type: Sequelize.INTEGER
  },
  grade: {
    type: Sequelize.INTEGER
}

})

module.exports = Event