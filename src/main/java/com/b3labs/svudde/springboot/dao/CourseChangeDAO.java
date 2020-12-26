package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.CourseChange;

import java.util.List;

public interface CourseChangeDAO {

    List<CourseChange> get();

    CourseChange get(int feeId);

    void save(CourseChange courseChange);

    void delete(int feeId);
}
