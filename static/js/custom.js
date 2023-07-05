// Define your predefined search results
const searchResults = {
  "croatia": {
    text: "Why don't you instead go to Serbia?",
    url: "http://localhost:1313/posts/serbia/"
  },
  "serbia": {
    text: "Serbia ftw.",
    url: "http://localhost:1313/posts/serbia/"
  }
  // Add more predefined results as needed
};

function search() {
  const userInput = document.getElementById("searchInput").value.toLowerCase();
  const closestMatch = findClosestMatch(userInput);

  if (closestMatch) {
    const result = searchResults[closestMatch];
    document.getElementById("searchInput").value = closestMatch;
    document.getElementById("searchResults").innerHTML = `
      <a href="${result.url}">${result.text}</a>
    `;

    // Redirect after 2 seconds
    setTimeout(() => {
      window.location.href = result.url;
    }, 2000);
  } else {
    document.getElementById("searchResults").innerText = "No results found.";
  }
}

function handleSearch(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default form submission behavior
    search();
  }
}

function handleInput() {
  const userInput = document.getElementById("searchInput").value.toLowerCase();
  const suggestions = Object.keys(searchResults).filter(result => result.startsWith(userInput));
  const searchSuggestions = document.getElementById("searchSuggestions");

  searchSuggestions.innerHTML = ""; // Clear previous suggestions

  suggestions.forEach(suggestion => {
    const suggestionItem = document.createElement("li");
    suggestionItem.textContent = suggestion;
    suggestionItem.addEventListener("click", () => {
      document.getElementById("searchInput").value = suggestion;
      search();
    });
    searchSuggestions.appendChild(suggestionItem);
  });
}

function findClosestMatch(userInput) {
  let closestMatch = null;
  let minDistance = Infinity;

  for (const key in searchResults) {
    const distance = levenshteinDistance(userInput, key);
    if (distance < minDistance) {
      closestMatch = key;
      minDistance = distance;
    }
  }

  return closestMatch;
}

function levenshteinDistance(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = [];

  for (let i = 0; i <= m; i++) {
    dp[i] = [];
    for (let j = 0; j <= n; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (j === 0) {
        dp[i][j] = i;
      } else {
        dp[i][j] = str1[i - 1] === str2[j - 1] ? dp[i - 1][j - 1] : Math.min(
          dp[i - 1][j - 1] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j] + 1
        );
      }
    }
  }

  return dp[m][n];
}
