package com.pedro256.sga.controllers;

import com.pedro256.sga.components.RestTemplateResponseErrorHandler;
import com.pedro256.sga.dto.app.ResponseApi;
import com.pedro256.sga.dto.app.auth.ResposeAuthenticatedDto;
import org.springframework.http.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import javax.annotation.security.PermitAll;
import java.util.ArrayList;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @PermitAll
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody UserAuth userAuth){


        RestTemplate rt = new RestTemplate();
        //rt.setErrorHandler(new RestTemplateResponseErrorHandler());

        HttpHeaders header = new HttpHeaders();
        header.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        MultiValueMap<String,String> formData = new LinkedMultiValueMap<>();
        formData.add("client_id","coruja-api-auth");
        formData.add("grant_type","password");
        formData.add("username",userAuth.username);
        formData.add("password",userAuth.password);


        HttpEntity<MultiValueMap<String,String>> ett =
                new HttpEntity<MultiValueMap<String,String>>(formData,header);


        try {
            var result = rt.postForEntity(
                    "http://localhost:8181/auth/realms/crjapp/protocol/openid-connect/token",
                    ett,
                    ResposeAuthenticatedDto.class);
            var response = new ResponseApi<ResposeAuthenticatedDto>();
            response.setData(result.getBody());

            return new ResponseEntity(response,HttpStatus.OK);
        }catch (HttpClientErrorException e){
            var response = new ResponseApi<ResposeAuthenticatedDto>();
            response.setData(null);
            response.setSucess(false);
            response.setStt(0);
            ArrayList<String> msg = new ArrayList<>();
            msg.add(e.getMessage());
            msg.add(e.getResponseBodyAsString());
            //msg.add(e.getCause().toString());
            response.setMessages(msg);
            return new ResponseEntity(response,e.getStatusCode());
        }

    }

    @PreAuthorize("hasRole('TEST')")
    @GetMapping("/")
    public ResponseEntity<String> get(){
        return new ResponseEntity<String>("Teste", HttpStatusCode.valueOf(200)) ;
    }

    public record  UserAuth (String username,String password){}
}
