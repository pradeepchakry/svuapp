package com.b3labs.svudde.springboot.modal;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "locations")
public class Locations {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, name = "location_id")
    private Integer locationId;

    @Column(name = "parent_id")
    private Integer parentId;

    @Column(name = "location_name")
    private String locationName;

    @Column(name = "friendly_name")
    private String friendlyName;

    @Column(name = "created_by")
    private Integer createdBy;

    @Column(name = "created_on")
    private Date createdOn;

    @Column(nullable = false, columnDefinition = "TINYINT(1)", name = "is_active")
    private boolean isActive;

    @Column(nullable = false, columnDefinition = "TINYINT(1)", name = "is_delete")
    private boolean is_delete;

    public Integer getLocationId() {
        return locationId;
    }

    public void setLocationId(Integer locationId) {
        this.locationId = locationId;
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public String getLocationName() {
        return locationName;
    }

    public void setLocationName(String locationName) {
        this.locationName = locationName;
    }

    public String getFriendlyName() {
        return friendlyName;
    }

    public void setFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
    }

    public Integer getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(Integer createdBy) {
        this.createdBy = createdBy;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public boolean isIs_delete() {
        return is_delete;
    }

    public void setIs_delete(boolean is_delete) {
        this.is_delete = is_delete;
    }
}
