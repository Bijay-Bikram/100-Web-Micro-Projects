const mongoose = require("mongoose")

const employeeSchema = mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean,
})
const Employee = mongoose.model('employees', employeeSchema);
module.exports = Employee;