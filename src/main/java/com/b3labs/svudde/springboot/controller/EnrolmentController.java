package com.b3labs.svudde.springboot.controller;

import com.b3labs.svudde.springboot.model.Employee;
import com.b3labs.svudde.springboot.model.OnlineApplication;
import com.b3labs.svudde.springboot.service.ApplyOnlineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/svudde")
public class EnrolmentController {

    @Autowired
    ApplyOnlineService applyOnlineService;

    @PostMapping("/applyOnline")
    public OnlineApplication save(@RequestBody OnlineApplication onlineApplication) {
        applyOnlineService.save(onlineApplication);
        return onlineApplication;
    }

}
