const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

require("./connection"); // Import the connection file

const Employee = require("./models/users.model"); // Import the model

// POST API to add an employee
app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error adding employee" });
  }
});

// GET API to fetch all employees
app.get("/get", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error fetching employees" });
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
