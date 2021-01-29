package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.StudyCentre;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class StudyCentreDAOImpl implements com.b3labs.svudde.springboot.dao.StudyCentreDAO {
    Logger logger = LoggerFactory.getLogger(StudyCentreDAOImpl.class);

    @Autowired
    private EntityManager entityManager;



   /* @Override
    public boolean update(StudyCentre student) {
        Session currentSession = entityManager.unwrap(Session.class);
        Transaction tx = currentSession.beginTransaction();
        currentSession.clear();
        currentSession.update(student);
        tx.commit();
        return true;
    }*/

    @Override
    public boolean save(StudyCentre studyCentre) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.save(studyCentre);
        return true;
    }

    @Override
    public StudyCentre get(Integer id) {
        Session currentSession = entityManager.unwrap(Session.class);
        StudyCentre student = currentSession.get(StudyCentre.class, id);
        return student;
    }

   /* @Override
    public boolean delete(Integer id) {
        Session currentSession = entityManager.unwrap(Session.class);
        Student student = currentSession.get(Student.class, id);
        Transaction tx = currentSession.beginTransaction();
        currentSession.delete(student);
        tx.commit();
        return true;
    }*/

    @Override
    public List<StudyCentre> getAll() {
            Session currentSession = entityManager.unwrap(Session.class);
            Query<StudyCentre> query = currentSession.createQuery("from StudyCentre", StudyCentre.class);
            List<StudyCentre> list = query.getResultList();
            return list;
        }




    @Override
    public StudyCentre validateUser(String userID,String password) {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<StudyCentre> query = currentSession.createQuery("from StudyCentre a where a.userID = :userID AND a.password = :password ",StudyCentre.class);
        query.setParameter("userID",userID);
        query.setParameter("password",password);
        List<StudyCentre> list= query.getResultList();
        if(!list.isEmpty()) {
            return list.get(0);
        }
        return null;
    }

    @Override
    public boolean resetPassword(String userID, String password) {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<StudyCentre> query = currentSession.createQuery("from StudyCentre a where a.userID = :userID ",StudyCentre.class);
        query.setParameter("userID",userID);
        List<StudyCentre> list= query.getResultList();
        StudyCentre studyCentre= list.get(0);
        studyCentre.setUserID(userID);
        studyCentre.setPassword(password);
        Transaction tx = currentSession.beginTransaction();
        currentSession.clear();
        currentSession.update(studyCentre);
        tx.commit();
        return true;
    }


}

