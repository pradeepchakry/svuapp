package com.b3labs.svudde.springboot.modal;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "study_centres")
public class StudyCenters {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, name = "centre_id")
    private Integer centreId;

    @Column(nullable = false, name = "code_no")
    private int id;

    @Column(nullable = false, name = "centre_name")
    private String centreName;

    @Column(name = "district_state")
    private String districtState;

    @Column(name = "pin_code")
    private int pincode;

    @Column(name = "phone")
    private String phone;

    @Column(name = "street")
    private String street;

    @Column(name = "door_no")
    private String doorNo;

    @Column(name = "mandal")
    private String mandal;

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

    public Integer getCentreId() {
        return centreId;
    }

    public void setCentreId(Integer centreId) {
        this.centreId = centreId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCentreName() {
        return centreName;
    }

    public void setCentreName(String centreName) {
        this.centreName = centreName;
    }

    public String getDistrictState() {
        return districtState;
    }

    public void setDistrictState(String districtState) {
        this.districtState = districtState;
    }

    public int getPincode() {
        return pincode;
    }

    public void setPincode(int pincode) {
        this.pincode = pincode;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getDoorNo() {
        return doorNo;
    }

    public void setDoorNo(String doorNo) {
        this.doorNo = doorNo;
    }

    public String getMandal() {
        return mandal;
    }

    public void setMandal(String mandal) {
        this.mandal = mandal;
    }

    public String getVillage() {
        return village;
    }

    public void setVillage(String village) {
        this.village = village;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

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
