// Pre config of variables for document elements
// Input fields
const inputBox = document.getElementById("add-search-bar");

// Buttons
const searchButton = document.getElementById("search-button");
const addMangaButton = document.getElementById("add-manga-button");
const closeCardButton = document.getElementById("close-card-button");

// Output Fields
const outputTest = document.getElementById("search-results");

// Div/Wrappers
const addCardWrapper = document.getElementById("add-manga-card");
const addCardBackground = document.getElementById("card-background");

// Call for the data asynchronously
async function getMangaInfo(mangaName) {
    const response = await fetch("http://localhost:8080/mangarec/getManga/" + mangaName);
    return await response.json();
}

// Fetch API Data based on user input on click of confim search button
searchButton.addEventListener("click", async function startMangaSearch()  {
    const mangaInfo = await getMangaInfo(inputBox.value);
    outputTest.innerHTML = mangaInfo.title;
    console.log(mangaInfo);
});

// Open pop up window for adding manga
addMangaButton.addEventListener("click", function openAddWindow() {
    inputBox.style.setProperty("display", "block");
    searchButton.style.setProperty("display", "block");
    outputTest.style.setProperty("display", "block");
    closeCardButton.style.setProperty("display", "block");
    addCardBackground.style.setProperty("display", "flex");
    addCardWrapper.style.setProperty("display", "grid");
});

closeCardButton.addEventListener("click", function closeCardButton() {
    inputBox.style.setProperty("display", "none");
    searchButton.style.setProperty("display", "none");
    outputTest.style.setProperty("display", "none");
    addCardBackground.style.setProperty("display", "none");
    addCardWrapper.style.setProperty("display", "none");
    closeCardButton.style.setProperty("display", "none");
});






