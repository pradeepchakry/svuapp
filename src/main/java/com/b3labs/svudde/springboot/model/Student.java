package com.b3labs.svudde.springboot.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Table(name="student")
public class Student {


    public int getStudent_id() {
        return student_id;
    }

    public void setStudent_id(int student_id) {
        this.student_id = student_id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int student_id;

    @Column(name = "name")
    private String name;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private StudyCentre studyCentre;

    @Column(name = "app_serial_no")
    private Integer appSerialNo;

    public String getCentre() {
        return centre;
    }

    public void setCentre(String centre) {
        this.centre = centre;
    }

    @Column(name = "study_centre")
    private String centre;

    public String getMedium() {
        return medium;
    }

    public void setMedium(String medium) {
        this.medium = medium;
    }

    @Column(name = "medium")
    private String medium;

    @Column(nullable = false, name = "application_no")
    private int applicationNo;

    public String getMonthYear() {
        return monthYear;
    }

    public void setMonthYear(String monthYear) {
        this.monthYear = monthYear;
    }

    @Column(name = "month_Year")
    private String monthYear;

    @Column(name = "ba_groupid")
    private Integer baGroupId;

    @Column(name = "cal_fees")
    private Integer calFees;

    @Column(name="caste")
    private String caste;

    @Column(name = "code_no")
    private Integer codeNo;

    @Column(name = "course_id")
    private Integer courseId;

    @Column(name = "course_name")
    private String courseName;

    @Column(name = "updated_on")
    private Timestamp updatedOn;

    public Timestamp getUpdatedOn() {
        return updatedOn;
    }

    public void setUpdatedOn(Timestamp updatedOn) {
        this.updatedOn = updatedOn;
    }

    @Column(name = "created_on")
    private Timestamp createdOn;

    @Column(name = "degree")
    private String degree;

    @Column(name = "district_state")
    private String districtState;

    @Column(name = "dob")
    private Date dob;

    @Column(name = "door_no")
    private String doorNo;

    @Column(name = "eligibility_marks")
    private Integer eligibilityMarks;

    @Column(name = "email_id")
    private String email;

    @Column(nullable = false, name = "enrollment_no")
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
    private Integer marksObtained;

    @Column(name = "martial_status")
    private String maritalStatus;

    @Column(name = "max_marks")
    private Integer maxMarks;

   @Override
    public String toString() {
        return "Online Application [id= " + student_id + ", name = " + name + ", dob = " + dob + ", gender = " + gender + ", Nationality" + nationality + "]";
    }

    @Column(name="nationality")
    private String nationality;

    @Column(name = "ous_education")
    private String ousEducation;

    @Column(columnDefinition = "FLOAT", name = "percentage_marks")
    private Double percentageMarks;

    @Column(name = "phone")
    private String phone;

    @Column(name = "pincode")
    private Integer pincode;

    @Column(name = "print_count")
    private Integer printCount;

    @Column(name = "qualifying_exam")
    private String qualifyingExam;

    @Column(name = "registration_no")
    private String registrationNo;

    @Column(name="religion")
    private String religion;

    @Column(name="residential_area")
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

    @Column(name = "mobile_No")
    private String mobileNo;

    public Integer getAppSerialNo() {
        return appSerialNo;
    }

    public void setAppSerialNo(Integer appSerialNo) {
        this.appSerialNo = appSerialNo;
    }

    public Integer getApplicationNo() {
        return applicationNo;
    }

    public void setApplicationNo(Integer applicationNo) {
        this.applicationNo = applicationNo;
    }

    public Integer getBaGroupId() {
        return baGroupId;
    }

    public void setBaGroupId(Integer baGroupId) {
        this.baGroupId = baGroupId;
    }

    public Integer getCalFees() {
        return calFees;
    }

    public void setCalFees(Integer calFees) {
        this.calFees = calFees;
    }

    public Integer getCodeNo() {
        return codeNo;
    }

    public void setCodeNo(Integer codeNo) {
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

    public Timestamp getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Timestamp createdOn) {
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

    public Integer getEligibilityMarks() {
        return eligibilityMarks;
    }

    public void setEligibilityMarks(Integer eligibilityMarks) {
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

    public Integer getMarksObtained() {
        return marksObtained;
    }

    public void setMarksObtained(Integer marksObtained) {
        this.marksObtained = marksObtained;
    }

    public String getMaritalStatus() {
        return maritalStatus;
    }

    public void setMaritalStatus(String maritalStatus) {
        this.maritalStatus = maritalStatus;
    }

    public Integer getMaxMarks() {
        return maxMarks;
    }

    public void setMaxMarks(Integer maxMarks) {
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

    public Double getPercentageMarks() {
        return percentageMarks;
    }

    public void setPercentageMarks(Double percentageMarks) {
        this.percentageMarks = percentageMarks;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Integer getPincode() {
        return pincode;
    }

    public void setPincode(Integer pincode) {
        this.pincode = pincode;
    }

    public Integer getPrintCount() {
        return printCount;
    }

    public void setPrintCount(Integer printCount) {
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

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    public com.b3labs.svudde.springboot.model.StudyCentre getStudyCentre() {
        return studyCentre;
    }

    public void setStudyCentre(com.b3labs.svudde.springboot.model.StudyCentre studyCentre) {
        this.studyCentre = studyCentre;
    }
}
