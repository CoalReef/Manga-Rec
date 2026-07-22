import { getMangaByName } from "./api.js";
import { getMangaInfoById } from "./api.js";
import { openUserDetailsWindow } from "./UserDetailsWindow.js"

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
    searchResults.innerHTML = "" // Clear results before adding new results
    const resultList = await getMangaByName(inputBox.value);
    for (let i = 0; i < resultList.data.length; i++) {
        const mangaInfo = resultList.data[i].node;

        // Search results as buttons allow user to select which manga they'd like to add
        const buttonId = mangaInfo.id;
        searchResults.insertAdjacentHTML(
            "beforeend",
            `<button class="search-result-buttons" id="${buttonId}">${mangaInfo.title}</button>`
        );
    }
});

// Detect a click and open the user details window
searchResults.addEventListener("click", async function(event) {
    if (event.target.classList.contains("search-result-buttons")) {
        // Open the window to prompt user for their detail input
        await openUserDetailsWindow(event.target.id);
    }
});


// Create the card with the info received from the user details window
export function createCard(mangaForCard, userDetails) {
    // Creating the cards
    const cardWrapper = document.createElement("div");
    const cardTitle = document.createElement("h1");
    const cardSynopsis = document.createElement("p");
    const userRating = document.createElement("p");
    const currentChapter = document.createElement("p");

    cardWrapper.classList.add("card-backgrounds");
    cardTitle.classList.add("card-titles");
    cardSynopsis.classList.add("card-synopses");
    userRating.classList.add("user-rating");
    currentChapter.classList.add("current-chapter");

    cardWrapper.append(cardTitle);
    cardWrapper.append(cardSynopsis);
    cardWrapper.append(userRating);
    cardWrapper.append(currentChapter);

    cardTitle.textContent = mangaForCard.title;
    cardSynopsis.textContent = mangaForCard.synopsis;
    userRating.textContent = userDetails.userRating;
    currentChapter.textContent = userDetails.chapterProgress;

    userMangasWrapper.append(cardWrapper);
}