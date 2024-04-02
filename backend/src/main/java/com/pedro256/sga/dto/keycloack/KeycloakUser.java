package com.pedro256.sga.dto.keycloack;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class KeycloakUser {

    private String username;
    private String firstName;
    private String lastName;


    private String password;

    private String email;

    public KeycloakUser(){

    }

}
