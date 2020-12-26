package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.CourseChange;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class CourseChangeDAOImpl implements CourseChangeDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<CourseChange> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<CourseChange> query = currentSession.createQuery("from CourseChange", CourseChange.class);
        List<CourseChange> list = query.getResultList();
        return list;
    }

    @Override
    public CourseChange get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        CourseChange courseChange = currentSession.get(CourseChange.class, id);
        return courseChange;
    }

    @Override
    public void save(CourseChange courseChange) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(courseChange);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        CourseChange courseChange = currentSession.get(CourseChange.class, id);
        currentSession.delete(courseChange);
    }
}
