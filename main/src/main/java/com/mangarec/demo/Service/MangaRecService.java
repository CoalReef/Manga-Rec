package com.mangarec.demo.Service;

import com.mangarec.demo.DTOs.FlatMangaDataObject;
import com.mangarec.demo.DTOs.MangaDataObject;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import com.mangarec.demo.DTOs.MangaIdObject;

@Service
public class MangaRecService {
    private final RestClient restClient = RestClient.create();
    private final String URL = "https://api.myanimelist.net/v2/"; // Base url for calls
    private final String KEYNAME = "X-MAL-CLIENT-ID"; // Don't feel like typing this over and over
    private final String APIID = "963764123e5ee0b25370226e10a624b0";
    private final String SEARCH_LIMIT = "5"; // Easier to change the search result limit


    // Get the manga ID
    public MangaIdObject getMangaId(String mangaName) {
        return restClient.get()
                .uri(URL + "manga?q=" + mangaName + "&limit=1")
                .header(KEYNAME, APIID)
                .retrieve()
                .body(MangaIdObject.class);
    }

    // Need a different class for flat 1 layer responses, like when searching by ID
    public FlatMangaDataObject getMangaById(String id) {
        // Finds specific manga when given the ID from the call
        return restClient.get()
                .uri(URL + "manga/" + id + "?fields=title,synopsis,rank,id")
                .header(KEYNAME, APIID)
                .retrieve()
                .body(FlatMangaDataObject.class);
    }

    // Searching by name returns multiple results, different JSON structure needs different DTO
    public MangaDataObject getMangaByName(String name) {
        return restClient.get()
                .uri(URL + "manga?q=" + name + "&limit=" + SEARCH_LIMIT + "?fields=title,synposis,rank,id")
                .header(KEYNAME, APIID)
                .retrieve()
                .body(MangaDataObject.class);
    }
}
