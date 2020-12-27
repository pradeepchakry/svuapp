package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.Academics;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class AcademicsDAOImpl implements AcademicsDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Academics> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Academics> query = currentSession.createQuery("from Academics", Academics.class);
        List<Academics> list = query.getResultList();
        return list;
    }

    @Override
    public Academics get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        Academics academics = currentSession.get(Academics.class, id);
        return academics;
    }

    @Override
    public void save(Academics academics) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(academics);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        Academics academics = currentSession.get(Academics.class, id);
        currentSession.delete(academics);
    }
}
