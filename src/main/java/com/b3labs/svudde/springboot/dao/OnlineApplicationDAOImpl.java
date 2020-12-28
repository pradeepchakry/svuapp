package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.OnlineApplication;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.io.Serializable;
import java.util.List;

@Repository
public class OnlineApplicationDAOImpl implements OnlineApplicationDAO {

    Logger logger = LoggerFactory.getLogger(OnlineApplicationDAOImpl.class);

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<OnlineApplication> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<OnlineApplication> query = currentSession.createQuery("from OnlineApplication", OnlineApplication.class);
        List<OnlineApplication> list = query.getResultList();
        return list;
    }

    @Override
    public OnlineApplication get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        OnlineApplication onlineApplication = currentSession.get(OnlineApplication.class, id);
        return onlineApplication;
    }

    @Override
    public Integer save(OnlineApplication onlineApplication) {
        Session currentSession = entityManager.unwrap(Session.class);
        Integer obj = (Integer) currentSession.save(onlineApplication);
        logger.info(obj.toString());
        return obj;
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        OnlineApplication onlineApplication = currentSession.get(OnlineApplication.class, id);
        currentSession.delete(onlineApplication);
    }
}
