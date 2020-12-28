package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.CourseSubject;

import java.util.List;

public interface CourseSubjectDAO {

    List<CourseSubject> get();

    CourseSubject get(int coursesId);

    void save(CourseSubject courseSubject);

    void delete(int coursesId);
}
