package com.example.studentmanagement.repository;

import com.example.studentmanagement.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    
    // Check if a user exists by username
    boolean existsByUsername(String username);
    
    // Optional: for login authentication
    User findByUsername(String username);
    boolean existsByEmail(String email);
}
