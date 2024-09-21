const Teacher = require('../models/Teacher'); // Mongoose model

// GET: Fetch all teachers
exports.getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching teachers' });
    }
}

// POST: Add new teacher
exports.addTeacher = async (req, res) => {
    const { name, qualification, image, contact, subject } = req.body;

    try {
        const newTeacher = new Teacher({ name, qualification, image, contact, subject });
        await newTeacher.save();
        res.json({ message: 'Teacher added successfully', newTeacher });
    } catch (error) {
        res.status(500).json({ message: 'Error adding teacher' });
    }  
}

// PUT: Update teacher details
exports.updateTeacher = async (req, res) => {
    const { id } = req.params;
    const { name, qualification, image, contact, subject } = req.body;

    try {
        const updatedTeacher = await Teacher.findByIdAndUpdate(id, { name, qualification, image, contact, subject }, { new: true });
        res.json({ message: 'Teacher updated successfully', updatedTeacher });
    } catch (error) {
        res.status(500).json({ message: 'Error updating teacher' });
    }
}

// DELETE: Remove teacher
exports.removeTeacher = async (req, res) => {
    try {
        await Teacher.findByIdAndDelete(req.params.id);
        res.json({ message: 'Teacher removed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing teacher' });
    }
}
