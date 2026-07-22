import { getMangaInfoById } from "./api.js";
import { createCard } from "./CreateMangaCards.js";


// Get DOM elements as variables
const cardBackground = document.getElementById("user-details-card-background");
const cardWrapper = document.getElementById("user-details-card");
const title = document.getElementById("title");
const averageRating = document.getElementById("average-rating");
const userRatingInputField = document.getElementById("user-rating-input");
const chaptersReadInputField = document.getElementById("chapters-read-input");
const userRatingInputValue = document.getElementById("user-rating-input-box");
const chaptersReadInputValue = document.getElementById("chapters-read-input-box");
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
    userRatingInputField.style.setProperty("display", "flex");
    chaptersReadInputField.style.setProperty("display", "block");
    cardBackground.style.setProperty("display", "flex");
    cardWrapper.style.setProperty("display", "grid");

    // Pass off card creation to the CreateMangaCards.js file
    confirmButton.addEventListener("click", function() {
        closeUserDetailsWindow();

        // Create an object of the users data to pass to card creation
        const userData = {
            userRating : userRatingInputValue.value,
            chapterProgress : chaptersReadInputValue.value
        }

        createCard(mangaInfo, userData);
    }, {once : true});
}

// call the close function when close button clicked
closeButton.addEventListener("click", closeUserDetailsWindow);

// Close window function
function closeUserDetailsWindow() {
    title.style.setProperty("display", "none");
    averageRating.style.setProperty("display", "none");
    userRatingInputField.style.setProperty("display", "none");
    chaptersReadInputField.style.setProperty("display", "none");
    cardBackground.style.setProperty("display", "none");
    cardWrapper.style.setProperty("display", "none");
}