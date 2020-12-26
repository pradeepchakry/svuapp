package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.Bank;

import java.util.List;

public interface BankDAO {

    List<Bank> get();

    Bank get(int bankId);

    void save(Bank bank);

    void delete(int bankId);
}
