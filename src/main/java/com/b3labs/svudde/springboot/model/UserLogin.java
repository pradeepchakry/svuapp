package com.b3labs.svudde.springboot.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "user_login")
public class UserLogin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, name = "user_id")
    private Integer userId;

  /*  @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="student_id", referencedColumnName = "student_id", insertable = false, updatable = false)
    private OnlineApplication onlineApplication;*/

    /*@OneToMany(targetEntity=OnlineApplication.class, mappedBy="userLogin",cascade=CascadeType.ALL, fetch = FetchType.LAZY)
    private List<OnlineApplication> user = new ArrayList<>();*/

    @Column(nullable = false, name = "activation_code")
    private String activationCode;

    @Column(name = "phone")
    private String phone;

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Column(name = "authentication")
    private char authentication;

    @Column(nullable = false, name = "display_name")
    private String display_name;

    @Column(nullable = false, name = "email_id")
    private String email;

    @Column(name = "group_id")
    private int groupId;

    @Column(name = "is_spam")
    private int isSpam;

    @Column(name = "last_login")
    private Date lastLogin;

    @Column(nullable = false, name = "last_login_ip")
    private String lastLoginIp;

    @Column(nullable = false, name = "password")
    private String password;

    @Column(name = "created_on")
    private Date createdOn;

    @Column(name = "created_by")
    private Integer createdBy;

    @Column(name = "modified_on")
    private Date modifiedOn;

    @Column(name = "modified_by")
    private Integer modifiedBy;

    @Column(nullable = false, columnDefinition = "TINYINT(1)", name = "is_active")
    private boolean isActive;

    @Column(nullable = false, columnDefinition = "TINYINT(1)", name = "is_delete")
    private boolean is_delete;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getActivationCode() {
        return activationCode;
    }

    public void setActivationCode(String activationCode) {
        this.activationCode = activationCode;
    }

    public char getAuthentication() {
        return authentication;
    }

    public void setAuthentication(char authentication) {
        this.authentication = authentication;
    }

    public String getDisplay_name() {
        return display_name;
    }

    public void setDisplay_name(String display_name) {
        this.display_name = display_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getGroupId() {
        return groupId;
    }

    public void setGroupId(int groupId) {
        this.groupId = groupId;
    }

    public int getIsSpam() {
        return isSpam;
    }

    public void setIsSpam(int isSpam) {
        this.isSpam = isSpam;
    }

    public Date getLastLogin() {
        return lastLogin;
    }

    public void setLastLogin(Date lastLogin) {
        this.lastLogin = lastLogin;
    }

    public String getLastLoginIp() {
        return lastLoginIp;
    }

    public void setLastLoginIp(String lastLoginIp) {
        this.lastLoginIp = lastLoginIp;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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
