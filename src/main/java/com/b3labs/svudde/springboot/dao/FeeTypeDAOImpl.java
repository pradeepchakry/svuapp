package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.FeeType;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class FeeTypeDAOImpl implements FeeTypeDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<FeeType> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<FeeType> query = currentSession.createQuery("from FeeType", FeeType.class);
        List<FeeType> list = query.getResultList();
        return list;
    }

    @Override
    public FeeType get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        FeeType feeType = currentSession.get(FeeType.class, id);
        return feeType;
    }

    @Override
    public void save(FeeType feeType) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(feeType);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        FeeType feeType = currentSession.get(FeeType.class, id);
        currentSession.delete(feeType);
    }
}
