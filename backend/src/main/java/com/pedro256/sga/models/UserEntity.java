package com.pedro256.sga.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Entity
@Data
@Table(name = "users")
public class UserEntity extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name="user_id")
    private UUID id;

    @Column(name = "first_name",length = 100,nullable = false)
    private String firstName;
    @Column(name = "last_name",length = 100,nullable = false)
    private String lastName;
    @Column(name = "email",length = 200,nullable = false)
    private String email;
    @Column(name = "phone")
    private String phone;
    @Column(name = "cpf")
    private String cpf;
    @Column(name = "active")
    private boolean active;

    @Column(name = "keycloack_id")
    private String keycloackId;
}
