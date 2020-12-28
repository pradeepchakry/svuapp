package com.b3labs.svudde.springboot.service;

import com.b3labs.svudde.springboot.dao.EmployeeDAO;
import com.b3labs.svudde.springboot.dao.UserLoginDAO;
import com.b3labs.svudde.springboot.dao.UserProfileDAO;
import com.b3labs.svudde.springboot.model.Employee;
import com.b3labs.svudde.springboot.model.UserLogin;
import com.b3labs.svudde.springboot.model.UserProfile;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class LoginServiceImpl implements LoginService {

    Logger logger = LoggerFactory.getLogger(LoginServiceImpl.class);

    @Autowired
    private UserProfileDAO userProfileDAO;

    @Autowired
    private UserLoginDAO userLoginDAO;

    @Autowired
    private CreateStudentProfileService createStudentProfileService;

    @Override
    public UserProfile login(String phone) {

        // validate mobile otp authentication (pending)

        if(userProfileDAO.get(phone) == null) {
            createStudentProfileService.createStudentProfile(phone);
        }
        return userProfileDAO.get(phone);
    }

    @Override
    public boolean login(Integer userId, String password) {
        // Not a serious validation (just a placeholder)
        if(userLoginDAO.get(userId) == null) {
            logger.debug("[ >>> USER " + userId + "NOT FOUND <<< ]");
            return false;
        } else {
            UserLogin user = userLoginDAO.get(userId);
            if( !(user.getPassword().equals(password) )) {
                logger.debug("[ >>> INCORRECT PASSWORD <<< ]");
                return false;
            }
        }
        return true;
    }
}
