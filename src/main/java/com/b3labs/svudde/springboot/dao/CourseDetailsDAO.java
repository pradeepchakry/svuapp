package com.b3labs.svudde.springboot.dao;


import com.b3labs.svudde.springboot.model.CourseDetails;
import com.b3labs.svudde.springboot.model.Student;

import java.util.List;

public interface CourseDetailsDAO {

    boolean update(CourseDetails courseDetails);

    boolean save(CourseDetails courseDetails);

    boolean save(List<CourseDetails> courseDetails);

    CourseDetails get(Integer id);

    boolean delete(Integer id);

    List<CourseDetails> getAll() ;

    CourseDetails getCourseDetailsByID(Integer id);

    CourseDetails getCourseDetailsByName(String courseName);
}
