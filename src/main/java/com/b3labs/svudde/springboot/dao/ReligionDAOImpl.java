package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.Religion;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class ReligionDAOImpl implements ReligionDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Religion> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Religion> query = currentSession.createQuery("from Religion", Religion.class);
        List<Religion> list = query.getResultList();
        return list;
    }

    @Override
    public Religion get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        Religion religion = currentSession.get(Religion.class, id);
        return religion;
    }

    @Override
    public void save(Religion religion) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(religion);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        Religion religion = currentSession.get(Religion.class, id);
        currentSession.delete(religion);
    }
}
