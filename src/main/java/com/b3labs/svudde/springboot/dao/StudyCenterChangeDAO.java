package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.StudyCenterChange;

import java.util.List;

public interface StudyCenterChangeDAO {
    public List<StudyCenterChange> get();

    public StudyCenterChange get(int feeId);

    public void save(StudyCenterChange studyCenterChange);

    public void delete(int feeId);
}
