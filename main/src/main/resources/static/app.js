
// Call for the data asynchronously
async function getMangaInfo(mangaName) {
    const response = fetch("http://localhost:8080/mangarec/getManga/" + mangaName);
    return await response.json();
}



