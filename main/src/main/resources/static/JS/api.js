export async function getMangaInfo(mangaName) {
    const response = await fetch("http://localhost:8080/mangarec/getManga/" + mangaName);
    return await response.json();
}