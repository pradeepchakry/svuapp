package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.BAGroup;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class BAGroupDAOImpl implements BAGroupDAO {
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<BAGroup> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<BAGroup> query = currentSession.createQuery("from BAGroup", BAGroup.class);
        List<BAGroup> list = query.getResultList();
        return list;
    }

    @Override
    public BAGroup get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        BAGroup baGroup = currentSession.get(BAGroup.class, id);
        return baGroup;
    }

    @Override
    public void save(BAGroup baGroup) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(baGroup);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        BAGroup baGroup = currentSession.get(BAGroup.class, id);
        currentSession.delete(baGroup);
    }
}
