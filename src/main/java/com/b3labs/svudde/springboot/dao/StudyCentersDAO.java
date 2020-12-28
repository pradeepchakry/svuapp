package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.StudyCenters;

import java.util.List;

public interface StudyCentersDAO {

    List<StudyCenters> get();

    StudyCenters get(int centreId);

    void save(StudyCenters studyCenters);

    void delete(int centreId);
}
