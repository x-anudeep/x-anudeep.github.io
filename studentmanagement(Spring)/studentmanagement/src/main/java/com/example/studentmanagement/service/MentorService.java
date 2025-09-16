package com.example.studentmanagement.service;

import com.example.studentmanagement.exception.ResourceNotFoundException;
import com.example.studentmanagement.model.Mentor;
import com.example.studentmanagement.repository.MentorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MentorService {

    @Autowired
    private MentorRepository repo;

    public List<Mentor> getAllMentors() {
        return repo.findAll();
    }

    public Mentor getMentorById(Long id) {
        return repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Mentor not found"));
    }

    public Mentor createMentor(Mentor mentor) {
        return repo.save(mentor);
    }

    public Mentor updateMentor(Long id, Mentor mentorDetails) {
        Mentor mentor = getMentorById(id);
        mentor.setName(mentorDetails.getName());
        mentor.setEmail(mentorDetails.getEmail());
        return repo.save(mentor);
    }

    public void deleteMentor(Long id) {
        repo.deleteById(id);
    }
}
