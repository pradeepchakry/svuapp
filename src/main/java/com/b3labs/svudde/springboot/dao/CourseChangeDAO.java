package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.Caste;
import com.b3labs.svudde.springboot.modal.CourseChange;

import java.util.List;

public interface CourseChangeDAO {

    public List<CourseChange> get();

    public CourseChange get(int feeId);

    public void save(CourseChange courseChange);

    public void delete(int feeId);
}
