package com.b3labs.svudde.springboot.modal;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "course_subject")
public class CourseSubject {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, name = "courses_id")
    private Integer coursesId;

    @Column(nullable = false, name = "course_code")
    private int courseCode;

    @Column(name = "course_subject")
    private String courseSubject;

    @Column(name = "degree")
    private String degree;

    @Column(nullable = false, name = "eligibility")
    private String eligibility;

    @Column(nullable = false, name = "duration_year")
    private String durationYear;

    @Column(nullable = false, name = "academic_year")
    private String academicYear;

    @Column(nullable = false, name = "firstyear_dde_fee")
    private int firstYearDDEFee;

    @Column(nullable = false, name = "firstyear_sc_fee")
    private int firstYearSCFee;

    @Column(nullable = false, name = "secondyear_dde_fee")
    private int secondYearDDEFee;

    @Column(nullable = false, name = "secondyear_sc_fee")
    private int secondYearSCFee;

    @Column(nullable = false, name = "thirdyear_dde_fee")
    private int thirdYearDDEFee;

    @Column(nullable = false, name = "thirdyear_sc_fee")
    private int thirdYearSCFee;

    @Column(name = "created_by")
    private Integer createdBy;

    @Column(name = "created_on")
    private Date createdOn;

    @Column(name = "modified_on")
    private Date modifiedOn;

    @Column(name = "modified_by")
    private Integer modifiedBy;

    @Column(nullable = false, columnDefinition = "TINYINT(1)", name = "is_active")
    private boolean isActive;

    @Column(nullable = false, columnDefinition = "TINYINT(1)", name = "is_delete")
    private boolean is_delete;

    public Integer getCoursesId() {
        return coursesId;
    }

    public void setCoursesId(Integer coursesId) {
        this.coursesId = coursesId;
    }

    public int getCourseCode() {
        return courseCode;
    }

    public void setCourseCode(int courseCode) {
        this.courseCode = courseCode;
    }

    public String getCourseSubject() {
        return courseSubject;
    }

    public void setCourseSubject(String courseSubject) {
        this.courseSubject = courseSubject;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getEligibility() {
        return eligibility;
    }

    public void setEligibility(String eligibility) {
        this.eligibility = eligibility;
    }

    public String getDurationYear() {
        return durationYear;
    }

    public void setDurationYear(String durationYear) {
        this.durationYear = durationYear;
    }

    public String getAcademicYear() {
        return academicYear;
    }

    public void setAcademicYear(String academicYear) {
        this.academicYear = academicYear;
    }

    public int getFirstYearDDEFee() {
        return firstYearDDEFee;
    }

    public void setFirstYearDDEFee(int firstYearDDEFee) {
        this.firstYearDDEFee = firstYearDDEFee;
    }

    public int getFirstYearSCFee() {
        return firstYearSCFee;
    }

    public void setFirstYearSCFee(int firstYearSCFee) {
        this.firstYearSCFee = firstYearSCFee;
    }

    public int getSecondYearDDEFee() {
        return secondYearDDEFee;
    }

    public void setSecondYearDDEFee(int secondYearDDEFee) {
        this.secondYearDDEFee = secondYearDDEFee;
    }

    public int getSecondYearSCFee() {
        return secondYearSCFee;
    }

    public void setSecondYearSCFee(int secondYearSCFee) {
        this.secondYearSCFee = secondYearSCFee;
    }

    public int getThirdYearDDEFee() {
        return thirdYearDDEFee;
    }

    public void setThirdYearDDEFee(int thirdYearDDEFee) {
        this.thirdYearDDEFee = thirdYearDDEFee;
    }

    public int getThirdYearSCFee() {
        return thirdYearSCFee;
    }

    public void setThirdYearSCFee(int thirdYearSCFee) {
        this.thirdYearSCFee = thirdYearSCFee;
    }

    public Integer getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(Integer createdBy) {
        this.createdBy = createdBy;
    }

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

    public Integer getModifiedBy() {
        return modifiedBy;
    }

    public void setModifiedBy(Integer modifiedBy) {
        this.modifiedBy = modifiedBy;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public boolean isIs_delete() {
        return is_delete;
    }

    public void setIs_delete(boolean is_delete) {
        this.is_delete = is_delete;
    }
}
