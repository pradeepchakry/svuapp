package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.StudyCenterChange;

import java.util.List;

public interface StudyCenterChangeDAO {
    List<StudyCenterChange> get();

    StudyCenterChange get(int feeId);

    void save(StudyCenterChange studyCenterChange);

    void delete(int feeId);
}
