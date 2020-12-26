package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.Caste;

import java.util.List;

public interface CasteDAO {

    public List<Caste> get();

    public Caste get(int cId);

    public void save(Caste caste);

    public void delete(int cId);
}
