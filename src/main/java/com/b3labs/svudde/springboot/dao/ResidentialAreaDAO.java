package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.ResidentialArea;

import java.util.List;

public interface ResidentialAreaDAO {

    List<ResidentialArea> get();

    ResidentialArea get(int id);

    void save(ResidentialArea residentialArea);

    void delete(int id);
}
