package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.UserProfile;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class UserProfileDAOImpl implements UserProfileDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<UserProfile> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<UserProfile> query = currentSession.createQuery("from UserProfile", UserProfile.class);
        List<UserProfile> list = query.getResultList();
        return list;
    }

    @Override
    public UserProfile get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        UserProfile userProfile = currentSession.get(UserProfile.class, id);
        return userProfile;
    }

    @Override
    public void save(UserProfile userProfile) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(userProfile);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        UserProfile userProfile = currentSession.get(UserProfile.class, id);
        currentSession.delete(userProfile);
    }
}
