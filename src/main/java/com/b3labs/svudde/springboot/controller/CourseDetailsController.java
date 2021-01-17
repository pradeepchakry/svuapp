package com.b3labs.svudde.springboot.controller;

import com.b3labs.svudde.springboot.dao.CourseDetailsDAO;
import com.b3labs.svudde.springboot.dao.StudentDAO;
import com.b3labs.svudde.springboot.dao.StudyCentreDAO;
import com.b3labs.svudde.springboot.model.CourseDetails;
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

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.UUID;

@ControllerAdvice
@RestController
@RequestMapping("/api/v1/")
@Slf4j
public class CourseDetailsController extends ResponseEntityExceptionHandler {
    private final CourseDetailsDAO courseDetailsDAO;
    @Autowired
    public CourseDetailsController( CourseDetailsDAO courseDetailsDAO) {
        this.courseDetailsDAO=courseDetailsDAO;
    }

    @PostMapping("/createCourse")
    public ResponseEntity<CourseDetails> create(@RequestBody CourseDetails courseDetails) {
        boolean result=courseDetailsDAO.save(courseDetails);
        if(result) {
            return ResponseEntity.status(HttpStatus.CREATED).body(courseDetails);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    @PostMapping("/createCourses")
    public ResponseEntity<List<CourseDetails>> create(@RequestBody List<CourseDetails> courseDetails) {
        boolean result=courseDetailsDAO.save(courseDetails);
        if(result) {
            return ResponseEntity.status(HttpStatus.CREATED).body(courseDetails);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @PutMapping("/updateCourse/{id}")
    public ResponseEntity update(@RequestBody CourseDetails inputCourseDetails, @PathVariable Integer id) {
       CourseDetails courseDetails = courseDetailsDAO.get(id);
        if (courseDetails ==null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("student does not belong to any studycenter");
        }
        inputCourseDetails.setCourseID(courseDetails.getCourseID());
        boolean result=courseDetailsDAO.update(inputCourseDetails);
        if(result) {
            return ResponseEntity.status(HttpStatus.OK).body(inputCourseDetails);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/course/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        CourseDetails student = courseDetailsDAO.get(id);
        if (student==null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        boolean result=courseDetailsDAO.delete(id);
        if(result) {
            return ResponseEntity.status(HttpStatus.OK).build();
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/courses")
    public ResponseEntity<List<CourseDetails>> getAll() {

        return ResponseEntity.status(HttpStatus.OK).body(courseDetailsDAO.getAll());
    }
    @GetMapping("/getAllcoursesForStudyCentre")
    public ResponseEntity<List<CourseDetails>> getAllcoursesForStudyCentre() {
        List<CourseDetails> courseDetails=courseDetailsDAO.getAll();
            for (CourseDetails c : courseDetails) {
                String fee = c.getFirstYearFee();
                if (fee != null) {
                    c.setFirstYearFee(String.valueOf(Integer.parseInt(fee) - ((Integer.parseInt(fee) * 30) / 100)));
                }
                fee = c.getSecondYearFee();
                if (fee != null) {
                    c.setSecondYearFee(String.valueOf(Integer.parseInt(fee) - ((Integer.parseInt(fee) * 30) / 100)));
                }
                fee = c.getThirdYearFee();
                if (fee != null) {
                    c.setThirdYearFee(String.valueOf(Integer.parseInt(fee) - ((Integer.parseInt(fee) * 30) / 100)));
                }
            }
        return ResponseEntity.status(HttpStatus.OK).body(courseDetails);
    }

    @GetMapping("/course/{id}")
    public ResponseEntity getById(@PathVariable Integer id) {
        CourseDetails courseDetails = courseDetailsDAO.getCourseDetailsByID(id);
        if (courseDetails==null) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Course Details not present");
        }

        return ResponseEntity.status(HttpStatus.OK).body(courseDetails);
    }



    @ExceptionHandler(value
            = { IllegalArgumentException.class, IllegalStateException.class,Exception.class })
    protected ResponseEntity<Object> handleConflict(
            RuntimeException ex, WebRequest request) {
        String bodyOfResponse = "unable to process request";
        HttpHeaders httpHeaders=new HttpHeaders();
        String CR_ID=UUID.randomUUID().toString();
        httpHeaders.set("CorrelationID",CR_ID);
        log.error("CR_ID:{} AND exception is: {}",CR_ID,ex.fillInStackTrace());
        return handleExceptionInternal(ex, bodyOfResponse,httpHeaders
                , HttpStatus.INTERNAL_SERVER_ERROR, request);
    }
}
