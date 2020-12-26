package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.UserProfile;

import java.util.List;

public interface UserProfileDAO {

    public List<UserProfile> get();

    public UserProfile get(int id);

    public void save(UserProfile userProfile);

    public void delete(int id);
}
