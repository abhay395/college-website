const Student = require('../models/Student');

// Create and save a new student
exports.create = async (req, res) => {
    const { name, image, cgpa, course, year ,rank,examYear} = req.body;

    try {
        const newStudent = new Student({ name, image, cgpa, course, year, rank,examYear});
        await newStudent.save();
        res.status(201).json({ message: 'Student created successfully', newStudent });
    } catch (error) {
        res.status(500).json({ message: 'Error creating student', error });
    }
};

// Retrieve all students
exports.findAll = async (req, res) => {
    const { year, examYear,sort, course } = req.query;
    const queryObject = {};
    if(year){
        queryObject.year = year;
    }
    if(examYear){
        queryObject.examYear = examYear;
    }
    if(course){
        queryObject.course = course;
    }
    const students =  Student.find(queryObject);
    if(sort){
        const sortList = sort.split(',').join(' ');
        students.sort(sortList);
    }
    try {
       const studentlist= await students;
        res.status(200).json(studentlist);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching students', error });
    }
};

// Retrieve a single student by ID
exports.findOne = async (req, res) => {
    try {
        const student = await Student.findById(req.params.studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching student', error });
    }
};

// Update student details by ID
exports.update = async (req, res) => {
    const { name, image, cgpa, course, year } = req.body;

    try {
        const student = await Student.findByIdAndUpdate(
            req.params.studentId,
            { name, image, cgpa, course, year,rank ,examYear},
            { new: true }
        );
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student updated successfully', student });
    } catch (error) {
        res.status(500).json({ message: 'Error updating student', error });
    }
};

// Delete a student by ID
exports.delete = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting student', error });
    }
};
