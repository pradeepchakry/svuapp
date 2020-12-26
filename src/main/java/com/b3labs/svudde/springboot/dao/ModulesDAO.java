package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.Modules;

import java.util.List;

public interface ModulesDAO {

    List<Modules> get();

    Modules get(int id);

    void save(Modules modules);

    void delete(int id);
}
