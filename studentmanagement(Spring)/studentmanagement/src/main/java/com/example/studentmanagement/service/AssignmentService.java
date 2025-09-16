package com.example.studentmanagement.service;

import com.example.studentmanagement.exception.ResourceNotFoundException;
import com.example.studentmanagement.model.Assignment;
import com.example.studentmanagement.repository.AssignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssignmentService {

    @Autowired
    private AssignmentRepository repo;

    public List<Assignment> getAllAssignments() {
        return repo.findAll();
    }

    public Assignment getAssignmentById(Long id) {
        return repo.findById(id)
                   .orElseThrow(() -> new ResourceNotFoundException("Assignment not found with id " + id));
    }

    public Assignment createAssignment(Assignment assignment) {
        return repo.save(assignment);
    }

    public Assignment updateAssignment(Long id, Assignment details) {
        Assignment assignment = getAssignmentById(id);
        assignment.setTitle(details.getTitle());
        assignment.setDescription(details.getDescription());
        assignment.setCourse(details.getCourse());
        assignment.setMentor(details.getMentor());
        return repo.save(assignment);
    }

    public void deleteAssignment(Long id) {
        repo.deleteById(id);
    }
}
