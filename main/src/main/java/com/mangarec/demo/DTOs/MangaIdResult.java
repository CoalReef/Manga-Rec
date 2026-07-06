package com.mangarec.demo.DTOs;


import java.util.List;

public record MangaIdResult(List<DataWrapper> data) {

    public record DataWrapper(MangaId node) {
    }

    public record MangaId(String id) {
    }
}
