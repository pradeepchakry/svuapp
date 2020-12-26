package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.MASCountry;

import java.util.List;

public interface MASCountryDAO {

    List<MASCountry> get();

    MASCountry get(int id);

    void save(MASCountry masCountry);

    void delete(int id);
}
