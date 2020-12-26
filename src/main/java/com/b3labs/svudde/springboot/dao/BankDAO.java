package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.BAGroup;
import com.b3labs.svudde.springboot.modal.Bank;

import java.util.List;

public interface BankDAO {

    public List<Bank> get();

    public Bank get(int bankId);

    public void save(Bank bank);

    public void delete(int bankId);
}
