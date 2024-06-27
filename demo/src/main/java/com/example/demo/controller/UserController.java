package com.example.demo.controller;

import java.util.Optional;

import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.User;


@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")

public class UserController {
    @Autowired
    private UserRepository userRepository;

     @PostMapping("/login")
     public ResponseEntity<String> loginUser(@RequestBody User user) {
         User foundUser = userRepository.findByUsername(user.getUsername());

         if (foundUser != null && foundUser.getPassword().equals(user.getPassword())) {
             return ResponseEntity.ok("Login successful");
         } else {
             return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
         }
     }
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        User findUser = userRepository.findByUsername(user.getUsername());
        if(findUser != null){
            userRepository.save(user);
            return ResponseEntity.ok("User registered successfully");
        }else {
            return ResponseEntity.ok("Please Enter the Details");
        }
    }
}