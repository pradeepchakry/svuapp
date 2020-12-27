package com.b3labs.svudde.springboot.service;

import com.b3labs.svudde.springboot.dao.EmployeeDAO;
import com.b3labs.svudde.springboot.dao.UserLoginDAO;
import com.b3labs.svudde.springboot.dao.UserProfileDAO;
import com.b3labs.svudde.springboot.model.Employee;
import com.b3labs.svudde.springboot.model.UserLogin;
import com.b3labs.svudde.springboot.model.UserProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private UserProfileDAO userProfileDAO;

    @Autowired
    private UserLoginDAO userLoginDAO;

    @Override
    public UserProfile login(String phone) {

        // implement login

        // check if phone number exists
        // validate OTP handled in Controller
        if(userProfileDAO.get(phone) == null) {
            UserProfile userProfile = new UserProfile();
            userProfileDAO.save(userProfile);
        }
        return userProfileDAO.get(phone);
    }

    @Override
    public boolean login(Integer userId, String password) {

        // implement login
        if(userLoginDAO.get(userId) == null)
            return false;
        else
            return true;
    }
}
