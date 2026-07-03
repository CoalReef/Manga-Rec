package com.mangarec.demo.Service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import com.mangarec.demo.DTOs.FinalMangaDataDTO;
import com.mangarec.demo.DTOs.MangaId;
import com.mangarec.demo.DTOs.MangaIdDataDTO;

@Service
public class ManagRecService {
    private final RestClient restClient = RestClient.create();
    private final String URL = "https://api.jikan.moe/v4/"; // Base uri for calls

    // Get the manga info with the ID
    public FinalMangaDataDTO getMangaInfo(String mangaName) {
        MangaId mangaId = getMangaId(mangaName);
        String mangaIdString = mangaId.mal_id();

        FinalMangaDataDTO finalMangaDataDTO = restClient.get()
        .uri(URL + "manga/" + mangaIdString + "/full")
        .retrieve()
        .body(FinalMangaDataDTO.class);

        return finalMangaDataDTO;
    }

    // Get the manga ID
    public MangaId getMangaId(String mangaName) {
        MagaId mangaIdDto = restClient.get()
        .uri("https://api.jikan.moe/v4/manga?q=" + mangaName)
        .retrieve()
        .body(MangaId.class);

        return mangaIdDto;
    }
}
