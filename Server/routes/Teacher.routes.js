const express = require('express');
const router = express.Router();
const teacherController = require('../controller/Teacher.controller');

// GET: Fetch all teachers
router.get('/', teacherController.getTeachers);

// POST: Add new teacher
router.post('/', teacherController.addTeacher);

// PUT: Update teacher details
router.put('/:id', teacherController.updateTeacher);

// DELETE: Remove teacher
router.delete('/:id', teacherController.removeTeacher);

exports.router = router ;