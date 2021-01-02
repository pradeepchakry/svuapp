package com.b3labs.svudde.springboot.dao;


import com.b3labs.svudde.springboot.model.Student;

import java.util.List;

public interface StudentDAO {

    boolean update(Student student);

    boolean save(Student student);

    Student get(Integer id);

    boolean delete(Integer id);

    List<Student> getAll() ;

    List<Student> getAllStudentsByStudyCentreID(Integer id);

    boolean validateStudent(String mobileNo);

}
