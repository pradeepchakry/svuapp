package com.b3labs.svudde.springboot.controller;

import com.b3labs.svudde.springboot.dao.StudentDAO;
import com.b3labs.svudde.springboot.dao.StudyCentreDAO;
import com.b3labs.svudde.springboot.model.LoginDetails;
import com.b3labs.svudde.springboot.model.StudyCentre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/studyCentres")
public class StudyCentreController {
    private final StudyCentreDAO studyCentreDAO;
    private final StudentDAO studentDAO;

    @Autowired
    public StudyCentreController(StudyCentreDAO studyCentreDAO, StudentDAO studentRepository) {
        this.studyCentreDAO = studyCentreDAO;
        this.studentDAO = studentRepository;
    }

    @PostMapping("/createStudyCentre")
    public ResponseEntity<StudyCentre> createStudyCentre(@RequestBody StudyCentre studyCentre) {
        boolean result = studyCentreDAO.save(studyCentre);
      /*  URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/createStudyCentre/{id}")
            .buildAndExpand(savedStudyCentre.getId()).toUri();*/
        if(result) {
            return ResponseEntity.status(HttpStatus.CREATED).body(studyCentre);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/updateStudyCentre/{id}")
    public ResponseEntity<StudyCentre> update(@PathVariable Integer id, @RequestBody StudyCentre studyCentre) {
        StudyCentre optionalStudyCentre = studyCentreDAO.get(id);
        if (optionalStudyCentre==null) {
            return ResponseEntity.unprocessableEntity().build();
        }

        studyCentre.setId(optionalStudyCentre.getId());
        boolean result=studyCentreDAO.save(studyCentre);
        if(result) {
            return ResponseEntity.status(HttpStatus.CREATED).body(studyCentre);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

   /* @DeleteMapping("/{id}")
    public ResponseEntity<StudyCentre> delete(@PathVariable Integer id) {
        Optional<StudyCentre> optionalStudyCentre = studyCentreRepository.findById(id);
        if (!optionalStudyCentre.isPresent()) {
            return ResponseEntity.unprocessableEntity().build();
        }

        deleteLibraryInTransaction(optionalStudyCentre.get());

        return ResponseEntity.noContent().build();
    }

    @Transactional
    public void deleteLibraryInTransaction(StudyCentre studyCentre) {
        studentRepository.deleteById(studyCentre.getId());
        studyCentreRepository.delete(studyCentre);
    }*/

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable Integer id) {
        StudyCentre optionalStudyCentre = studyCentreDAO.get(id);
        if (optionalStudyCentre==null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("invalid studycenter");
        }

        return ResponseEntity.ok(optionalStudyCentre);
    }

    @GetMapping("/")
    public ResponseEntity<List<StudyCentre>> getAll() {
        return ResponseEntity.ok(studyCentreDAO.getAll());
    }

    @PostMapping("/validateUser")
    public ResponseEntity validateUser(@RequestBody LoginDetails loginDetails) {

       boolean result = studyCentreDAO.validateUser(loginDetails.getUserID(), loginDetails.getPassword());
        if (!result) {
            return ResponseEntity.ok(result);
        }

        return ResponseEntity.ok(result);
    }
    @PostMapping("/resetPassword")
    public ResponseEntity resetPassword(@RequestBody LoginDetails loginDetails) {

        boolean result = studyCentreDAO.resetPassword(loginDetails.getUserID(), loginDetails.getPassword());
        if (!result) {
            return ResponseEntity.ok(result);
        }

        return ResponseEntity.ok(result);
    }
}
