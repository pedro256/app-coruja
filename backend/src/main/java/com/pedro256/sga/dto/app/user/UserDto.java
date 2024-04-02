package com.pedro256.sga.dto.app.user;

import lombok.Data;

import java.util.UUID;

@Data
public class UserDto {
    private UUID id;
    private String name;
    private String secondName;
    private String email;
    private String CPF;
    private String phone;
    private String keycloakId;
}
