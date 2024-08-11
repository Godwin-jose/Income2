const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  EmpName: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  empId: {
    type: String,
    required: true
  },
  img_url: {
    type: String,
    required: true
  }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
