package com.SCSpaceshipservices.api.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import java.util.List;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SpaceshipEntity {

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
    private List<PromotionEntity> promotions;
}
