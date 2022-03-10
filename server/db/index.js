//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Student = require('./models/Student')
const Event = require('./models/Event')

//associations could go here!
User.hasMany(Student),
Student.belongsTo(User),
Student.hasMany(Event),
Event.belongsTo(Student)


module.exports = {
  db,
  models: {
    User,
    Student,
    Event
  },
}
