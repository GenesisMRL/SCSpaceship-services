package com.SCSpaceshipservices.api.service;

import com.SCSpaceshipservices.api.dto.SpaceshipDetailsDto;
import com.SCSpaceshipservices.api.model.SpaceshipEntity;

import javax.management.InstanceNotFoundException;
import java.util.List;

public interface SpaceshipService {

    SpaceshipEntity getProductById (Long id) throws InstanceNotFoundException;

    List<SpaceshipDetailsDto> getAllProducts();
}
