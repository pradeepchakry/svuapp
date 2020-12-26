package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.FeesDetails;

import java.util.List;

public interface FeesDetailsDAO {

    List<FeesDetails> get();

    FeesDetails get(int feesId);

    void save(FeesDetails feesDetails);

    void delete(int feesId);
}
