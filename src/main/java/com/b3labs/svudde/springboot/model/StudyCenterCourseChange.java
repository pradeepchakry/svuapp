package com.b3labs.svudde.springboot.model;

import javax.persistence.*;

@Entity
@Table(name = "study_center_course_change")
public class StudyCenterCourseChange {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, name = "fees_id")
    private Integer feeId;

    @Column(name = "course_id")
    private int courseId;

    @Column(nullable = false, name = "center_code")
    private int centerCode;

    @Column(name = "enrollment_no")
    private String enrolmentNo;

    @Column(name = "ddno")
    private int ddNo;

    @Column(name = "dd_date")
    private String ddDate;

    @Column(name = "dd_amount")
    private int ddAmount;

    @Column(name = "dd_bankname")
    private String ddBankName;

    @Column(name = "ddno1")
    private int ddNo1;

    @Column(name = "dd_date1")
    private String ddDate1;

    @Column(name = "dd_amount1")
    private int ddAmount1;

    @Column(name = "dd_bankname1")
    private String ddBankName1;

    @Column(name = "fee_type")
    private int feeType;

    public Integer getFeeId() {
        return feeId;
    }

    public void setFeeId(Integer feeId) {
        this.feeId = feeId;
    }

    public int getCourseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

    public int getCenterCode() {
        return centerCode;
    }

    public void setCenterCode(int centerCode) {
        this.centerCode = centerCode;
    }

    public String getEnrolmentNo() {
        return enrolmentNo;
    }

    public void setEnrolmentNo(String enrolmentNo) {
        this.enrolmentNo = enrolmentNo;
    }

    public int getDdNo() {
        return ddNo;
    }

    public void setDdNo(int ddNo) {
        this.ddNo = ddNo;
    }

    public String getDdDate() {
        return ddDate;
    }

    public void setDdDate(String ddDate) {
        this.ddDate = ddDate;
    }

    public int getDdAmount() {
        return ddAmount;
    }

    public void setDdAmount(int ddAmount) {
        this.ddAmount = ddAmount;
    }

    public String getDdBankName() {
        return ddBankName;
    }

    public void setDdBankName(String ddBankName) {
        this.ddBankName = ddBankName;
    }

    public int getDdNo1() {
        return ddNo1;
    }

    public void setDdNo1(int ddNo1) {
        this.ddNo1 = ddNo1;
    }

    public String getDdDate1() {
        return ddDate1;
    }

    public void setDdDate1(String ddDate1) {
        this.ddDate1 = ddDate1;
    }

    public int getDdAmount1() {
        return ddAmount1;
    }

    public void setDdAmount1(int ddAmount1) {
        this.ddAmount1 = ddAmount1;
    }

    public String getDdBankName1() {
        return ddBankName1;
    }

    public void setDdBankName1(String ddBankName1) {
        this.ddBankName1 = ddBankName1;
    }

    public int getFeeType() {
        return feeType;
    }

    public void setFeeType(int feeType) {
        this.feeType = feeType;
    }
}
