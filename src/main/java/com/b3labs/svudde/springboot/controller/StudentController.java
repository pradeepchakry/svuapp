package com.b3labs.svudde.springboot.controller;

import com.b3labs.svudde.springboot.dao.CourseDetailsDAO;
import com.b3labs.svudde.springboot.dao.StudentDAO;
import com.b3labs.svudde.springboot.dao.StudyCentreDAO;
import com.b3labs.svudde.springboot.model.Student;
import com.b3labs.svudde.springboot.model.StudyCentre;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.itextpdf.html2pdf.HtmlConverter;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import static org.springframework.http.MediaType.APPLICATION_PDF;

@ControllerAdvice
@RestController
@RequestMapping("/api/v1/")
@Slf4j
public class StudentController extends ResponseEntityExceptionHandler {
    private final StudyCentreDAO studyCentreDAO;
    private final StudentDAO studentDAO;
    private final CourseDetailsDAO courseDetailsDAO;
    @Autowired
    public StudentController(StudyCentreDAO studyCentreDAO,StudentDAO studentDAO,CourseDetailsDAO courseDetailsDAO) {
        this.studyCentreDAO = studyCentreDAO;
        this.studentDAO =studentDAO;
        this.courseDetailsDAO=courseDetailsDAO;
    }
    @Component
    public static class StringToUserConverter implements Converter<String, Student> {

        @Autowired
        private ObjectMapper objectMapper;

        @Override
        @SneakyThrows
        public Student convert(String source) {
            return objectMapper.readValue(source, Student.class);
        }
    }

