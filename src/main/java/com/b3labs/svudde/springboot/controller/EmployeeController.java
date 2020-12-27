package com.b3labs.svudde.springboot.controller;

import com.b3labs.svudde.springboot.model.Employee;
import com.b3labs.svudde.springboot.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/employee")
    public List<Employee> get() {
        return employeeService.get();
    }

    @PostMapping("/employee")
    public Employee save(@RequestBody Employee employee) {
        employeeService.save(employee);
        return employee;
    }

    @GetMapping("/employee/{id}")
    public Employee get(@PathVariable int id) {
        return employeeService.get(id);
    }

    @DeleteMapping("/employee/{id}")
    public String delete(@PathVariable int id) {
        employeeService.delete(id);
        return "Employee removed with id " + id;
    }
}
