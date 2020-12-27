package com.b3labs.svudde.springboot.model;

import javax.persistence.*;

@Entity
@Table(name = "nationality")
public class UploadPhotos {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, name = "id")
    private Integer id;

    @Column(nullable = false, name = "image_tpe")
    private String imageType;

    @Column(name = "post_id")
    private int postId;

    @Column(name = "upload_image")
    private String uploadImage;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImageType() {
        return imageType;
    }

    public void setImageType(String imageType) {
        this.imageType = imageType;
    }

    public int getPostId() {
        return postId;
    }

    public void setPostId(int postId) {
        this.postId = postId;
    }

    public String getUploadImage() {
        return uploadImage;
    }

    public void setUploadImage(String uploadImage) {
        this.uploadImage = uploadImage;
    }
}
