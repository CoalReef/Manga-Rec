package com.mangarec.demo.DTOs;

// Need this for the response when searching for 1 manga by an ID
public record FlatMangaDataObject(
        String title,
        String synopsis,
        String rank,
        String id,
        String mean,
        String num_chapters
) {

}
