package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.FeesDetails;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class FeesDetailsDAOImpl implements FeesDetailsDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<FeesDetails> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<FeesDetails> query = currentSession.createQuery("from FeesDetails", FeesDetails.class);
        List<FeesDetails> list = query.getResultList();
        return list;
    }

    @Override
    public FeesDetails get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        FeesDetails feesDetails = currentSession.get(FeesDetails.class, id);
        return feesDetails;
    }

    @Override
    public void save(FeesDetails feesDetails) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(feesDetails);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        FeesDetails feesDetails = currentSession.get(FeesDetails.class, id);
        currentSession.delete(feesDetails);
    }
}