    @RequestMapping(value = "/createStudent", method = RequestMethod.POST,
            consumes = {"multipart/form-data"})
    public ResponseEntity<Student> create(@RequestParam("student") Student student, @RequestParam("image") MultipartFile photo,@RequestParam("signature") MultipartFile signature) {
        student.setStudyCentre(null);
        student.setCentre(null);
        student.setCodeNo(null);
        if (!photo.isEmpty()) {
            try {
                byte[] photoBytes = photo.getBytes();
                student.setImage(photoBytes);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        if (!signature.isEmpty()) {
            try {
                byte[] signatureBytes = signature.getBytes();
                student.setSignature(signatureBytes);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        boolean result=studentDAO.save(student);
        if(result) {
            return ResponseEntity.status(HttpStatus.CREATED).body(student);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @RequestMapping(value = "/createStudentByStudyCenter/{id}", method = RequestMethod.POST,
            consumes = {"multipart/form-data"})
    public ResponseEntity createStudentByStudyCenter( @PathVariable int id,@RequestParam("student") Student student, @RequestParam("image") MultipartFile photo,@RequestParam("signature") MultipartFile signature) {

        StudyCentre studyCentre = studyCentreDAO.get(id);
        if (studyCentre==null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("not a valid study center");
        }
        student.setCentre(studyCentre.getName());
        student.setCodeNo(studyCentre.getcode_no());
        student.setStudyCentre(studyCentre);
        if (!photo.isEmpty()) {
            try {
                byte[] photoBytes = photo.getBytes();
                student.setImage(photoBytes);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        if (!signature.isEmpty()) {
            try {
                byte[] signatureBytes = signature.getBytes();
                student.setSignature(signatureBytes);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        boolean result=studentDAO.save(student);
        if(result) {
            return ResponseEntity.status(HttpStatus.CREATED).body(student);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    @PutMapping("/updateStudentByStudyCenter/{id}")
    public ResponseEntity update(@RequestBody Student student, @PathVariable Integer id) {
       Student optionalStudent = studentDAO.get(id);
        if (optionalStudent ==null || optionalStudent.getCentre() ==null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("student does not belong to any studycenter");
        } else {
            student.setCentre(optionalStudent.getCentre());
            student.setCodeNo(optionalStudent.getCodeNo());
            student.setStudyCentre(optionalStudent.getStudyCentre());
        }
        student.setStudent_id(optionalStudent.getStudent_id());
        boolean result=studentDAO.update(student);
        if(result) {
            return ResponseEntity.status(HttpStatus.OK).body(student);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        Student student = studentDAO.get(id);
        if (student==null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        boolean result=studentDAO.delete(id);
        if(result) {
            return ResponseEntity.status(HttpStatus.OK).build();
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping
    public ResponseEntity getAll() {

        return ResponseEntity.status(HttpStatus.OK).body(studentDAO.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable Integer id) {
        Student student = studentDAO.get(id);
        if (student==null) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Student not present");
        }

        return ResponseEntity.status(HttpStatus.OK).body(student);
    }

    @RequestMapping(value="/dowloadPDF/{id}",method= RequestMethod.GET,produces = "application/pdf")
    public ResponseEntity getPDFById(@PathVariable Integer id) throws IOException {
        Path temp = Files.createTempFile("temp", ".pdf");
        FileOutputStream temppdffile = new FileOutputStream(temp.toFile());
        Path imagetempfile = Files.createTempFile("temp", ".jpg");
        FileOutputStream tempimagestream = new FileOutputStream(imagetempfile.toFile());
        Path signaturetempfile = Files.createTempFile("temp", ".jpg");
        FileOutputStream tempsignaturestream = new FileOutputStream(signaturetempfile.toFile());
        try {
            Student student = studentDAO.get(id);
            if (student == null) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Student not present");
            }
            tempimagestream.write(student.getImage());
            tempsignaturestream.write(student.getSignature());
            // FileInputStream f=new FileInputStream(new File("/home/hariprasad/Downloads/Aspose.PDF-for-Java-master/createPF/src/main/resources/HTMLTOPDF2.html"));
            String htmlString = Files.readString(Paths.get(System.getProperty("user.dir")+"/src/main/resources/HTMLTOPDFStudyCentre.html"));
            String updatedString = htmlString
                    .replace("${photo}",imagetempfile.toFile().getAbsolutePath())
                    .replace("${signature}", signaturetempfile.toFile().getAbsolutePath()).
            replace("${Study Center}", student.getCentre() + "-" + student.getStudyCentre().getName())
                    .replace("${Course Name}", student.getCourseName())
                    .replace("${Applicant's Name}", student.getName())
                    .replace("${Father Name}", student.getFatherName())
                    .replace("${Date of Birth}", student.getDob().toString())
                    .replace("${Gender}", student.getGender())
                    .replace("${Address}", student.getStreet()+ "," +student.getMandal() + "," + student.getVillage()+","+student.getDistrict() + "," + student.getPincode())
                    .replace("${Online ID}",id.toString())
                    .replace("${District/Pincode}", student.getDistrict() + "," + student.getPincode())
                    .replace("${State}", student.getStreet())
                    .replace("${Mobile No}", student.getMobileNo())
                    .replace("${Email Id}", student.getEmailID())
                    .replace("${Category}", student.getPhCategory())
                    .replace("${Religion}", student.getReligion())
                    .replace("${Martial Status}", student.getMaritalStatus())
                    .replace("${Second Language}", student.getSecondLanguage())
                    .replace("${Residential Area}", student.getResidentialArea())
                    .replace("${QualifyingExamination}", student.getQualifyingExam())
                    .replace("${UniversityBoard}", student.getUniversity())
                    .replace("${YearMonthofPassing}", student.getMonthYear())
                    .replace("${RegisterNo}", student.getRegistrationNo())
                    .replace("${GroupSubjects}", student.getGroupSubjects())
                    .replace("${MaxMarks}", student.getMaxMarks().toString())
                    .replace("${ObtMarks}", student.getMarksObtained().toString())
                    .replace("${PercentageMarks}", student.getPercentageMarks().toString())
                    .replace("${Amount}", student.getFees().toString())
                    .replace("${TransactionID}", "")
                    .replace("${Place}", student.getResidentialArea())
                    .replace("${Date}",new SimpleDateFormat("yyyy-MM-dd").format(new Date()));

            HtmlConverter.convertToPdf(updatedString, temppdffile);
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.parseMediaType("application/pdf"));
            headers.add("Access-Control-Allow-Origin", "*");
            headers.add("Access-Control-Allow-Methods", "GET");
            headers.add("Access-Control-Allow-Headers", "Content-Type");
            headers.add("Content-Disposition", "filename=" + student.getStudent_id()+".pdf");
            headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
            headers.add("Pragma", "no-cache");
            headers.add("Expires", "0");

            //headers.setContentLength(temp.toFile().contentLength());
            InputStream input = new FileInputStream(temp.toAbsolutePath().toString());
            ResponseEntity<InputStreamResource> response = new ResponseEntity<InputStreamResource>(
                    new InputStreamResource(input), headers, HttpStatus.OK);

            return response;
        }
        catch (Exception ex) {
            ex.printStackTrace();
        }
        finally {
            temp.toFile().delete();
            imagetempfile.toFile().delete();
            signaturetempfile.toFile().delete();
            tempimagestream.close();
            tempsignaturestream.close();
            temppdffile.close();
        }
        return null;
    }

    @GetMapping("/Students/{StudyCentreId}")
    public ResponseEntity<List<Student>> getByStudyCentreId(@PathVariable Integer StudyCentreId, Pageable pageable) {
        List<Student> students= studentDAO.getAllStudentsByStudyCentreID(StudyCentreId);
        return ResponseEntity.status(HttpStatus.OK).body(students);
    }
    @GetMapping("/Student/{mobileNo}")
    public ResponseEntity<Student> getStudentDetailsByMobileNo(@PathVariable String mobileNo) {
        Student student = studentDAO.getStudentDetailsByMobileNo(mobileNo);
        if(student ==null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } else {
            return ResponseEntity.status(HttpStatus.OK).body(student);
        }
    }

    @ExceptionHandler(value
            = { IllegalArgumentException.class, IllegalStateException.class,Exception.class })
    protected ResponseEntity<Object> handleConflict(
            RuntimeException ex, WebRequest request) {
        String bodyOfResponse = "unable to process request";
        HttpHeaders httpHeaders=new HttpHeaders();
        String CR_ID=UUID.randomUUID().toString();
        httpHeaders.set("CorrelationID",CR_ID);
        //log.error("CR_ID:{} AND exception is: {}",CR_ID,ex.fillInStackTrace());
        return handleExceptionInternal(ex, bodyOfResponse,httpHeaders
                , HttpStatus.INTERNAL_SERVER_ERROR, request);
    }
}
