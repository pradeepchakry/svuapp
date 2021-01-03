package com.b3labs.svudde.springboot.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Date;

@Entity
@Table(name="study_centres")
public class StudyCentre {
    public int getId() {
        return id;
    }

    public void setId(int library_id) {
        this.id = library_id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    private String name;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getcode_no() {
        return code_no;
    }

    public void setcode_no(int code_no) {
        this.code_no = code_no;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

    @Column(nullable = false, name = "code_no")
    private int code_no;

    @Column(name = "district_state")
    private String district_state;

    @Column(name = "pin_code")
    private Integer pincode;

    @Column(name = "phone")
    private String phone;

    @Column(name = "street")
    private String street;

    @Column(name = "doorNo")
    private String doorNo;

    @Column(name = "Mandal")
    private String Mandal;

    @Column(name = "village")
    private String village;

    @Column(name = "created_on")
    private Date createdOn;

    @Column(name = "created_by")
    private Integer createdBy;

    @Column(nullable = false, name = "modified_on")
    private Date modifiedOn;

    @Column(nullable = false, name = "modified_by")
    private Integer modifiedBy;

    @Column(nullable = false, columnDefinition = "TINYINT(1)", name = "is_active")
    private boolean isActive;

    @Column(nullable = false, columnDefinition = "TINYINT(1)", name = "is_delete")
    private boolean is_delete;

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Column(name = "user_Id")
    private String userID;

    @Column(name = "password")
    private String password;


    public Integer getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(Integer createdBy) {
        this.createdBy = createdBy;
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
