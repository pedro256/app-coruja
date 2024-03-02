package com.pedro256.sga.dto.keycloack;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class KeycloakUser {

    private String username;

    private String password;

    private String email;

    private boolean isAdmin;
}
