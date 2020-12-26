package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.StudyCentres;

import java.util.List;

public interface StudyCentersDAO {

    public List<StudyCentres> get();

    public StudyCentres get(int centreId);

    public void save(StudyCentres studyCentres);

    public void delete(int centreId);
}
