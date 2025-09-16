package com.example.studentmanagement.service;

import com.example.studentmanagement.model.Enrollment;
import com.example.studentmanagement.repository.EnrollmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnrollmentService {

    @Autowired
    private EnrollmentRepository repo;

    public List<Enrollment> getAllEnrollments() {
        return repo.findAll();
    }

    public Enrollment createEnrollment(Enrollment enrollment) {
        return repo.save(enrollment);
    }

    public void deleteEnrollment(Long id) {
        repo.deleteById(id);
    }
}
