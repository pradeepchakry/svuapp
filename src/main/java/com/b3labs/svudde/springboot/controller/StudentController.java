package com.b3labs.svudde.springboot.controller;

import com.b3labs.svudde.springboot.dao.CourseDetailsDAO;
import com.b3labs.svudde.springboot.dao.StudentDAO;
import com.b3labs.svudde.springboot.dao.StudyCentreDAO;
import com.b3labs.svudde.springboot.model.Student;
import com.b3labs.svudde.springboot.model.StudyCentre;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.Calendar;
import java.util.List;
import java.util.UUID;

@ControllerAdvice
@RestController
@RequestMapping("/api/v1/")
@Slf4j
public class StudentController extends ResponseEntityExceptionHandler {
    private final StudyCentreDAO studyCentreDAO;
    private final StudentDAO studentDAO;
    private final CourseDetailsDAO courseDetailsDAO;
    @Autowired
    public StudentController(StudyCentreDAO studyCentreDAO,StudentDAO studentDAO,CourseDetailsDAO courseDetailsDAO) {
        this.studyCentreDAO = studyCentreDAO;
        this.studentDAO =studentDAO;
        this.courseDetailsDAO=courseDetailsDAO;
    }

    @PostMapping("/createStudent")
    public ResponseEntity<Student> create(@RequestBody Student student) {
        student.setStudyCentre(null);
        student.setCentre(null);
        student.setCodeNo(null);
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
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Student not present");
        }

        return ResponseEntity.status(HttpStatus.OK).body(student);
    }

    @GetMapping("/Students/{StudyCentreId}")
    public ResponseEntity<List<Student>> getByStudyCentreId(@PathVariable Integer StudyCentreId, Pageable pageable) {
        List<Student> students= studentDAO.getAllStudentsByStudyCentreID(StudyCentreId);
        return ResponseEntity.status(HttpStatus.OK).body(students);
    }
    @GetMapping("/Student/{mobileNo}")
    public ResponseEntity<Student> getStudentDetailsByMobileNo(@PathVariable String mobileNo) {
        Student student = studentDAO.getStudentDetailsByMobileNo(mobileNo);
        if(student ==null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } else {
            return ResponseEntity.status(HttpStatus.OK).body(student);
        }
    }

    @ExceptionHandler(value
            = { IllegalArgumentException.class, IllegalStateException.class,Exception.class })
    protected ResponseEntity<Object> handleConflict(
            RuntimeException ex, WebRequest request) {
        String bodyOfResponse = "unable to process request";
        HttpHeaders httpHeaders=new HttpHeaders();
        String CR_ID=UUID.randomUUID().toString();
        httpHeaders.set("CorrelationID",CR_ID);
        //log.error("CR_ID:{} AND exception is: {}",CR_ID,ex.fillInStackTrace());
        return handleExceptionInternal(ex, bodyOfResponse,httpHeaders
                , HttpStatus.INTERNAL_SERVER_ERROR, request);
    }
}
