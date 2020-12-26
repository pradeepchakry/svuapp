package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.FeesDetails;

import java.util.List;

public interface FeesDetailsDAO {

    public List<FeesDetails> get();

    public FeesDetails get(int feesId);

    public void save(FeesDetails feesDetails);

    public void delete(int feesId);
}
