package com.b3labs.svudde.springboot.dao;


import com.b3labs.svudde.springboot.model.StudyCentre;

import java.util.List;

public interface StudyCentreDAO {

    //boolean update(StudyCentre student);

    boolean save(StudyCentre student);

    StudyCentre get(Integer id);

    //boolean delete(Integer id);

    List<StudyCentre> getAll() ;

    boolean validateUser(String userID,String password);

    boolean resetPassword(String userID,String password);

}
