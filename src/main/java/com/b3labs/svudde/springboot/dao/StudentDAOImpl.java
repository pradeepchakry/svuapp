package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.Student;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.NativeQuery;
import org.hibernate.query.Query;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class StudentDAOImpl implements com.b3labs.svudde.springboot.dao.StudentDAO {
    Logger logger = LoggerFactory.getLogger(StudentDAOImpl.class);

    @Autowired
    private EntityManager entityManager;



    @Override
    public boolean update(Student student) {
        Session currentSession = entityManager.unwrap(Session.class);
        Transaction tx = currentSession.beginTransaction();
        currentSession.clear();
        currentSession.update(student);
        tx.commit();
        return true;
    }

    @Override
    public boolean save(Student student) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.save(student);
        return true;
    }

    @Override
    public Student get(Integer id) {
        Session currentSession = entityManager.unwrap(Session.class);
        Student student = currentSession.get(Student.class, id);
        return student;
    }

    @Override
    public boolean delete(Integer id) {
        Session currentSession = entityManager.unwrap(Session.class);
        Student student = currentSession.get(Student.class, id);
        Transaction tx = currentSession.beginTransaction();
        currentSession.delete(student);
        tx.commit();
        return true;
    }

    @Override
    public List<Student> getAll() {
            Session currentSession = entityManager.unwrap(Session.class);
            Query<Student> query = currentSession.createQuery("from Student", Student.class);
            List<Student> list = query.getResultList();
            return list;
        }


    @Override
    public List<Student> getAllStudentsByStudyCentreID(Integer id) {
        Session currentSession = entityManager.unwrap(Session.class);
        NativeQuery<Student> query = currentSession.createNativeQuery("select * from student a where a.study_centre_id = :id ",Student.class);
        query.setParameter("id",id);
        List<Student> list= query.getResultList();
        return list;
    }

    @Override
    public Student getStudentDetailsByMobileNo(String mobileNo) {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Student> query = currentSession.createQuery("from Student a where a.mobileNo = :mobileNo ",Student.class);
        query.setParameter("mobileNo",mobileNo);
        List<Student> list= query.getResultList();
        return list.get(0);
    }


}

