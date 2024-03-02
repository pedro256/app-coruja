package com.pedro256.sga.controllers;

import com.pedro256.sga.dto.keycloack.KeycloakUser;
import com.pedro256.sga.services.keycloack.KeycloackService;
import org.keycloak.admin.client.resource.RolesResource;
import org.keycloak.representations.idm.RoleRepresentation;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/users")
@RestController
public class UsersController {

    private KeycloackService keycloackService;

    public UsersController(
            KeycloackService keycloackService
    ){
        this.keycloackService = keycloackService;
    }


    @PreAuthorize("hasRole('CORUJA_USER_VIEW')")
    @GetMapping("/view")
    public String view(){
        return  "VIEW";
    }
    @PreAuthorize("hasRole('ROLE_CORUJA_USER_LIST')")
    @GetMapping("/list")
    public String list(){
        return  "LIST";
    }

    @PostMapping("/create-user")
    public List<RoleRepresentation> CreateUserKeycloack(
            @RequestBody  KeycloakUser keycloakUser
    ){
        return keycloackService.initKeycloakUser(keycloakUser);
    }
}
