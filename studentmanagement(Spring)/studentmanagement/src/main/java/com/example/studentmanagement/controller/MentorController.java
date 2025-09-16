package com.example.studentmanagement.controller;

import com.example.studentmanagement.model.Mentor;
import com.example.studentmanagement.service.MentorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mentors")
public class MentorController {

    @Autowired
    private MentorService service;

    @GetMapping
    public List<Mentor> getAllMentors() {
        return service.getAllMentors();
    }

    @GetMapping("/{id}")
    public Mentor getMentorById(@PathVariable Long id) {
        return service.getMentorById(id);
    }

    @PostMapping
    public Mentor createMentor(@RequestBody Mentor mentor) {
        return service.createMentor(mentor);
    }

    @PutMapping("/{id}")
    public Mentor updateMentor(@PathVariable Long id, @RequestBody Mentor mentorDetails) {
        return service.updateMentor(id, mentorDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteMentor(@PathVariable Long id) {
        service.deleteMentor(id);
    }
}
