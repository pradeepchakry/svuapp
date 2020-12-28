package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.Nationality;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class NationalityDAOImpl implements NationalityDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Nationality> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Nationality> query = currentSession.createQuery("from Nationality", Nationality.class);
        List<Nationality> list = query.getResultList();
        return list;
    }

    @Override
    public Nationality get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        Nationality nationality = currentSession.get(Nationality.class, id);
        return nationality;
    }

    @Override
    public void save(Nationality nationality) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(nationality);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        Nationality nationality = currentSession.get(Nationality.class, id);
        currentSession.delete(nationality);
    }
}
