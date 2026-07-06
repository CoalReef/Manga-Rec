package com.mangarec.demo.Service;

import com.mangarec.demo.DTOs.MangaData;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import com.mangarec.demo.DTOs.MangaDataReceiver;
import com.mangarec.demo.DTOs.MangaId;

@Service
public class MangaRecService {
    private final RestClient restClient = RestClient.create();
    private final String URL = "https://api.jikan.moe/v4/"; // Base uri for calls

    // Get the manga info with the ID
    public MangaData getMangaInfo(String mangaName) {
        // MangaId mangaId = getMangaId(mangaName);
        // String mangaIdString = mangaId.mal_id();

        MangaDataReceiver dataReceiver = restClient.get()
        .uri(URL + "manga/" + mangaName + "/full")
        .retrieve()
        .body(MangaDataReceiver.class);

        MangaData mangaData = dataReceiver.data();
        System.out.println(mangaData);
        return mangaData;
    }

    // Get the manga ID
    public MangaId getMangaId(String mangaName) {
        MangaId mangaIdDto = restClient.get()
        .uri(URL + "manga?q=" + mangaName + "&limit=1")
        .retrieve()
        .body(MangaId.class);

        return mangaIdDto;
    }
}
