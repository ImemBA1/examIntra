package com.example.examintra.service;

import com.example.examintra.model.User;
import com.example.examintra.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User create(User user){
        int MIN = 1;
        int MAX = 6;
        user.setCoupRandom(MIN + (int)(Math.random() * ((MAX - MIN) + 1)));
        user.setMatch(user.getCoup() == user.getCoupRandom());
        return userRepository.save(user);
    }

    public List<User> findAllUsers(){
        return userRepository.findAll();
    }
}
