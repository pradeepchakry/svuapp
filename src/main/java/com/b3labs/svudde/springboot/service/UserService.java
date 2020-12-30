package com.b3labs.svudde.springboot.service;

import com.b3labs.svudde.springboot.model.OnlineApplication;
import com.b3labs.svudde.springboot.model.UserLogin;

import java.util.List;

public interface UserService {
    UserLogin createUser();
    List<OnlineApplication> get(Integer id);


}
