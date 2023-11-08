const quoteText = document.getElementById("quote-text");
const authorText = document.getElementById("author");
const searchButton = document.getElementById("search-button");
const authorInput = document.getElementById("author-input");

// Function to fetch and display a random quote
async function getRandomQuote() {
    const response = await fetch('https://quotable.io/random');
    const data = await response.json();
    quoteText.textContent = data.content;
    authorText.textContent = `- ${data.author}`;
}

// Function to fetch and display quotes by a specific author
async function searchQuotesByAuthor(author) {
    const response = await fetch(`https://quotable.io/quotes?author=${author}`);
    const data = await response.json();
    if (data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        quoteText.textContent = data[randomIndex].content;
        authorText.textContent = `- ${author}`;
    } else {
        quoteText.textContent = "No quotes found for this author.";
        authorText.textContent = "";
    }
}

// Event listeners
window.addEventListener('DOMContentLoaded', getRandomQuote);
searchButton.addEventListener('click', () => {
    const author = authorInput.value.trim();
    if (author) {
        searchQuotesByAuthor(author);
    }
});

