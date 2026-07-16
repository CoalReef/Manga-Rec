export async function getMangaByName(name) {
    const response = await fetch("http://localhost:8080/mangarec/getMangaByName/" + name);
    return await response.json();
}

export async function getMangaInfoById(id) {
    const response = await fetch("http://localhost:8080/mangarec/getMangaById/" + id);
    return await response.json();
}