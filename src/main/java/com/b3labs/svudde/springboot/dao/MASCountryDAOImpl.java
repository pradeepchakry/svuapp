package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.MASCountry;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class MASCountryDAOImpl implements MASCountryDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<MASCountry> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<MASCountry> query = currentSession.createQuery("from MASCountry", MASCountry.class);
        List<MASCountry> list = query.getResultList();
        return list;
    }

    @Override
    public MASCountry get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        MASCountry masCountry = currentSession.get(MASCountry.class, id);
        return masCountry;
    }

    @Override
    public void save(MASCountry masCountry) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(masCountry);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        MASCountry masCountry = currentSession.get(MASCountry.class, id);
        currentSession.delete(masCountry);
    }
}
