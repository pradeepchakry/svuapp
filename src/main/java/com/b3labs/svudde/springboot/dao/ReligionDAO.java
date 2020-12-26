package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.Religion;

import java.util.List;

public interface ReligionDAO {

    public List<Religion> get();

    public Religion get(int id);

    public void save(Religion religion);

    public void delete(int id);
}
