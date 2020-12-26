package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.Academics;

import java.util.List;

public interface AcademicsDAO {
    List<Academics> get();

    Academics get(int id);

    void save(Academics academics);

    void delete(int id);

}
