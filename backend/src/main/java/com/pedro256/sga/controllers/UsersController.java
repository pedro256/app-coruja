package com.pedro256.sga.controllers;

import com.pedro256.sga.dto.app.ResponseApi;
import com.pedro256.sga.dto.app.user.UserDto;
import com.pedro256.sga.dto.app.user.UserRegistDto;
import com.pedro256.sga.dto.keycloack.KeycloakUser;
import com.pedro256.sga.enums.EnumApiResponseStatus;
import com.pedro256.sga.services.app.user.UserService;
import com.pedro256.sga.services.app.user.UserServiceImpl;
import com.pedro256.sga.services.keycloack.KeycloackService;
import jakarta.validation.Valid;
import org.keycloak.admin.client.resource.RolesResource;
import org.keycloak.representations.idm.RoleRepresentation;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/users")
@RestController
public class UsersController {

    private UserServiceImpl userService;
    public UsersController(
            UserServiceImpl userService
    ){
        this.userService = userService;
    }


    //@PreAuthorize("hasRole('CORUJA_USER_VIEW')")
    @GetMapping("/view")
    public String view(){
        return  "VIEW";
    }
    //@PreAuthorize("hasRole('ROLE_CORUJA_USER_LIST')")
    @GetMapping("/list")
    public ResponseEntity list(){
        var r = userService.ListAll();

        return  ResponseEntity.ok(r);
    }

    @PostMapping("/create")
    public ResponseEntity CreateUserKeycloack(
            @Valid @RequestBody UserRegistDto userDto
    ){
        ResponseApi<UserDto> response = userService.Regist(userDto);

        if(response.isSucess()){
            return new ResponseEntity(response, HttpStatus.CREATED);
        }else
        if(response.getStt()==EnumApiResponseStatus.ERROR_VALIDATION.code()){
            return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity(response,HttpStatus.INTERNAL_SERVER_ERROR);
        }


    }
}
