package com.mangarec.demo.DTOs;

public class FinalMangaDataDTO {
    public record FinalMangaDataDTO(
        String synopsis;
        String title_english; 
        String chapters;
        String volumes;
        String status;
    )
}
