package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.Nationality;

import java.util.List;

public interface NationalityDAO {
    List<Nationality> get();

    Nationality get(int id);

    void save(Nationality nationality);

    void delete(int id);
}
