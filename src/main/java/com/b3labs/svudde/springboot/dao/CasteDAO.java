package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.Caste;

import java.util.List;

public interface CasteDAO {

    List<Caste> get();

    Caste get(int cId);

    void save(Caste caste);

    void delete(int cId);
}
