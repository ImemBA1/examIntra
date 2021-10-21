package com.example.examintra.controller;

import com.example.examintra.model.User;
import com.example.examintra.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/coup")
    public ResponseEntity<?> coup(@RequestBody User user){
        User userCreated;
        userCreated = userService.create(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(userCreated);
    }
    

    @GetMapping("/users")
    public ResponseEntity<?> findAllUsers(){
        List<User> userList = userService.findAllUsers();
        return ResponseEntity.ok(userList);
    }
}
