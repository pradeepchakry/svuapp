package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.UserLogin;

import java.util.List;

public interface UserLoginDAO {

    List<UserLogin> get();

    UserLogin get(int userId);

    void save(UserLogin userLogin);

    void delete(int userId);
}
