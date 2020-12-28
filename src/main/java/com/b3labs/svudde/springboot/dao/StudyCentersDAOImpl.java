package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.StudyCenters;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class StudyCentersDAOImpl implements StudyCentersDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<StudyCenters> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<StudyCenters> query = currentSession.createQuery("from StudyCenters", StudyCenters.class);
        List<StudyCenters> list = query.getResultList();
        return list;
    }

    @Override
    public StudyCenters get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        StudyCenters studyCenters = currentSession.get(StudyCenters.class, id);
        return studyCenters;
    }

    @Override
    public void save(StudyCenters studyCenters) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(studyCenters);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        StudyCenters studyCenters = currentSession.get(StudyCenters.class, id);
        currentSession.delete(studyCenters);
    }
}
