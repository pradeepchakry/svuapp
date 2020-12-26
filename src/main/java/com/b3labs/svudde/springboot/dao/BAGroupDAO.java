package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.BAGroup;
import com.b3labs.svudde.springboot.modal.Employee;

import java.util.List;

public interface BAGroupDAO {

    public List<BAGroup> get();

    public BAGroup get(int gid);

    public void save(BAGroup baGroup);

    public void delete(int gid);
}
