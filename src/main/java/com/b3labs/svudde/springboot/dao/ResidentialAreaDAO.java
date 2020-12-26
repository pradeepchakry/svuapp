package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.ResidentialArea;

import java.util.List;

public interface ResidentialAreaDAO {

    public List<ResidentialArea> get();

    public ResidentialArea get(int id);

    public void save(ResidentialArea residentialArea);

    public void delete(int id);
}
