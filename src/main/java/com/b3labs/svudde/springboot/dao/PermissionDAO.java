package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.Permissions;

import java.util.List;

public interface PermissionDAO {
    public List<Permissions> get();

    public Permissions get(int id);

    public void save(Permissions permissions);

    public void delete(int id);
}
