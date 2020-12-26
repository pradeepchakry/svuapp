package com.b3labs.svudde.springboot.dao;

import com.b3labs.svudde.springboot.modal.FeeType;

import java.util.List;

public interface FeeTypeDAO {

    public List<FeeType> get();

    public FeeType get(int feeId);

    public void save(FeeType feeType);

    public void delete(int feeId);
}
