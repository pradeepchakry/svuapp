package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.Modules;

import java.util.List;

public interface ModulesDAO {

    public List<Modules> get();

    public Modules get(int id);

    public void save(Modules modules);

    public void delete(int id);
}
