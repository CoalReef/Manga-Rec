package com.mangarec.demo.DTOs;

public record FinalMangaDataDTO(
        String synopsis,
        String title_english,
        String chapters,
        String volumes,
        String status,
        String url
) {}

