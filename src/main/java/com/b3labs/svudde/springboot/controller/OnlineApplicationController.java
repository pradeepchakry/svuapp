package com.b3labs.svudde.springboot.controller;

import com.b3labs.svudde.springboot.model.OnlineApplication;
import com.b3labs.svudde.springboot.model.UserProfile;
import com.b3labs.svudde.springboot.service.LoginService;
import com.b3labs.svudde.springboot.service.OnlineApplicationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/svudde")
public class OnlineApplicationController {
    Logger logger = LoggerFactory.getLogger(LoginController.class);

    @Autowired
    private OnlineApplicationService applicationService;

    @PostMapping("/saveForm")
    public Integer loginWithPhone(@RequestBody OnlineApplication application) {
        logger.info("[ << Saving Application >> ]");
        logger.info(application.toString());
        return applicationService.save(application);
    }

    @GetMapping("/getForm/{studentId}")
    public OnlineApplication loginWithPhone(@PathVariable String studentId) {
        logger.info("[ << Saving Application >> ]");
        return applicationService.findApplicationById(Integer.valueOf(studentId));
    }
}
