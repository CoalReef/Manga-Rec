// Pre config of variables for document elements
const inputBox = document.getElementById("text-box");
const searchButton = document.getElementById("search-button");
const outputTest = document.getElementById("data-return");

// Call for the data asynchronously
async function getMangaInfo(mangaName) {
    const response = await fetch("http://localhost:8080/mangarec/getManga/" + mangaName);
    return await response.json();
}


searchButton.addEventListener("click", async function startMangaSearch()  {
    const mangaInfo = await getMangaInfo(inputBox.value);

    outputTest.innerHTML = mangaInfo.url;
    console.log(mangaInfo);
});



