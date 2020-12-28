package com.b3labs.svudde.springboot.service;

import com.b3labs.svudde.springboot.dao.OnlineApplicationDAO;
import com.b3labs.svudde.springboot.model.OnlineApplication;
import com.b3labs.svudde.springboot.model.UserProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class ApplyOnlineServiceImpl implements ApplyOnlineService {

    @Autowired
    private OnlineApplicationDAO onlineApplicationDAO;

    @Override
    @Transactional
    public void save(OnlineApplication onlineApplication) {
        onlineApplicationDAO.save(onlineApplication);
    }
}
