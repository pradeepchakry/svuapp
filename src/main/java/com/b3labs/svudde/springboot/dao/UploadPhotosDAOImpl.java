package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.UploadPhotos;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class UploadPhotosDAOImpl implements UploadPhotosDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<UploadPhotos> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<UploadPhotos> query = currentSession.createQuery("from UploadPhotos", UploadPhotos.class);
        List<UploadPhotos> list = query.getResultList();
        return list;
    }

    @Override
    public UploadPhotos get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        UploadPhotos uploadPhotos = currentSession.get(UploadPhotos.class, id);
        return uploadPhotos;
    }

    @Override
    public void save(UploadPhotos uploadPhotos) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(uploadPhotos);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        UploadPhotos uploadPhotos = currentSession.get(UploadPhotos.class, id);
        currentSession.delete(uploadPhotos);
    }
}
