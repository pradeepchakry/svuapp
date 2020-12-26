package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.Religion;

import java.util.List;

public interface ReligionDAO {

    List<Religion> get();

    Religion get(int id);

    void save(Religion religion);

    void delete(int id);
}
