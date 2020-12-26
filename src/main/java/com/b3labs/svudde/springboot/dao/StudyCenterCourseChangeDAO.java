package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.StudyCenterCourseChange;

import java.util.List;

public interface StudyCenterCourseChangeDAO {

    public List<StudyCenterCourseChange> get();

    public StudyCenterCourseChange get(int feeId);

    public void save(StudyCenterCourseChange studyCenterCourseChange);

    public void delete(int feeId);
}
