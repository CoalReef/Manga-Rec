package com.mangarec.demo.Service;

import com.mangarec.demo.DTOs.MangaData;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import com.mangarec.demo.DTOs.MangaDataReceiver;
import com.mangarec.demo.DTOs.MangaIdResult;

@Service
public class MangaRecService {
    private final RestClient restClient = RestClient.create();
    private final String URL = "https://api.myanimelist.net/v2/"; // Base url for calls
    private final String KEYNAME = "X-MAL-CLIENT-ID"; // Dont feel like typing this over and over
    private final String APIID = "963764123e5ee0b25370226e10a624b0";

    // Get the manga info with the ID
    public MangaData getMangaInfo(String mangaQuery, String type) {

        // Search by title
        if (type.equals("title")) {
            MangaIdResult mangaId = getMangaId(mangaQuery);
            String mangaIdString = mangaId.data().get(0).node().id();

            MangaData mangaData = restClient.get()
                    .uri(URL + "manga/" + mangaIdString + "?fields=title,synopsis,rank,id")
                    .header(KEYNAME, APIID)
                    .retrieve()
                    .body(MangaData.class);

            return mangaData;
        } else {
            MangaData mangaData = restClient.get()
                    .uri(URL + "manga/" + mangaQuery + "?fields=title,synopsis,rank,id")
                    .header(KEYNAME, APIID)
                    .retrieve()
                    .body(MangaData.class);

            return mangaData;
        }
    }

    // Get the manga ID
    public MangaIdResult getMangaId(String mangaName) {
        MangaIdResult mangaIdDto = restClient.get()
                .uri(URL + "manga?q=" + mangaName + "&limit=1")
                .header(KEYNAME, APIID)
                .retrieve()
                .body(MangaIdResult.class);

        return mangaIdDto;
    }
}
