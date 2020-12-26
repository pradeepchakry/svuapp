package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.StudyCenterCourseChange;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class StudyCenterCourseChangeDAOImpl implements StudyCenterCourseChangeDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<StudyCenterCourseChange> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<StudyCenterCourseChange> query = currentSession.createQuery("from StudyCenterCourseChange", StudyCenterCourseChange.class);
        List<StudyCenterCourseChange> list = query.getResultList();
        return list;
    }

    @Override
    public StudyCenterCourseChange get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        StudyCenterCourseChange studyCenterCourseChange = currentSession.get(StudyCenterCourseChange.class, id);
        return studyCenterCourseChange;
    }

    @Override
    public void save(StudyCenterCourseChange studyCenterCourseChange) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(studyCenterCourseChange);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        StudyCenterCourseChange studyCenterCourseChange = currentSession.get(StudyCenterCourseChange.class, id);
        currentSession.delete(studyCenterCourseChange);
    }
}
