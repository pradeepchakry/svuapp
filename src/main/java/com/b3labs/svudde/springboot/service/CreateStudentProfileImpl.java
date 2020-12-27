package com.b3labs.svudde.springboot.service;

import com.b3labs.svudde.springboot.dao.UserLoginDAO;
import com.b3labs.svudde.springboot.dao.UserProfileDAO;
import com.b3labs.svudde.springboot.model.UserLogin;
import com.b3labs.svudde.springboot.model.UserProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;

@Service
public class CreateStudentProfileImpl implements CreateStudentProfileService {

    @Autowired
    UserProfileDAO userProfileDAO;

    @Autowired
    UserLoginDAO userLoginDAO;

    @Override
    public UserProfile createStudentProfile(String phone) {
        // create user login with dummies
        UserLogin userLogin = new UserLogin();
        userLogin.setCreatedBy(101);
        userLogin.setDisplay_name("");
        userLogin.setEmail("");
        userLogin.setLastLoginIp("");
        userLogin.setPassword("");
        userLogin.setIs_delete(false);
        userLogin.setActive(true);

        // save userLogin
        Integer userId = userLoginDAO.save(userLogin);

        UserProfile userProfile = new UserProfile();
        userProfile.setUpdatedOn(new Date(System.currentTimeMillis()));
        userProfile.setUserId(userId);
        return userProfile;
    }
}
