package com.pedro256.sga.models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;

import java.io.Serializable;


@Data
@MappedSuperclass
public class BaseEntity implements Serializable {
}
