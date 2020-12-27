package com.b3labs.svudde.springboot.service;

import com.b3labs.svudde.springboot.dao.EmployeeDAO;
import com.b3labs.svudde.springboot.dao.UserLoginDAO;
import com.b3labs.svudde.springboot.dao.UserProfileDAO;
import com.b3labs.svudde.springboot.model.UserLogin;
import com.b3labs.svudde.springboot.model.UserProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Date;

@Service
@Configurable
public class CreateStudentProfileImpl implements CreateStudentProfileService {

    @Autowired
    UserProfileDAO userProfileDAO;

    @Autowired
    UserLoginDAO userLoginDAO;

    @Autowired
    EmployeeDAO employeeDAO;

    @Override
    @Transactional
    public UserProfile createStudentProfile(String phone) {
        // create user login with dummies
        UserLogin userLogin = new UserLogin();
        userLogin.setActivationCode("1");
        userLogin.setCreatedBy(101);
        userLogin.setDisplay_name("");
        userLogin.setEmail("");
        userLogin.setLastLoginIp("");
        userLogin.setPassword("");
        userLogin.setIs_delete(false);
        userLogin.setActive(true);
        userLogin.setCreatedOn(new Date(System.currentTimeMillis()));
        userLogin.setLastLogin(new Date(System.currentTimeMillis()));
        userLogin.setModifiedOn(new Date(System.currentTimeMillis()));
        userLogin.setPhone(phone);

        // save userLogin
        Integer userId = userLoginDAO.save(userLogin);

        UserProfile userProfile = new UserProfile();
        userProfile.setUpdatedOn(new Date(System.currentTimeMillis()));
        userProfile.setUserId(userId);
        userProfile.setPhoneNo(phone);
        userProfileDAO.save(userProfile);
        return userProfile;
    }
}
