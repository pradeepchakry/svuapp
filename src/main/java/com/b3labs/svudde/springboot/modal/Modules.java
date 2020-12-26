package com.b3labs.svudde.springboot.modal;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "modules")
public class Modules {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, name = "id")
    private Integer id;

    @Column(nullable = false, name = "module_name")
    private String moduleName;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getModuleName() {
        return moduleName;
    }

    public void setModuleName(String moduleName) {
        this.moduleName = moduleName;
    }
}
