package com.pedro256.sga.controllers;

import org.springframework.http.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.annotation.security.PermitAll;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @PermitAll
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserAuth userAuth){

        RestTemplate rt = new RestTemplate();

        HttpHeaders header = new HttpHeaders();
        header.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        MultiValueMap<String,String> formData = new LinkedMultiValueMap<>();
        formData.add("client_id","coruja-api-auth");
        formData.add("grant_type","password");
        formData.add("username",userAuth.username);
        formData.add("password",userAuth.password);


        HttpEntity<MultiValueMap<String,String>> ett =
                new HttpEntity<MultiValueMap<String,String>>(formData,header);


        var result = rt.postForEntity(
                "http://localhost:8181/auth/realms/crjapp/protocol/openid-connect/token",
                ett,
                String.class);
        return  result;
    }

    @PreAuthorize("hasRole('TEST')")
    @GetMapping("/")
    public ResponseEntity<String> get(){
        return new ResponseEntity<String>("Teste", HttpStatusCode.valueOf(200)) ;
    }

    public record  UserAuth (String username,String password){}
}
