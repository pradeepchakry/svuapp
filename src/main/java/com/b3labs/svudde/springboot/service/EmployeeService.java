package com.b3labs.svudde.springboot.service;

import com.b3labs.svudde.springboot.modal.Employee;

import java.util.List;

public interface EmployeeService {
    List<Employee> get();

    Employee get(int id);

    void save(Employee employee);

    void delete(int id);
}
