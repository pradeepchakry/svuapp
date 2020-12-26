package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.FeeType;

import java.util.List;

public interface FeeTypeDAO {

    List<FeeType> get();

    FeeType get(int feeId);

    void save(FeeType feeType);

    void delete(int feeId);
}
