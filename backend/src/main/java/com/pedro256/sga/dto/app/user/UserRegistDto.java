package com.pedro256.sga.dto.app.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UserRegistDto {

    @NotEmpty(message = "The first name is required.")
    @Size(min = 2, max = 100, message = "The length of full name must be between 2 and 100 characters.")
    private String firstName;

    @Size( max = 100, message = "The length of full name must be max 100 characters.")
    private String lastName;

    @NotEmpty(message = "The email is required.")
    @Email(message = "The email address is invalid.", flags = { Pattern.Flag.CASE_INSENSITIVE })
    private String email;


    @NotEmpty(message = "The psswd is required.")
    @Size(min = 8, max = 100, message = "The length of full name must be between 8 and 100 characters.")
    private String psswd;

    private String CPF;
    private String phone;
}
