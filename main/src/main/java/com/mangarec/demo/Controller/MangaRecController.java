package com.mangarec.demo.Controller;

import com.mangarec.demo.DTOs.FlatMangaDataObject;
import com.mangarec.demo.DTOs.MangaDataObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.mangarec.demo.Service.MangaRecService;

@RestController
public class MangaRecController {

    // Autowired service objects to allow service calls from controller
    @Autowired
    MangaRecService service;

    // Get Manga info based on given input
    @GetMapping("/mangarec/getMangaByName/{name}") // Type means if it's a search by ID or by Title
    public ResponseEntity<MangaDataObject> getMangaByName(@PathVariable String name) {
        return ResponseEntity.ok(service.getMangaByName(name)); //.ok() returns a 200 status code letting JS know it's okay
    }

    @GetMapping("/mangarec/getMangaById/{id}")
    public ResponseEntity<FlatMangaDataObject> getMangaById(@PathVariable String id) {
        return ResponseEntity.ok(service.getMangaById(id));
    }
}
