package com.b3labs.svudde.springboot.service;

import com.b3labs.svudde.springboot.dao.UserLoginDAO;
import com.b3labs.svudde.springboot.dao.UserProfileDAO;
import com.b3labs.svudde.springboot.model.Employee;
import com.b3labs.svudde.springboot.model.UserLogin;
import com.b3labs.svudde.springboot.model.UserProfile;
import com.b3labs.svudde.springboot.utilities.Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class CreateUserServiceImpl implements CreateUserService {
    @Autowired
    private UserProfileDAO userProfileDAO;

    @Autowired
    private UserLoginDAO userLoginDAO;

    @Override
    public UserLogin createUser() {
        Integer userId = Util.generateRandomUserId();
        String password = "User12345";
        UserLogin userLogin = new UserLogin();
        return userLogin;
    }

    @Transactional
    public void save(UserProfile userProfile) {
        userProfileDAO.save(userProfile);
    }

    @Transactional
    public void save(UserLogin userLogin) { userLoginDAO.save(userLogin);}
}
