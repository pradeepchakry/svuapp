package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.UserProfile;

import java.util.List;

public interface UserProfileDAO {

    List<UserProfile> get();

    UserProfile get(int id);

    UserProfile get(String phone);

    void save(UserProfile userProfile);

    void delete(int id);
}
