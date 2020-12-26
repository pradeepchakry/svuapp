package com.b3labs.svudde.springboot.modal;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "application_fine_schedule")
public class ApplicationFineSchedule {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, name = "fid")
    private Integer fid;

    @Column(name = "acadamic_year")
    private String academicYear;

    @Column(name = "application_start_date")
    private Date applicationStartDate;

    @Column(name = "application_without_fine")
    private Date applicationWithOutFine;

    @Column(name = "application_first_fine")
    private Date applicationFirstFine;

    @Column(name = "application_first_cost")
    private int applicationFirstCost;

    @Column(name = "application_second_fine")
    private Date applicationSecondFine;

    @Column(name = "application_second_cost")
    private int applicationSecondCost;

    @Column(name = "application_third_fine")
    private Date applicationThirdFine;

    @Column(name = "application_third_cost")
    private int applicationThirdCost;

    @Column(name = "b_ed_first_fine")
    private Date bEdFirstFine;

    @Column(name = "b_ed_first_cost")
    private int bEdFirstCost;

    @Column(name = "created_by")
    private Integer createdBy;

    @Column(name = "created_on")
    private Date createdOn;

    @Column(name = "modified_on")
    private Date modifiedOn;

    @Column(name = "modified_by")
    private Integer modifiedBy;

    public Integer getFid() {
        return fid;
    }

    public void setFid(Integer fid) {
        this.fid = fid;
    }

    public String getAcademicYear() {
        return academicYear;
    }

    public void setAcademicYear(String academicYear) {
        this.academicYear = academicYear;
    }

    public Date getApplicationStartDate() {
        return applicationStartDate;
    }

    public void setApplicationStartDate(Date applicationStartDate) {
        this.applicationStartDate = applicationStartDate;
    }

    public Date getApplicationWithOutFine() {
        return applicationWithOutFine;
    }

    public void setApplicationWithOutFine(Date applicationWithOutFine) {
        this.applicationWithOutFine = applicationWithOutFine;
    }

    public Date getApplicationFirstFine() {
        return applicationFirstFine;
    }

    public void setApplicationFirstFine(Date applicationFirstFine) {
        this.applicationFirstFine = applicationFirstFine;
    }

    public int getApplicationFirstCost() {
        return applicationFirstCost;
    }

    public void setApplicationFirstCost(int applicationFirstCost) {
        this.applicationFirstCost = applicationFirstCost;
    }

    public Date getApplicationSecondFine() {
        return applicationSecondFine;
    }

    public void setApplicationSecondFine(Date applicationSecondFine) {
        this.applicationSecondFine = applicationSecondFine;
    }

    public int getApplicationSecondCost() {
        return applicationSecondCost;
    }

    public void setApplicationSecondCost(int applicationSecondCost) {
        this.applicationSecondCost = applicationSecondCost;
    }

    public Date getApplicationThirdFine() {
        return applicationThirdFine;
    }

    public void setApplicationThirdFine(Date applicationThirdFine) {
        this.applicationThirdFine = applicationThirdFine;
    }

    public int getApplicationThirdCost() {
        return applicationThirdCost;
    }

    public void setApplicationThirdCost(int applicationThirdCost) {
        this.applicationThirdCost = applicationThirdCost;
    }

    public Date getbEdFirstFine() {
        return bEdFirstFine;
    }

    public void setbEdFirstFine(Date bEdFirstFine) {
        this.bEdFirstFine = bEdFirstFine;
    }

    public int getbEdFirstCost() {
        return bEdFirstCost;
    }

    public void setbEdFirstCost(int bEdFirstCost) {
        this.bEdFirstCost = bEdFirstCost;
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
}
