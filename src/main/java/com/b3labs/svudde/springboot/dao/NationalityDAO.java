package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.Nationality;

import java.util.List;

public interface NationalityDAO {
    public List<Nationality> get();

    public Nationality get(int id);

    public void save(Nationality nationality);

    public void delete(int id);
}
