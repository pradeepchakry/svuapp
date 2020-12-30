package com.b3labs.svudde.springboot.controller;

import com.b3labs.svudde.springboot.model.UserLogin;
import com.b3labs.svudde.springboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/svudde")
public class ManageUserController {

    @Autowired
    UserService userService;

    @PostMapping("/createUser")
    public UserLogin createUserLogin() {
        return userService.createUser();
    }
}
