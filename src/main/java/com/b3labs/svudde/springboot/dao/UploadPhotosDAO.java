package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.UploadPhotos;

import java.util.List;

public interface UploadPhotosDAO {

    List<UploadPhotos> get();

    UploadPhotos get(int id);

    void save(UploadPhotos uploadPhotos);

    void delete(int id);
}
