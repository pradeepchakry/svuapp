package com.b3labs.svudde.springboot.controller;

import com.b3labs.svudde.springboot.dao.StudentDAO;
import com.b3labs.svudde.springboot.dao.StudyCentreDAO;
import com.b3labs.svudde.springboot.model.Student;
import com.b3labs.svudde.springboot.model.StudyCentre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class StudentController {
    private final StudyCentreDAO studyCentreDAO;
    private final StudentDAO studentDAO;
    @Autowired
    public StudentController(StudyCentreDAO studyCentreDAO,StudentDAO studentDAO) {
        this.studyCentreDAO = studyCentreDAO;
        this.studentDAO =studentDAO;
    }

    @PostMapping("/createStudent")
    public ResponseEntity<Student> create(@RequestBody Student student) {
        //student.setStudyCentre(null);
        student.setCentre(null);
        student.setCodeNo(null);
        java.sql.Timestamp timestamp = new java.sql.Timestamp(Calendar.getInstance().getTime().getTime());
        student.setCreatedOn(timestamp);
        student.setUpdatedOn(timestamp);
        boolean result=studentDAO.save(student);
        if(result) {
            return ResponseEntity.status(HttpStatus.CREATED).body(student);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    @PostMapping("/createStudentByStudyCenter/{id}")
    public ResponseEntity createStudentByStudyCenter(@RequestBody Student student, @PathVariable int id) {

        StudyCentre studyCentre = studyCentreDAO.get(id);
        if (studyCentre==null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("not a valid study center");
        }
        student.setCentre(studyCentre.getName());
        student.setCodeNo(studyCentre.getcode_no());
        student.setStudyCentre(studyCentre);
        java.sql.Timestamp timestamp = new java.sql.Timestamp(Calendar.getInstance().getTime().getTime());
        student.setCreatedOn(timestamp);
        student.setUpdatedOn(timestamp);
        boolean result=studentDAO.save(student);
        if(result) {
            return ResponseEntity.status(HttpStatus.CREATED).body(student);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    @PutMapping("/updateStudentByStudyCenter/{id}")
    public ResponseEntity update(@RequestBody Student student, @PathVariable Integer id) {
       Student optionalStudent = studentDAO.get(id);
        if (optionalStudent ==null || optionalStudent.getCentre() ==null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("student does not belong to any studycenter");
        } else {
            student.setCentre(optionalStudent.getCentre());
            student.setCodeNo(optionalStudent.getCodeNo());
            student.setStudyCentre(optionalStudent.getStudyCentre());
        }
        java.sql.Timestamp timestamp = new java.sql.Timestamp(Calendar.getInstance().getTime().getTime());
        student.setCreatedOn(optionalStudent.getCreatedOn());
        student.setUpdatedOn(timestamp);
        student.setStudent_id(optionalStudent.getStudent_id());
        boolean result=studentDAO.update(student);
        if(result) {
            return ResponseEntity.status(HttpStatus.OK).body(student);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        Student student = studentDAO.get(id);
        if (student==null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        boolean result=studentDAO.delete(id);
        if(result) {
            return ResponseEntity.status(HttpStatus.OK).build();
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping
    public ResponseEntity getAll() {

        return ResponseEntity.status(HttpStatus.OK).body(studentDAO.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable Integer id) {
        Student student = studentDAO.get(id);
        if (student==null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Student not present");
        }

        return ResponseEntity.status(HttpStatus.OK).body(student);
    }

    @GetMapping("/Students/{StudyCentreId}")
    public ResponseEntity<List<Student>> getByStudyCentreId(@PathVariable Integer StudyCentreId, Pageable pageable) {
        List<Student> students= studentDAO.getAllStudentsByStudyCentreID(StudyCentreId);
        return ResponseEntity.status(HttpStatus.OK).body(students);
    }
    @GetMapping("/mobileNo/{mobileNo}")
    public ResponseEntity getByMobileNo(@PathVariable String mobileNo) {
        boolean result = studentDAO.validateStudent(mobileNo);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}
