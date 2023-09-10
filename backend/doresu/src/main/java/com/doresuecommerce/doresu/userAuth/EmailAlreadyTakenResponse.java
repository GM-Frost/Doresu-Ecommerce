package com.doresuecommerce.doresu.userAuth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EmailAlreadyTakenResponse {
    private String message;
    private Integer status;
}