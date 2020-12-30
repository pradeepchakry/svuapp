package com.b3labs.svudde.springboot.service;

import com.b3labs.svudde.springboot.model.OnlineApplication;

public interface OnlineApplicationService {

    void save(OnlineApplication onlineApplication);

    OnlineApplication findApplicationById(Integer id);

    void delete(Integer id);

}
