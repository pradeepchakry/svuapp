package com.b3labs.svudde.springboot.controller;

import com.b3labs.svudde.springboot.model.Employee;
import com.b3labs.svudde.springboot.model.UserProfile;
import com.b3labs.svudde.springboot.service.EmployeeService;
import com.b3labs.svudde.springboot.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/svudde")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @GetMapping("/login/{phone}")
    public UserProfile loginWithPhone(@PathVariable String phone) {
        return loginService.login(phone);
    }

    @GetMapping("/login/{userId}")
    public UserProfile loginWithUserId(@PathVariable String userId) {
        return loginService.login(userId);
    }
}
