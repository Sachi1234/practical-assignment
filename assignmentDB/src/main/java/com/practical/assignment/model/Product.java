package com.practical.assignment.model;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto generate Id...
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "quantity")
    private String quantity;

    @Column(name = "price")
    private Double price;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy="productSet")
    @Getter(onMethod = @__(     @JsonIgnore))
    @Setter
    private Set<Category> categorySet = new HashSet<Category>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "product")
    private Set<Image> images = new HashSet<Image>(
            0);

}
