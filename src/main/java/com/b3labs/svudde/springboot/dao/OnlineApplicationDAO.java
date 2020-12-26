package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.OnlineApplication;

import java.util.List;

public interface OnlineApplicationDAO {
    public List<OnlineApplication> get();

    public OnlineApplication get(int id);

    public void save(OnlineApplication onlineApplication);

    public void delete(int id);
}
