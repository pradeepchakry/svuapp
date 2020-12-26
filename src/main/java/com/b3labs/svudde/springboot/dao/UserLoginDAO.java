package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.UserLogin;

import java.util.List;

public interface UserLoginDAO {

    public List<UserLogin> get();

    public UserLogin get(int userId);

    public void save(UserLogin userLogin);

    public void delete(int userId);
}
