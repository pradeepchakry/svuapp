package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.UserProfile;

import java.util.List;

public interface UserProfileDAO {

    List<UserProfile> get();

    UserProfile get(int id);

    void save(UserProfile userProfile);

    void delete(int id);
}
