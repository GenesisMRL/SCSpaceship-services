package com.SCSpaceshipservices.api.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
@Builder
public class SpaceshipDetailsDto {

    private Long id;
    private String name;
    private double price;
    private String description;
    private Integer available;
    private List<String> img;
    private Map<Integer, String> category;
    private String manufacturer;
    private String manufacturerPathParam;
    private double length;
    private double height;
    private String mass;
    private Integer maxCrew;
}
