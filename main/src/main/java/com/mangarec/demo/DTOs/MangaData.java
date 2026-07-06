package com.mangarec.demo.DTOs;

public record MangaData(
        String synopsis,
        String title_english,
        String chapters,
        String volumes,
        String status,
        String url
) {}
