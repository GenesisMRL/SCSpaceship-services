package com.SCSpaceshipservices.api.model;

import com.SCSpaceshipservices.api.enumerator.WiremockPromotionType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class PromotionEntity {
    private Long id;
    private WiremockPromotionType type;
    private Integer requiredQty;
    private Integer freeQty;
    private Double discountPercent;
}

/*
"promotions": [
      {
        "id": "1",
        "type": "BUY_X_GET_Y_FREE",
        "requiredQty": 3
        "freeQty": 1
      },
      {
        "id": "2",
        "type": "DIRECT_DISCOUNT",
        "discountPercent": 15
      },
      {
        "id": "3",
        "type": "DISCOUNT_ABOVE_X_PRODUCTS",
        "required_qty": 3,
        "discountPercent": 20
      },
    ]



 */