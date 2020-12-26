package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.SpyMeta;

import java.util.List;

public interface SpyMetaDAO {

    public List<SpyMeta> get();

    public SpyMeta get(int id);

    public void save(SpyMeta spyMeta);

    public void delete(int id);
}
