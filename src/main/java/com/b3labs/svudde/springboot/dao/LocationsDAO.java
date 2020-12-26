package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.Locations;

import java.util.List;

public interface LocationsDAO {

    List<Locations> get();

    Locations get(int locationId);

    void save(Locations locations);

    void delete(int locationId);
}
