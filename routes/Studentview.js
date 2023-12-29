const router = require('express').Router();
const Student = require('../models/student');

// Student login
router.post('/student/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if the student exists with the provided email
      const student = await Student.findOne({ email });
  
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
  
      // Check if the passwords match
      if (student.password !== password) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
      // If credentials are correct, return the student data
      res.json({message: 'Successfully logged in'});
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // View Assigned Tasks
router.get('/tasks/:sid', async (req, res) => {
    const userID = req.params.sid;
  
    try {
      const student = await Student.findById(userID);
  
      if (!student) {
        return res.status(404).json({ status: 'Not foud', error: 'User not found' });
      }
  
      // Check if user is authorized to access these tasks
      // You can use the session or token here to verify user identity
  
      res.json(student.tasks);
    } catch (error) {
      res.status(500).json({ status: 'Error', error: error.message });
    }
  });
  
  // Update Task Status
  router.put('/task/update/:sid/:tid', async (req, res) => {
    const userID = req.params.sid;
    const taskID = req.params.tid;
    const { status } = req.body;
  
    try {
      const student = await Student.findById(userID);
  
      if (!student) {
        return res.status(404).json({ status: 'Not fund', error: 'User not found' });
      }
  
      // Check authorization to update this task
      // You can use the session or token here to verify user identity
  
      const task = student.tasks.id(taskID);
      if (!task) {
        return res.status(404).json({ status: 'Not fou', error: 'Task not found' });
      }
  
      task.status = status;
      await student.save();
  
      res.json('Task Status Updated Successfully');
    } catch (error) {
      res.status(500).json({ status: 'Error', error: error.message });
    }
  });
  
  
  module.exports = router;
  