package com.b3labs.svudde.springboot.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "online_application")
public class OnlineApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, name = "student_id")
    private Integer id;

    public void setCaste(Caste caste) {
        this.caste = caste;
    }

    public Locations getLocation() {
        return location;
    }

    public void setLocation(Locations location) {
        this.location = location;
    }

    public Nationality getNationality() {
        return nationality;
    }

    public void setNationality(Nationality nationality) {
        this.nationality = nationality;
    }

    public Religion getReligion() {
        return religion;
    }

    public void setReligion(Religion religion) {
        this.religion = religion;
    }

    public ResidentialArea getResidentialArea() {
        return residentialArea;
    }

    public void setResidentialArea(ResidentialArea residentialArea) {
        this.residentialArea = residentialArea;
    }

    @Column(name = "app_serial_no")
    private int appSerialNo;

    @Column(nullable = false, name = "application_no")
    private int applicationNo;

    @Column(name = "ba_groupid")
    private Integer baGroupId;

    @Column(name = "cal_fees")
    private int calFees;

    @JoinColumn(name = "c_id")
    private Caste caste;

    @Column(name = "code_no")
    private int codeNo;

    @Column(name = "course_id")
    private Integer courseId;

    @Column(name = "course_name")
    private String courseName;

    @Column(name = "created_on")
    private Date createdOn;

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


    @JoinColumn(name = "location_id")
    private Locations location;

    @Column(name = "mandal")
    private String mandal;

    @Column(name = "marks_obtained")
    private int marksObtained;

    @Column(name = "martial_status")
    private String maritalStatus;

    @Column(name = "max_marks")
    private int maxMarks;

    @Column(name = "medium")
    private String medium;

    @Column(name = "name")
    private String name;

    @OneToOne
    @JoinColumn(name = "n_id")
    private Nationality nationality;

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

    @OneToOne
    @JoinColumn(name = "re_id")
    private Religion religion;

    @OneToOne
    @JoinColumn(name = "r_id")
    private ResidentialArea residentialArea;

    @Column(name = "second_language")
    private String secondLanguage;

    @Column(name = "signature")
    private String signature;

    @Column(name = "street")
    private String street;

    @Column(name = "study_centre")
    private String studyCentre;

    @Column(name = "university")
    private String university;

    @Column(name = "village")
    private String village;

    @Column(name = "year_month")
    private String yearMonth;

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

    public Caste getCaste() {
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

    public String getMedium() {
        return medium;
    }

    public void setMedium(String medium) {
        this.medium = medium;
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

    public String getStudyCentre() {
        return studyCentre;
    }

    public void setStudyCentre(String studyCentre) {
        this.studyCentre = studyCentre;
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

    public String getYearMonth() {
        return yearMonth;
    }

    public void setYearMonth(String yearMonth) {
        this.yearMonth = yearMonth;
    }
}
