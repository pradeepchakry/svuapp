package com.b3labs.svudde.springboot.modal;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "spy_meta")
public class SpyMeta {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, name = "id")
    private Integer id;

    @Column(name = "residential_area")
    private String residentialArea;

    @Column(name = "controller_name")
    private String controllerName;

    @Column(name = "description")
    private String description;

    @Column(name = "keywords")
    private String keywords;

    @Column(name = "page_name")
    private String pageName;

    @Column(name = "title")
    private String title;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getResidentialArea() {
        return residentialArea;
    }

    public void setResidentialArea(String residentialArea) {
        this.residentialArea = residentialArea;
    }

    public String getControllerName() {
        return controllerName;
    }

    public void setControllerName(String controllerName) {
        this.controllerName = controllerName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getKeywords() {
        return keywords;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }

    public String getPageName() {
        return pageName;
    }

    public void setPageName(String pageName) {
        this.pageName = pageName;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
