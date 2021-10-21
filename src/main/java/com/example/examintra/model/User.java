package com.example.examintra.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class User implements Serializable {
    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private int coup;

    private int coupRandom;

    private boolean match;


}
