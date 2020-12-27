package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.Permissions;

import java.util.List;

public interface PermissionsDAO {
    List<Permissions> get();

    Permissions get(int id);

    void save(Permissions permissions);

    void delete(int id);
}
