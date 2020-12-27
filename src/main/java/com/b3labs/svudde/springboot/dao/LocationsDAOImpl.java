package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.Locations;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class LocationsDAOImpl implements LocationsDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Locations> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Locations> query = currentSession.createQuery("from Locations", Locations.class);
        List<Locations> list = query.getResultList();
        return list;
    }

    @Override
    public Locations get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        Locations locations = currentSession.get(Locations.class, id);
        return locations;
    }

    @Override
    public void save(Locations locations) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(locations);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        Locations locations = currentSession.get(Locations.class, id);
        currentSession.delete(locations);
    }
}
