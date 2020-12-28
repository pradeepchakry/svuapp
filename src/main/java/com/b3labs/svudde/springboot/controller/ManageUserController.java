package com.b3labs.svudde.springboot.controller;

import com.b3labs.svudde.springboot.model.OnlineApplication;
import com.b3labs.svudde.springboot.model.UserLogin;
import com.b3labs.svudde.springboot.model.UserProfile;
import com.b3labs.svudde.springboot.service.CreateUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/svudde")
public class ManageUserController {

    @Autowired
    CreateUserService createUserService;

    @PostMapping("/createUser")
    public UserLogin createUserLogin() {
        return createUserService.createUser();
    }
}
