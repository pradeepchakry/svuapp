package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.UploadPhotos;

import java.util.List;

public interface UploadPhotosDAO {

    public List<UploadPhotos> get();

    public UploadPhotos get(int id);

    public void save(UploadPhotos uploadPhotos);

    public void delete(int id);
}
