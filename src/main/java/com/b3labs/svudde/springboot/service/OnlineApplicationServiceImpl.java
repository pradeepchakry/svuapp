package com.b3labs.svudde.springboot.service;

import com.b3labs.svudde.springboot.dao.OnlineApplicationDAO;
import com.b3labs.svudde.springboot.model.OnlineApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class OnlineApplicationServiceImpl implements OnlineApplicationService {

    @Autowired
    OnlineApplicationDAO onlineApplicationDAO;

    @Override
    @Transactional
    public Integer save(OnlineApplication onlineApplication) {
        return onlineApplicationDAO.save(onlineApplication);
    }

    @Override
    public OnlineApplication findApplicationById(Integer id) {
        return onlineApplicationDAO.get(id);
    }
}
