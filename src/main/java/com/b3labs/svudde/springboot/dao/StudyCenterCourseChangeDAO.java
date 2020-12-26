package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.StudyCenterCourseChange;

import java.util.List;

public interface StudyCenterCourseChangeDAO {

    List<StudyCenterCourseChange> get();

    StudyCenterCourseChange get(int feeId);

    void save(StudyCenterCourseChange studyCenterCourseChange);

    void delete(int feeId);
}
