package com.b3labs.svudde.springboot.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Table(name="student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int student_id;

    @Column(name = "name")
    private String name;

    @Column(name = "father_name")
    private String fatherName;

    @Column(name = "aadhar_no")
    private String aadhar_no;

    @Column(name = "door_no")
    private String doorNo;

    @Column(name = "street")
    private String street;

    @Column(name = "village")
    private String village;

    @Column(name = "mandal")
    private String mandal;

    @Column(name = "district")
    private String district;

    @Column(name = "pincode")
    private Integer pincode;

    @Column(name = "email_id")
    private String emailID;

    @Column(name = "mobile_No")
    private String mobileNo;

    @Column(name = "alternate_mobile_no")
    private String alternateMobileNno;

    @Column(name = "medium")
    private String medium;

    @Column(name = "second_language")
    private String secondLanguage;

    @Column(name = "dob")
    private Date dob;

    @Column(name = "gender")
    private String gender;

    @Column(name = "martial_status")
    private String maritalStatus;

    @Column(name="nationality")
    private String nationality;

    @Column(name="religion")
    private String religion;

    @Column(name="caste")
    private String caste;

    @Column(name="residential_area")
    private String residentialArea;

    @Column(name="ph_category")
    private String phCategory;

    @Column(name = "qualifying_exam")
    private String qualifyingExam;

    @Column(name = "university")
    private String university;

    @Column(name = "month_Year")
    private String monthYear;

    @Column(name = "registration_no")
    private String registrationNo;

    @Column(name = "group_subjects")
    private String groupSubjects;

    @Column(name = "marks_obtained")
    private Integer marksObtained;

    @Column(name = "max_marks")
    private Integer maxMarks;

    @Column(columnDefinition = "FLOAT", name = "percentage_marks")
    private Double percentageMarks;

    @Column(name = "fees")
    private Integer fees;

    @Column(name = "study_centre")
    private String centre;

    @Column(name = "code_no")
    private Integer codeNo;

    @Column(name = "course_name")
    private String courseName;

    @CreationTimestamp
    @Column(name = "created_on")
    private Date createdOn;

    @UpdateTimestamp
    @Column(name = "updated_on")
    private Date updatedOn;

    @Lob
    @Column(name = "image")
    private byte[] image;


    public String getMotherName() {
        return motherName;
    }

    public void setMotherName(String motherName) {
        this.motherName = motherName;
    }

    @Column(name = "mother_name")
    private String motherName;

    @Column(nullable = false, columnDefinition = "TINYINT(1)", name = "is_approve")
    private boolean isApprove;

    @Column(name = "print_count")
    private Integer printCount;

    @Lob
    @Column(name = "signature")
    private byte[] signature;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private StudyCentre studyCentre;

    @Override
    public String toString() {
        return "Online Application [id= " + student_id + ", name = " + name + ", dob = " + dob + ", gender = " + gender + ", Nationality" + nationality + "]";
    }

    public Date getUpdatedOn() {
        return updatedOn;
    }

    public void setUpdatedOn(Date updatedOn) {
        this.updatedOn = updatedOn;
    }

    public Integer getCodeNo() {
        return codeNo;
    }

    public void setCodeNo(Integer codeNo) {
        this.codeNo = codeNo;
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

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
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

    public Double getPercentageMarks() {
        return percentageMarks;
    }

    public void setPercentageMarks(Double percentageMarks) {
        this.percentageMarks = percentageMarks;
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

    public byte[] getSignature() {
        return signature;
    }

    public void setSignature(byte[] signature) {
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

    public String getAadhar_no() {
        return aadhar_no;
    }

    public void setAadhar_no(String aadhar_no) {
        this.aadhar_no = aadhar_no;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }


    public String getEmailID() {
        return emailID;
    }

    public void setEmailID(String emailID) {
        this.emailID = emailID;
    }

    public String getAlternateMobileNno() {
        return alternateMobileNno;
    }

    public void setAlternateMobileNno(String alternateMobileNno) {
        this.alternateMobileNno = alternateMobileNno;
    }

    public String getPhCategory() {
        return phCategory;
    }

    public void setPhCategory(String phCategory) {
        this.phCategory = phCategory;
    }
    public int getStudent_id() {
        return student_id;
    }

    public void setStudent_id(int student_id) {
        this.student_id = student_id;
    }


    public Integer getFees() {
        return fees;
    }

    public void setFees(Integer fees) {
        this.fees = fees;
    }


    public String getCentre() {
        return centre;
    }

    public void setCentre(String centre) {
        this.centre = centre;
    }


    public String getMedium() {
        return medium;
    }

    public void setMedium(String medium) {
        this.medium = medium;
    }

    public String getMonthYear() {
        return monthYear;
    }

    public void setMonthYear(String monthYear) {
        this.monthYear = monthYear;
    }
}
