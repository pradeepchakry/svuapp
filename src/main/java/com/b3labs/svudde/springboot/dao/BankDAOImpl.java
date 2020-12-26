package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.Bank;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class BankDAOImpl implements BankDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Bank> get() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Bank> query = currentSession.createQuery("from Bank", Bank.class);
        List<Bank> list = query.getResultList();
        return list;
    }

    @Override
    public Bank get(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        Bank bank = currentSession.get(Bank.class, id);
        return bank;
    }

    @Override
    public void save(Bank bank) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(bank);
    }

    @Override
    public void delete(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        Bank bank = currentSession.get(Bank.class, id);
        currentSession.delete(bank);
    }
}
