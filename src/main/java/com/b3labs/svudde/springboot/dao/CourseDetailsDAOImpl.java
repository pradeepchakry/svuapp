package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.CourseDetails;
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
public class CourseDetailsDAOImpl implements CourseDetailsDAO {
    Logger logger = LoggerFactory.getLogger(CourseDetailsDAOImpl.class);

    @Autowired
    private EntityManager entityManager;



    @Override
    public boolean update(CourseDetails courseDetails) {
        Session currentSession = entityManager.unwrap(Session.class);
        Transaction tx = currentSession.beginTransaction();
        currentSession.clear();
        currentSession.update(courseDetails);
        tx.commit();
        return true;
    }

    @Override
    public boolean save(CourseDetails courseDetails) {
        Session currentSession = entityManager.unwrap(Session.class);
        if(getCourseDetailsByName(courseDetails.getCourseSubject()) ==null) {
            currentSession.save(courseDetails);
            return true;
        } else {
            return false;
        }
    }
    @Override
    public boolean save(List<CourseDetails> courseDetails) {
        Session currentSession = entityManager.unwrap(Session.class);
        for (CourseDetails c : courseDetails) {
            if (getCourseDetailsByName(c.getCourseSubject()) == null) {
                currentSession.save(c);
            } else {
                return false;
            }
        }
       return true;
    }
    @Override
    public CourseDetails get(Integer id) {
        Session currentSession = entityManager.unwrap(Session.class);
        CourseDetails courseDetails = currentSession.get(CourseDetails.class, id);
        return courseDetails;
    }

    @Override
    public boolean delete(Integer id) {
        Session currentSession = entityManager.unwrap(Session.class);
        CourseDetails courseDetails = currentSession.get(CourseDetails.class, id);
        Transaction tx = currentSession.beginTransaction();
        currentSession.delete(courseDetails);
        tx.commit();
        return true;
    }

    @Override
    public List<CourseDetails> getAll() {
            Session currentSession = entityManager.unwrap(Session.class);
            Query<CourseDetails> query = currentSession.createQuery("from CourseDetails", CourseDetails.class);
            List<CourseDetails> list = query.getResultList();
            return list;
        }




    @Override
    public CourseDetails getCourseDetailsByID(Integer courseID) {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<CourseDetails> query = currentSession.createQuery("from CourseDetails a where a.courseID = :courseID ",CourseDetails.class);
        query.setParameter("courseID",courseID);
        List<CourseDetails> list= query.getResultList();
        return list.get(0);
    }

    @Override
    public CourseDetails getCourseDetailsByName(String courseSubject) {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<CourseDetails> query = currentSession.createQuery("from CourseDetails a where a.courseSubject = :courseSubject ",CourseDetails.class);
        query.setParameter("courseSubject",courseSubject);
        List<CourseDetails> list= query.getResultList();
        if(list.isEmpty()) {
            return null;
        } else {
            return list.get(0);
        }
    }
}

