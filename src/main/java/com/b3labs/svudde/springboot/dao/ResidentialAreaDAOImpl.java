package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.ResidentialArea;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class ResidentialAreaDAOImpl implements ResidentialAreaDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<ResidentialArea> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<ResidentialArea> query = currentSession.createQuery("from ResidentialArea", ResidentialArea.class);
        List<ResidentialArea> list = query.getResultList();
        return list;
    }

    @Override
    public ResidentialArea get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        ResidentialArea residentialArea = currentSession.get(ResidentialArea.class, id);
        return residentialArea;
    }

    @Override
    public void save(ResidentialArea residentialArea) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(residentialArea);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        ResidentialArea residentialArea = currentSession.get(ResidentialArea.class, id);
        currentSession.delete(residentialArea);
    }
}
