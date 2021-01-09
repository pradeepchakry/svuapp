package com.b3labs.svudde.springboot.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
@Entity
@Table(name = "courses")
public class CourseDetails {

    public Integer getCourseID() {
        return courseID;
    }

    public void setCourseID(Integer courseID) {
        this.courseID = courseID;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "course_id")
    private int courseID;

    public String getCourseSubject() {
        return courseSubject;
    }

    public void setCourseSubject(String courseSubject) {
        this.courseSubject = courseSubject;
    }

    public String getFirstYearFee() {
        return firstYearFee;
    }

    public void setFirstYearFee(String firstYearFee) {
        this.firstYearFee = firstYearFee;
    }

    public String getSecondYearFee() {
        return secondYearFee;
    }

    public void setSecondYearFee(String secondYearFee) {
        this.secondYearFee = secondYearFee;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getCourseMedium() {
        return courseMedium;
    }

    public void setCourseMedium(String courseMedium) {
        this.courseMedium = courseMedium;
    }

    @Column(name = "course_subject")
    private String courseSubject;

    @Column(name = "first_year_fees")
    private String firstYearFee;

    @Column(name = "second_year_fees")
    private String secondYearFee;

    public String getThirdYearFee() {
        return thirdYearFee;
    }

    public void setThirdYearFee(String thirdYearFee) {
        this.thirdYearFee = thirdYearFee;
    }

    @Column(name = "third_year_fees")
    private String thirdYearFee;

    @Column(name = "duration")
    private String duration;

    @Column(name = "course_medium")
    private String courseMedium;

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

    public Date getModifiedOn() {
        return modifiedOn;
    }

    public void setModifiedOn(Date modifiedOn) {
        this.modifiedOn = modifiedOn;
    }

    @CreationTimestamp
    @Column(name = "created_on")
    private Date createdOn;

    @UpdateTimestamp
    @Column(name = "modified_on")
    private Date modifiedOn;
}
