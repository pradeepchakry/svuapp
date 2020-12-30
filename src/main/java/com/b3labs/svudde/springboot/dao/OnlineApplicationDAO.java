package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.OnlineApplication;

import javax.management.ObjectName;
import java.io.Serializable;
import java.util.List;

public interface OnlineApplicationDAO {
    List<OnlineApplication> get();

    OnlineApplication get(int id);

    void save(OnlineApplication onlineApplication);

    void delete(int id);

    List<OnlineApplication> getAllApplications(int id);
}
