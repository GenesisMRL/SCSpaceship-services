package com.SCSpaceshipservices.api.converter;

import com.SCSpaceshipservices.api.dto.SpaceshipDetailsDto;
import com.SCSpaceshipservices.api.model.SpaceshipEntity;

public class SpaceshipConverter {

    public static SpaceshipDetailsDto getSpaceshipDetailsDto (SpaceshipEntity entity) {
        return SpaceshipDetailsDto.builder()
                .id(entity.getId())
                .name(entity.getName())
                .price(entity.getPrice())
                .description(entity.getDescription())
                .available(entity.getAvailable())
                .img(entity.getImg())
                .category(entity.getCategory())
                .manufacturer(entity.getManufacturer())
                .manufacturerPathParam(entity.getManufacturerPathParam())
                .length(entity.getLength())
                .height(entity.getHeight())
                .mass(entity.getMass())
                .maxCrew(entity.getMaxCrew())
                .build();
    }

}
