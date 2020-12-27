package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.UserLogin;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class UserLoginDAOImpl implements UserLoginDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<UserLogin> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<UserLogin> query = currentSession.createQuery("from UserLogin", UserLogin.class);
        List<UserLogin> list = query.getResultList();
        return list;
    }

    @Override
    public UserLogin get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        UserLogin userLogin = currentSession.get(UserLogin.class, id);
        return userLogin;
    }

    @Override
    public void save(UserLogin userLogin) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(userLogin);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        UserLogin userLogin = currentSession.get(UserLogin.class, id);
        currentSession.delete(userLogin);
    }
}
