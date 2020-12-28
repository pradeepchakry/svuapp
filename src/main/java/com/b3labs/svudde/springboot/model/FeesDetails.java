package com.b3labs.svudde.springboot.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "fees_details")
public class FeesDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, name = "fees_id")
    private Integer feesId;

    @Column(name = "student_id")
    private int studentId;

    @Column(name = "enrollment_no")
    private String enrolmentNo;

    @Column(name = "fees_type")
    private int feeType;

    @Column(name = "ddno")
    private int ddNo;

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

    @Column(name = "ddno2")
    private int ddNo2;

    @Column(name = "dd_date2")
    private Date ddDate2;

    @Column(name = "dd_amount2")
    private int ddAmount2;

    @Column(name = "dd_bankname2")
    private String ddBankName2;

    public Integer getFeesId() {
        return feesId;
    }

    public void setFeesId(Integer feesId) {
        this.feesId = feesId;
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public String getEnrolmentNo() {
        return enrolmentNo;
    }

    public void setEnrolmentNo(String enrolmentNo) {
        this.enrolmentNo = enrolmentNo;
    }

    public int getFeeType() {
        return feeType;
    }

    public void setFeeType(int feeType) {
        this.feeType = feeType;
    }

    public int getDdNo() {
        return ddNo;
    }

    public void setDdNo(int ddNo) {
        this.ddNo = ddNo;
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

    public int getDdNo2() {
        return ddNo2;
    }

    public void setDdNo2(int ddNo2) {
        this.ddNo2 = ddNo2;
    }

    public Date getDdDate2() {
        return ddDate2;
    }

    public void setDdDate2(Date ddDate2) {
        this.ddDate2 = ddDate2;
    }

    public int getDdAmount2() {
        return ddAmount2;
    }

    public void setDdAmount2(int ddAmount2) {
        this.ddAmount2 = ddAmount2;
    }

    public String getDdBankName2() {
        return ddBankName2;
    }

    public void setDdBankName2(String ddBankName2) {
        this.ddBankName2 = ddBankName2;
    }
}
