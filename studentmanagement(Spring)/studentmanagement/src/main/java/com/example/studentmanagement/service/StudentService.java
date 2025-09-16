package com.example.studentmanagement.service;


import com.example.studentmanagement.exception.ResourceNotFoundException;
import com.example.studentmanagement.model.Student;
import com.example.studentmanagement.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;

    // Get all students
    public List<Student> getAllStudents() {
        return repo.findAll();
    }

    // Get student by ID
    public Student getStudentById(Long id) {
        return repo.findById(id)
                   .orElseThrow(() -> new ResourceNotFoundException("Student not found"));
    }

    // Create new student
    public Student createStudent(Student student) {
        return repo.save(student);
    }

    // Update student
    public Student updateStudent(Long id, Student studentDetails) {
        Student student = getStudentById(id);
        student.setName(studentDetails.getName());
        student.setEmail(studentDetails.getEmail());
        student.setCourse(studentDetails.getCourse());
        return repo.save(student);
    }

    // Delete student by ID
    public void deleteStudent(Long id) {
        Student student = getStudentById(id);
        repo.deleteById(id);
    }
}
