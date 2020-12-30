package com.b3labs.svudde.springboot.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Table(name = "study_centre_application")
public class OnlineApplication implements Serializable {

    @Column(name = "centre_id")
    private Integer centreId;


    @Column(name = "centre_code_no")
    private int centre_code_no;

    @Column(nullable = true, name = "centre_name")
    private String centreName;

    @Column(name = "centre_district_state")
    private String centre_district_state;

    @Column(name = "centre_pin_code")
    private int centre_pin_code;

    @Column(name = "centre_phone")
    private String centre_phone;

    @Column(name = "centre_street")
    private String centre_street;

    @Column(name = "centre_doorNo")
    private String centre_doorNo;

    @Column(name = "centre_Mandal")
    private String centre_Mandal;

    @Column(name = "centre_village")
    private String centre_village;

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



    public Integer getCentreId() {
        return centreId;
    }

    public void setCentreId(Integer centreId) {
        this.centreId = centreId;
    }



    public String getCentreName() {
        return centreName;
    }

    public void setCentreName(String centreName) {
        this.centreName = centreName;
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

    public String getCentre_district_state() {
        return centre_district_state;
    }

    public void setCentre_district_state(String centre_district_state) {
        this.centre_district_state = centre_district_state;
    }

    public int getCentre_pin_code() {
        return centre_pin_code;
    }

    public void setCentre_pin_code(int centre_pin_code) {
        this.centre_pin_code = centre_pin_code;
    }

    public String getCentre_phone() {
        return centre_phone;
    }

    public void setCentre_phone(String centre_phone) {
        this.centre_phone = centre_phone;
    }

    public String getCentre_street() {
        return centre_street;
    }

    public void setCentre_street(String centre_street) {
        this.centre_street = centre_street;
    }

    public String getCentre_doorNo() {
        return centre_doorNo;
    }

    public void setCentre_doorNo(String centre_doorNo) {
        this.centre_doorNo = centre_doorNo;
    }

    public String getCentre_Mandal() {
        return centre_Mandal;
    }

    public void setCentre_Mandal(String centre_Mandal) {
        this.centre_Mandal = centre_Mandal;
    }

    public String getCentre_village() {
        return centre_village;
    }

    public void setCentre_village(String centre_village) {
        this.centre_village = centre_village;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, name = "student_id")
    private Integer id;

    @Column(name = "app_serial_no")
    private int appSerialNo;

    @Column(nullable = false, name = "application_no")
    private int applicationNo;

    @Column(name = "ba_groupid")
    private Integer baGroupId;

    @Column(name = "cal_fees")
    private int calFees;

    @Column(name="caste")
    private String caste;

    @Column(name = "code_no")
    private int codeNo;

    @Column(name = "course_id")
    private Integer courseId;

    @Column(name = "course_name")
    private String courseName;

    @Column(name = "degree")
    private String degree;

    @Column(name = "district_state")
    private String districtState;

    @Column(name = "dob")
    private Date dob;

    @Column(name = "door_no")
    private String doorNo;

    @Column(name = "eligibility_marks")
    private int eligibilityMarks;

    @Column(name = "email_id")
    private String email;

    @Column(name = "enrollment_no")
    private String enrolmentNo;

    @Column(name = "father_name")
    private String fatherName;

    @Column(name = "gender")
    private String gender;

    @Column(name = "group_subjects")
    private String groupSubjects;

    @Column(name = "hallticket_no")
    private String hallTicketNo;

    @Column(name = "image")
    private String image;

    @Column(nullable = false, columnDefinition = "TINYINT(1)", name = "is_approve")
    private boolean isApprove;


    @Column(name="location")
    private String location;
    @Column(name = "mandal")
    private String mandal;

    @Column(name = "marks_obtained")
    private int marksObtained;

    @Column(name = "martial_status")
    private String maritalStatus;

    @Column(name = "max_marks")
    private int maxMarks;

    @Column(name = "lang_medium")
    private String langMedium;

    @Column(name = "name")
    private String name;

    @Override
    public String toString() {
        return "Online Application [id= " + id + ", name = " + name + ", yearMonth = " +
                monthYear + ", dob = " + dob + ", gender = " + gender + ", Nationality" + nationality + "]";
    }

    @Column(name="nationality")
    private String nationality;

    @Column(name = "ous_education")
    private String ousEducation;

    @Column(columnDefinition = "FLOAT", name = "percentage_marks")
    private float percentageMarks;

    @Column(name = "phone")
    private String phone;

    @Column(name = "pincode")
    private int pincode;

    @Column(name = "print_count")
    private int printCount;

    @Column(name = "qualifying_exam")
    private String qualifyingExam;

    @Column(name = "registration_no")
    private String registrationNo;

    @Column(name="religion")
    private String religion;

    @Column(name="residentialArea")
    private String residentialArea;

    @Column(name = "second_language")
    private String secondLanguage;

    @Column(name = "signature")
    private String signature;

    @Column(name = "street")
    private String street;

    @Column(name = "university")
    private String university;

    @Column(name = "village")
    private String village;

    @Column(name = "month_of_year")
    private String monthYear;



    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getAppSerialNo() {
        return appSerialNo;
    }

    public void setAppSerialNo(int appSerialNo) {
        this.appSerialNo = appSerialNo;
    }

    public int getApplicationNo() {
        return applicationNo;
    }

    public void setApplicationNo(int applicationNo) {
        this.applicationNo = applicationNo;
    }

    public Integer getBaGroupId() {
        return baGroupId;
    }

    public void setBaGroupId(Integer baGroupId) {
        this.baGroupId = baGroupId;
    }

    public int getCalFees() {
        return calFees;
    }

    public void setCalFees(int calFees) {
        this.calFees = calFees;
    }

    public int getCodeNo() {
        return codeNo;
    }

    public void setCodeNo(int codeNo) {
        this.codeNo = codeNo;
    }

    public Integer getCourseId() {
        return courseId;
    }

    public void setCourseId(Integer courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public String  getCaste() {
        return caste;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getDistrictState() {
        return districtState;
    }

    public void setDistrictState(String districtState) {
        this.districtState = districtState;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getDoorNo() {
        return doorNo;
    }

    public void setDoorNo(String doorNo) {
        this.doorNo = doorNo;
    }

    public int getEligibilityMarks() {
        return eligibilityMarks;
    }

    public void setEligibilityMarks(int eligibilityMarks) {
        this.eligibilityMarks = eligibilityMarks;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEnrolmentNo() {
        return enrolmentNo;
    }

    public void setEnrolmentNo(String enrolmentNo) {
        this.enrolmentNo = enrolmentNo;
    }

    public String getFatherName() {
        return fatherName;
    }

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getGroupSubjects() {
        return groupSubjects;
    }

    public void setGroupSubjects(String groupSubjects) {
        this.groupSubjects = groupSubjects;
    }

    public String getHallTicketNo() {
        return hallTicketNo;
    }

    public void setHallTicketNo(String hallTicketNo) {
        this.hallTicketNo = hallTicketNo;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public boolean isApprove() {
        return isApprove;
    }

    public void setApprove(boolean approve) {
        isApprove = approve;
    }

    public String getMandal() {
        return mandal;
    }

    public void setMandal(String mandal) {
        this.mandal = mandal;
    }

    public int getMarksObtained() {
        return marksObtained;
    }

    public void setMarksObtained(int marksObtained) {
        this.marksObtained = marksObtained;
    }

    public String getMaritalStatus() {
        return maritalStatus;
    }

    public void setMaritalStatus(String maritalStatus) {
        this.maritalStatus = maritalStatus;
    }

    public int getMaxMarks() {
        return maxMarks;
    }

    public void setMaxMarks(int maxMarks) {
        this.maxMarks = maxMarks;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOusEducation() {
        return ousEducation;
    }

    public void setOusEducation(String ousEducation) {
        this.ousEducation = ousEducation;
    }

    public float getPercentageMarks() {
        return percentageMarks;
    }

    public void setPercentageMarks(float percentageMarks) {
        this.percentageMarks = percentageMarks;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getPincode() {
        return pincode;
    }

    public void setPincode(int pincode) {
        this.pincode = pincode;
    }

    public int getPrintCount() {
        return printCount;
    }

    public void setPrintCount(int printCount) {
        this.printCount = printCount;
    }

    public String getQualifyingExam() {
        return qualifyingExam;
    }

    public void setQualifyingExam(String qualifyingExam) {
        this.qualifyingExam = qualifyingExam;
    }

    public String getRegistrationNo() {
        return registrationNo;
    }

    public void setRegistrationNo(String registrationNo) {
        this.registrationNo = registrationNo;
    }

    public String getSecondLanguage() {
        return secondLanguage;
    }

    public void setSecondLanguage(String secondLanguage) {
        this.secondLanguage = secondLanguage;
    }

    public String getSignature() {
        return signature;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public String getVillage() {
        return village;
    }

    public void setVillage(String village) {
        this.village = village;
    }

    public void setCaste(String caste) {
        this.caste = caste;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getReligion() {
        return religion;
    }

    public void setReligion(String religion) {
        this.religion = religion;
    }

    public String getResidentialArea() {
        return residentialArea;
    }

    public void setResidentialArea(String residentialArea) {
        this.residentialArea = residentialArea;
    }

    public String getLangMedium() {
        return langMedium;
    }

    public void setLangMedium(String langMedium) {
        this.langMedium = langMedium;
    }

    public String getMonthYear() {
        return monthYear;
    }

    public void setMonthYear(String monthYear) {
        this.monthYear = monthYear;
    }

    public int getCentre_code_no() {
        return centre_code_no;
    }

    public void setCentre_code_no(int centre_code_no) {
        this.centre_code_no = centre_code_no;
    }
}
