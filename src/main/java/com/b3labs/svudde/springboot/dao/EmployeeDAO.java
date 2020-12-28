package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.Employee;

import java.util.List;

public interface EmployeeDAO {
    List<Employee> get();

    Employee get(int id);

    void save(Employee employee);

    void delete(int id);
}
