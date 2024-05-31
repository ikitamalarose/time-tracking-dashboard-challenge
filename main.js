import { createCard } from './js/cards.js';


document.addEventListener('DOMContentLoaded', () => {
  const optionsList = document.querySelectorAll('.option-item');
  let currentView = 'weekly';


  // Fetch data and initialize view
  fetch('/data.json')
    .then(response => response.json())
    .then(data => {

      // Load default view
      loadData(currentView, data);

      // Handle user clicks
      setupClickHandlers(optionsList, data);
    })
    .catch(error => console.error('Error fetching the JSON data:', error));
});

// Function to load data based on the current view
function loadData(view, data) {
  const viewingSection = document.getElementById('viewing');
  viewingSection.innerHTML = ''; // Clear existing content

  data.forEach(item => {
      const cardElement = createCard(item, view);
      viewingSection.appendChild(cardElement);
  });
}

// Function to setup options click handlers
function setupClickHandlers(optionsList, data) {
  optionsList.forEach(option => {
      option.addEventListener('click', () => {
          optionsList.forEach(opt => opt.classList.remove('active'));
          option.classList.add('active');
          const currentView = option.textContent.toLowerCase();
          loadData(currentView, data);
      });
  });
}
