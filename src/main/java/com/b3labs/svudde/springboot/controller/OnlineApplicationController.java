package com.b3labs.svudde.springboot.controller;

import com.b3labs.svudde.springboot.model.OnlineApplication;
import com.b3labs.svudde.springboot.service.OnlineApplicationService;
import com.b3labs.svudde.springboot.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/svudde")
public class OnlineApplicationController {
    Logger logger = LoggerFactory.getLogger(LoginController.class);

    @Autowired
    private OnlineApplicationService applicationService;

    @Autowired
    private UserService userService;

    @PostMapping("/saveForm")
    public void saveForm(@RequestBody OnlineApplication application) {
        logger.info("[ << Saving Application >> ]");
        logger.info(application.toString());
        applicationService.save(application);
    }

    @PostMapping("/updateForm/{studentId}")
    public void updateForm(@PathVariable String studentId, Model model) {
        logger.info("[ << updating Application >> ]");
        OnlineApplication onlineApplication=applicationService.findApplicationById(Integer.valueOf(studentId));
        model.addAttribute("OnlineApplication", onlineApplication);
        applicationService.save(onlineApplication);
    }

    @GetMapping("/getForm/{studentId}")
    public OnlineApplication getForm(@PathVariable String studentId) {
        logger.info("[ << Saving Application >> ]");
        return applicationService.findApplicationById(Integer.valueOf(studentId));
    }

    @GetMapping("/getAll/{user_id}")
    public List<OnlineApplication> getAllApplications(@PathVariable String user_id) {
        logger.info("[ << Saving Application >> ]");
        return userService.get(Integer.valueOf(user_id));
    }
    @DeleteMapping("/deleteForm/{studentId}")
    public void deleteForm(@PathVariable String studentId) {
        logger.info("[ << Saving Application >> ]");
        applicationService.delete(Integer.valueOf(studentId));
    }

}
