package com.mangarec.demo.Controller;

import com.mangarec.demo.DTOs.MangaData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.mangarec.demo.DTOs.MangaDataReceiver;
import com.mangarec.demo.Service.MangaRecService;

@RestController
public class MangaRecController {

    // Autowired service objects to allow service calls from controller
    @Autowired
    MangaRecService service;

    // Get Manga info based on given input
    @GetMapping("/mangarec/getManga/{mangaName}")
    public ResponseEntity<MangaData> getManga(@PathVariable String mangaName) {
        return ResponseEntity.ok(service.getMangaInfo(mangaName)); //.ok() retruns a 200 status code letting JS know its okay
    }
}
