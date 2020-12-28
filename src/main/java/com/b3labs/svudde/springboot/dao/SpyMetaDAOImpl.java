package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.SpyMeta;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class SpyMetaDAOImpl implements SpyMetaDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<SpyMeta> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<SpyMeta> query = currentSession.createQuery("from SpyMeta", SpyMeta.class);
        List<SpyMeta> list = query.getResultList();
        return list;
    }

    @Override
    public SpyMeta get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        SpyMeta spyMeta = currentSession.get(SpyMeta.class, id);
        return spyMeta;
    }

    @Override
    public void save(SpyMeta spyMeta) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(spyMeta);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        SpyMeta spyMeta = currentSession.get(SpyMeta.class, id);
        currentSession.delete(spyMeta);
    }
}
