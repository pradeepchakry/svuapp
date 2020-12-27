package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.StudyCenterChange;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class StudyCenterChangeDAOImpl implements StudyCenterChangeDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<StudyCenterChange> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<StudyCenterChange> query = currentSession.createQuery("from StudyCenterChange", StudyCenterChange.class);
        List<StudyCenterChange> list = query.getResultList();
        return list;
    }

    @Override
    public StudyCenterChange get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        StudyCenterChange studyCenterChange = currentSession.get(StudyCenterChange.class, id);
        return studyCenterChange;
    }

    @Override
    public void save(StudyCenterChange studyCenterChange) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(studyCenterChange);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        StudyCenterChange studyCenterChange = currentSession.get(StudyCenterChange.class, id);
        currentSession.delete(studyCenterChange);
    }
}
