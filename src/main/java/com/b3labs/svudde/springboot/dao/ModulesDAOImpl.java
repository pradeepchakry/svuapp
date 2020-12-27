package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.Modules;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class ModulesDAOImpl implements ModulesDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Modules> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Modules> query = currentSession.createQuery("from Modules", Modules.class);
        List<Modules> list = query.getResultList();
        return list;
    }

    @Override
    public Modules get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        Modules modules = currentSession.get(Modules.class, id);
        return modules;
    }

    @Override
    public void save(Modules modules) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(modules);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        Modules modules = currentSession.get(Modules.class, id);
        currentSession.delete(modules);
    }
}
