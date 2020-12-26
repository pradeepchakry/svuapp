package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.BAGroup;

import java.util.List;

public interface BAGroupDAO {

    List<BAGroup> get();

    BAGroup get(int gid);

    void save(BAGroup baGroup);

    void delete(int gid);
}
