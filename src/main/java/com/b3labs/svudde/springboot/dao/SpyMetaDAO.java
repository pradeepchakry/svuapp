package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.SpyMeta;

import java.util.List;

public interface SpyMetaDAO {

    List<SpyMeta> get();

    SpyMeta get(int id);

    void save(SpyMeta spyMeta);

    void delete(int id);
}
