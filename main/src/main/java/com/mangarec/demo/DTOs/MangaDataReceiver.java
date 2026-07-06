package com.mangarec.demo.DTOs;

// Object whose job it is to catch the initial package and then pass off the actual data handing to a MangaData object
public record MangaDataReceiver(
        MangaData data
) {}

