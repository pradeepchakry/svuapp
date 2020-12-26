package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.MASCountry;

import java.util.List;

public interface MASCountryDAO {

    public List<MASCountry> get();

    public MASCountry get(int id);

    public void save(MASCountry masCountry);

    public void delete(int id);
}
