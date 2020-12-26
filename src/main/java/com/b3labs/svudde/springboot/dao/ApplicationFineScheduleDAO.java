package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.ApplicationFineSchedule;
import com.b3labs.svudde.springboot.modal.Employee;

import java.util.List;

public interface ApplicationFineScheduleDAO {

    public List<ApplicationFineSchedule> get();

    public ApplicationFineSchedule get(int fid);

    public void save(ApplicationFineSchedule applicationFineSchedule);

    public void delete(int fid);
}
