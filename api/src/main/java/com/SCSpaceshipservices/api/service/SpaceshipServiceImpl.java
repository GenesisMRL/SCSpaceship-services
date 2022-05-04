package com.SCSpaceshipservices.api.service;

import com.SCSpaceshipservices.api.converter.SpaceshipConverter;
import com.SCSpaceshipservices.api.dto.SpaceshipDetailsDto;
import com.SCSpaceshipservices.api.model.SpaceshipEntity;
import com.google.gson.Gson;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.management.InstanceNotFoundException;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SpaceshipServiceImpl implements SpaceshipService {

    Gson gson = new Gson();
    SpaceshipEntity[] spaceshipArray;

    {
        try {
            spaceshipArray = gson.fromJson(new FileReader("src/main/resources/products.json"), SpaceshipEntity[].class);

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    @Override
    public SpaceshipEntity getProductById(Long id) throws InstanceNotFoundException {
        for (SpaceshipEntity spaceship : spaceshipArray) {
            if (spaceship.getId() == id) {
                return spaceship;
            }
        }
        throw new InstanceNotFoundException("No Spaceship found with id " + id);
    }

    @Override
    public List<SpaceshipDetailsDto> getAllProducts() {
        List<SpaceshipDetailsDto> spaceshipList = new ArrayList<>();
        for (SpaceshipEntity spaceship : spaceshipArray) {
            spaceshipList.add(SpaceshipConverter.getSpaceshipDetailsDto(spaceship));
        }
        return spaceshipList;
    }
}
