package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.CourseSubject;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class CourseSubjectDAOImpl implements CourseSubjectDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<CourseSubject> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<CourseSubject> query = currentSession.createQuery("from CourseSubject", CourseSubject.class);
        List<CourseSubject> list = query.getResultList();
        return list;
    }

    @Override
    public CourseSubject get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        CourseSubject courseSubject = currentSession.get(CourseSubject.class, id);
        return courseSubject;
    }

    @Override
    public void save(CourseSubject courseSubject) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(courseSubject);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        CourseSubject courseSubject = currentSession.get(CourseSubject.class, id);
        currentSession.delete(courseSubject);
    }
}
