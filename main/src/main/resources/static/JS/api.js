export async function getMangaInfo(mangaName) {
    const response = await fetch("http://localhost:8080/mangarec/getManga/" + mangaName + "/title");
    return await response.json();
}

export async function getMangaInfoById(mangaId) {
    const response = await fetch("http://localhost:8080/mangarec/getManga/" + mangaId + "/id");
    return await response.json();
}