package com.b3labs.svudde.springboot.service;

import com.b3labs.svudde.springboot.model.UserProfile;

public interface LoginService {

    boolean login(Integer userId, String password);

    // UserProfile login(String phone);

    boolean login(String phone);
}
