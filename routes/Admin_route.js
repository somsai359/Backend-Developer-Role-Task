const router = require('express').Router();
const Student = require('../models/student');
// Add a new student
router.route('/add/student').post(async (req, res) => {
  try {
    const { name, email, department, password } = req.body;
    const newStudent = new Student({ name, email, department, password });
    await newStudent.save();
    res.json('Student Added Successfully');
  } catch (err) {
    res.status(500).send({
      status: 'Error adding student',
      error: err.message,
    });
  }
});

// Get all students
router.route('/get/students').get(async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).send({
      status: 'Error fetching students',
      error: err.message,
    });
  }
});

// Update student details
router.route('/update/:sid').put(async (req, res) => {
  try {
    const userID = req.params.sid;
    const { name, email, department } = req.body;
    const updateStudent = { name, email, department };
    await Student.findByIdAndUpdate(userID, updateStudent);
    res.json({ status: 'User Updated' });
  } catch (err) {
    res.status(500).send({
      status: 'Server Error with updating data',
      error: err.message,
    });
  }
});

// Delete a student
router.route('/delete/:sid').delete(async (req, res) => {
  try {
    const uId = req.params.sid;
    await Student.findByIdAndDelete(uId);
    res.json({ status: 'User Deleted' });
  } catch (err) {
    res.status(500).send({
      status: 'Error with deleting user',
      error: err.message,
    });
  }
});

// Assign Task to a Student
router.route('/task/assign/:sid').post(async (req, res) => {
  try {
    const userID = req.params.sid;
    const { title, description, dueTime, status } = req.body;
    const task = { title, description, dueTime, status };

    const student = await Student.findById(userID);
    student.tasks.push(task);
    await student.save();

    res.json('Task Assigned Successfully');
  } catch (err) {
    res.status(500).send({
      status: 'Error assigning task',
      error: err.message,
    });
  }
});


module.exports = router;
