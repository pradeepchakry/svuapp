package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.model.ApplicationFineSchedule;

import java.util.List;

public interface ApplicationFineScheduleDAO {

    List<ApplicationFineSchedule> get();

    ApplicationFineSchedule get(int fid);

    void save(ApplicationFineSchedule applicationFineSchedule);

    void delete(int fid);
}
