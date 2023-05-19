const filter = document.getElementById('filter')
const filterCard = document.getElementById('filterCard')
const closeBtn = document.getElementById('close-card')

filter.addEventListener('click', displayCard)
closeBtn.addEventListener('click', closeCard)

function displayCard() {
    filter.classList.add('close')
    filterCard.classList.remove('close')
}

function closeCard() {
  filter.classList.remove('close')
  filterCard.classList.add('close')
}

function fetchFoodSuggestions(inputValue) {
    if (inputValue.length === 0) {
      document.getElementById('suggestionsContainer').innerHTML = '';
    } else {
      fetch(`/foodSuggestions/${inputValue}`)
        .then(response => response.json())
        .then(suggestions => {
          const suggestionsContainer = document.getElementById('suggestionsContainer');
          suggestionsContainer.innerHTML = '';
  
          suggestions.forEach(suggestion => {
            const suggestionElement = document.createElement('div');
            suggestionElement.textContent = suggestion;
            suggestionElement.classList.add('filter-suggestion')
            suggestionElement.addEventListener('click', () => {
              document.getElementById('foodInput').value = suggestion;
              suggestionsContainer.innerHTML = ''; 
            });
            suggestionsContainer.appendChild(suggestionElement);
          });
        })
        .catch(error => console.error('Error fetching food suggestions:', error));
    }
}  