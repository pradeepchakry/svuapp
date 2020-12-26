package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.Permissions;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class PermissionsDAOImpl implements PermissionsDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Permissions> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Permissions> query = currentSession.createQuery("from Permissions", Permissions.class);
        List<Permissions> list = query.getResultList();
        return list;
    }

    @Override
    public Permissions get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        Permissions permissions = currentSession.get(Permissions.class, id);
        return permissions;
    }

    @Override
    public void save(Permissions permissions) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(permissions);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        Permissions permissions = currentSession.get(Permissions.class, id);
        currentSession.delete(permissions);
    }
}
