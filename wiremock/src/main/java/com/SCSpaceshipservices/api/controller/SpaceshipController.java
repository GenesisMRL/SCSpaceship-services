package com.SCSpaceshipservices.api.controller;

import com.SCSpaceshipservices.api.dto.SpaceshipDetailsDto;
import com.SCSpaceshipservices.api.model.SpaceshipEntity;
import com.SCSpaceshipservices.api.service.SpaceshipService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.management.InstanceNotFoundException;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class SpaceshipController {

    private final SpaceshipService productService;

    @GetMapping("/products/{id}")
    public ResponseEntity<SpaceshipEntity> getProductById(Long id) throws InstanceNotFoundException {
        log.info("Product with id {} requested", id);
        return ResponseEntity.ok(productService.getProductById(id));
    }

    @GetMapping("/products")
    public ResponseEntity<List<SpaceshipDetailsDto>> getAllProducts() {
        log.info("All products requested");
        return ResponseEntity.ok(productService.getAllProducts());
    }
}
