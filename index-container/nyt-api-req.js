// Replace with your NYT API key
const apiKey = "8w9MVMHnqcwJ6cHnTjNXcCnXduGqXPkN";

async function fetchBookReviews(title) {
  const url = `https://api.nytimes.com/svc/books/v3/reviews.json?title=${encodeURIComponent(title)}&api-key=${apiKey}`; 
  // backticks for string literal - embedding variables
  // encode URI makes title in the link readable by servers e.g, fixing spaces
  try {
    const response = await fetch(url); // http call
    if (!response.ok) { // if not ok return the status of http req (returns int depending on error)
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); // if everything is ok ^ display results 
    console.log(data);
    displayResults(data.results);
  } catch (error) {
    console.error("Error fetching book reviews:", error);
    document.getElementById("results").innerHTML = `<p>Error: Unable to fetch reviews.</p>`;
  }
}

function displayResults(results) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = ""; // clear previous results

  if (results.length === 0) {
    resultsContainer.innerHTML = "<p>No reviews found for this book.</p>";
    return;
  }

  results.forEach(review => { // loops through array of book reviews (results)
    const reviewHTML = 
    `<div>
        <h3>${review.book_title}</h3>
        <p><strong>Author:</strong> ${review.book_author}</p>
        <p>${review.summary}</p>
        <a href="${review.url}" target="_blank">Read Full Review</a>
      </div>
      <hr>`;
    resultsContainer.innerHTML += reviewHTML;
    // append the generated HTML (reviewHTML) to the existing content in resultsDiv element
  });
}

// Event Listener for Search Button
document.getElementById("searchBtn").addEventListener("click", () => {
  const bookTitle = document.getElementById("bookTitle").value.trim();
  if (bookTitle) {
    fetchBookReviews(bookTitle);
  } else {
    alert("Please enter a book title.");
  }
});
