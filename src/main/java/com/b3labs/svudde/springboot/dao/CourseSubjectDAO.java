package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.CourseChange;
import com.b3labs.svudde.springboot.modal.CourseSubject;

import java.util.List;

public interface CourseSubjectDAO {

    public List<CourseSubject> get();

    public CourseSubject get(int coursesId);

    public void save(CourseSubject courseSubject);

    public void delete(int coursesId);
}
