package com.b3labs.svudde.springboot.service;

import com.b3labs.svudde.springboot.dao.OnlineApplicationDAO;
import com.b3labs.svudde.springboot.dao.UserLoginDAO;
import com.b3labs.svudde.springboot.dao.UserProfileDAO;
import com.b3labs.svudde.springboot.model.OnlineApplication;
import com.b3labs.svudde.springboot.model.UserLogin;
import com.b3labs.svudde.springboot.model.UserProfile;
import com.b3labs.svudde.springboot.utilities.Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.transaction.Transactional;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserProfileDAO userProfileDAO;

    @Autowired
    private UserLoginDAO userLoginDAO;

    @Autowired
    private OnlineApplicationDAO onlineApplicationDAO;

    @Override
    public UserLogin createUser() {
        Integer userId = Util.generateRandomUserId();
        String password = "User12345";
        UserLogin userLogin = new UserLogin();
        return userLogin;
    }

    @Override
    public List<OnlineApplication> get(Integer id) {
        return onlineApplicationDAO.getAllApplications(id);
    }

    @Transactional
    public void save(UserProfile userProfile) {
        userProfileDAO.save(userProfile);
    }

    @Transactional
    public void save(UserLogin userLogin) { userLoginDAO.save(userLogin);}
}
