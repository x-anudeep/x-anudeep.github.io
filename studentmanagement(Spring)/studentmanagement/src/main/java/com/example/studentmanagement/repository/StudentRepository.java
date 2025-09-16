package com.example.studentmanagement.repository;

import com.example.studentmanagement.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
@Override
	default List<Student> findAll() {
		// TODO Auto-generated method stub
		return null;
	}
    // Basic CRUD operations are already provided by JpaRepository:
    // - findAll() - Get all students
    // - findById() - Get student by ID
    // - save() - Create or update a student
    // - deleteById() - Delete a student by ID

    // Custom query (if needed) can be added, for example:
    Optional<Student> findByEmail(String email);  // Example custom query for finding student by email
}
