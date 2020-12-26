package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.Caste;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class CasteDAOImpl implements CasteDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Caste> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Caste> query = currentSession.createQuery("from Caste", Caste.class);
        List<Caste> list = query.getResultList();
        return list;
    }

    @Override
    public Caste get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        Caste caste = currentSession.get(Caste.class, id);
        return caste;
    }

    @Override
    public void save(Caste caste) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(caste);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        Caste caste = currentSession.get(Caste.class, id);
        currentSession.delete(caste);
    }
}
