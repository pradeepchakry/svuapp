package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.ApplicationFineSchedule;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class ApplicationFineScheduleDAOImpl implements ApplicationFineScheduleDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<ApplicationFineSchedule> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<ApplicationFineSchedule> query = currentSession.createQuery("from ApplicationFineSchedule", ApplicationFineSchedule.class);
        List<ApplicationFineSchedule> list = query.getResultList();
        return list;
    }

    @Override
    public ApplicationFineSchedule get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        ApplicationFineSchedule applicationFineSchedule = currentSession.get(ApplicationFineSchedule.class, id);
        return applicationFineSchedule;
    }

    @Override
    public void save(ApplicationFineSchedule applicationFineSchedule) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(applicationFineSchedule);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        ApplicationFineSchedule applicationFineSchedule = currentSession.get(ApplicationFineSchedule.class, id);
        currentSession.delete(applicationFineSchedule);
    }
}
