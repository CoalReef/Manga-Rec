package com.mangarec.demo.DTOs;


import java.util.List;

public record MangaDataObject(List<DataWrapper> data) {

    public record DataWrapper(MangaData node) {
    }

    public record MangaData(
            String title,
            String synopsis,
            String rank,
            String id,
            String mean,
            String num_chapters
    ) {
    }
}
