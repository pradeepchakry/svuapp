package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.Employee;

import java.util.List;

public interface EmployeeDAO {
    public List<Employee> get();

    public Employee get(int id);

    public void save(Employee employee);

    public void delete(int id);
}
