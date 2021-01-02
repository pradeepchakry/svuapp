package com.b3labs.svudde.springboot.controller;

import com.b3labs.svudde.springboot.model.UserProfile;
import com.b3labs.svudde.springboot.service.LoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/svudde")
public class LoginController {

    Logger logger = LoggerFactory.getLogger(LoginController.class);

    @Autowired
    private LoginService loginService;

    @GetMapping("/loginPhone/{phone}")
    public boolean loginWithPhone(@PathVariable String phone) {
        logger.info("[ << LOGGING IN WITH PHONE " + phone + " >> ]");
        return loginService.login(phone);
    }

    @GetMapping("/loginUser/{userId}")
    public boolean loginWithUserId(@PathVariable String userId) {
        return loginService.login(userId);
    }
}
