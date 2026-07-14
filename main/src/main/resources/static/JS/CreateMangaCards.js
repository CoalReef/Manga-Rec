import { getMangaInfo } from "./api.js";
import { getMangaInfoById } from "./api.js";

// Configure variable names of DOM elements

// Input fields
const inputBox = document.getElementById("add-search-bar");

// Buttons
const searchButton = document.getElementById("search-button");
const addMangaButton = document.getElementById("add-manga-button");
const closeCardButton = document.getElementById("close-card-button");

// Output Fields
const searchResults = document.getElementById("search-results");
const userMangasWrapper = document.getElementById("user-mangas-container");

// Div/Wrappers
const addCardWrapper = document.getElementById("add-manga-card");
const addCardBackground = document.getElementById("card-background");

// Fetch API Data based on user input on click of confirm search button
searchButton.addEventListener("click", async function startMangaSearch()  {
    const mangaInfo = await getMangaInfo(inputBox.value);

    // Search results as buttons allow user to select which manga they'd like to add
    const buttonId = mangaInfo.id;
    searchResults.innerHTML = "" // Clear results before adding new results
    searchResults.insertAdjacentHTML(
        "beforeend",
        `<button class="search-result-buttons" id="${buttonId}">${mangaInfo.title}</button>`
    );
});

searchResults.addEventListener("click", async function(event) {
    if (event.target.classList.contains("search-result-buttons")) {
        const mangaForCard = await getMangaInfoById(event.target.id);

        // Creating the cards
        const cardWrapper = document.createElement("div");
        const cardTitle = document.createElement("h1");
        const cardSynopsis = document.createElement("p");

        cardWrapper.classList.add("card-backgrounds");
        cardTitle.classList.add("card-titles");
        cardSynopsis.classList.add("card-synopses");

        cardWrapper.append(cardTitle);
        cardWrapper.append(cardSynopsis);

        cardTitle.textContent = mangaForCard.title;
        cardSynopsis.textContent = mangaForCard.synopsis;

        userMangasWrapper.append(cardWrapper);
    }
});