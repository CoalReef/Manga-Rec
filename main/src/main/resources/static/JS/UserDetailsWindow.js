import { getMangaInfoById } from "./api.js";
import { createCard } from "./CreateMangaCards.js";


// Get DOM elements as variables
const cardBackground = document.getElementById("user-details-card-background");
const cardWrapper = document.getElementById("user-details-card");
const title = document.getElementById("title");
const averageRating = document.getElementById("average-rating");
const userRatingInput = document.getElementById("user-rating-input");
const chaptersReadInput = document.getElementById("chapters-read-input");
const confirmButton = document.getElementById("confirm-user-details");
const closeButton = document.getElementById("close-user-details-window");

export async function openUserDetailsWindow(mangaId) {
    // Get the manga info needed
    const mangaInfo = await getMangaInfoById(mangaId);

    // Create and show card
    title.textContent = mangaInfo.title;
    averageRating.textContent = mangaInfo.num_chapters;

    title.style.setProperty("display", "block");
    averageRating.style.setProperty("display", "block");
    userRatingInput.style.setProperty("display", "flex");
    chaptersReadInput.style.setProperty("display", "block");
    cardBackground.style.setProperty("display", "flex");
    cardWrapper.style.setProperty("display", "grid");

    // Pass off card creation to the CreateMangaCards.js file
    confirmButton.addEventListener("click", function() {
        closeUserDetailsWindow();
        createCard(mangaInfo);
    });
}

// Run close function on close button click
closeButton.addEventListener("click", closeUserDetailsWindow);

function closeUserDetailsWindow() {
    title.style.setProperty("display", "none");
    averageRating.style.setProperty("display", "none");
    userRatingInput.style.setProperty("display", "none");
    chaptersReadInput.style.setProperty("display", "none");
    cardBackground.style.setProperty("display", "none");
    cardWrapper.style.setProperty("display", "none");
}