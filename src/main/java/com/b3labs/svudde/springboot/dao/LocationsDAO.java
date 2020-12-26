package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.Locations;

import java.util.List;

public interface LocationsDAO {

    public List<Locations> get();

    public Locations get(int locationId);

    public void save(Locations locations);

    public void delete(int locationId);
}
