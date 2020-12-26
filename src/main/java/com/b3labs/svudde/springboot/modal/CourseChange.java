package com.b3labs.svudde.springboot.modal;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "course_change")
public class CourseChange {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, name = "fees_id")
    private Integer feeId;

    @Column(nullable = false, name = "fees_type")
    private Integer feeType;

    @Column(name = "enrollment_no")
    private String enrolmentNo;

    @Column(name = "course_id")
    private int courseId;

    @Column(name = "ddno")
    private int ddNO;

    @Column(name = "dd_date")
    private Date ddDate;

    @Column(name = "dd_amount")
    private int ddAmount;

    @Column(name = "dd_bankname")
    private String ddBankName;

    @Column(name = "ddno1")
    private int ddNo1;

    @Column(name = "dd_date1")
    private Date ddDate1;

    @Column(name = "dd_amount1")
    private int ddAmount1;

    @Column(name = "dd_bankname1")
    private String ddBankName1;

    public Integer getFeeId() {
        return feeId;
    }

    public void setFeeId(Integer feeId) {
        this.feeId = feeId;
    }

    public Integer getFeeType() {
        return feeType;
    }

    public void setFeeType(Integer feeType) {
        this.feeType = feeType;
    }

    public String getEnrolmentNo() {
        return enrolmentNo;
    }

    public void setEnrolmentNo(String enrolmentNo) {
        this.enrolmentNo = enrolmentNo;
    }

    public int getCourseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

    public int getDdNO() {
        return ddNO;
    }

    public void setDdNO(int ddNO) {
        this.ddNO = ddNO;
    }

    public Date getDdDate() {
        return ddDate;
    }

    public void setDdDate(Date ddDate) {
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

    public Date getDdDate1() {
        return ddDate1;
    }

    public void setDdDate1(Date ddDate1) {
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
}
