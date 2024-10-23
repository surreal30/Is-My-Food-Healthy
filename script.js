document.getElementById('searchBtn').addEventListener('click', function() {
    const foodInput = document.getElementById('foodInput').value;

    // Later we can use an API instead of mock data
    const mockData = {
        name: foodInput,
        nutritionScore: '85/100 - Healthy',
        ingredients: [
            'Water', 
            'Sugar', 
            'E211 - Sodium Benzoate (Preservative)', 
            'Citric Acid', 
            'E330 - Acidity Regulator'
        ]
    };

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <div class="product-name">${mockData.name}</div>
        <div class="nutrition-score">Nutrition Score: ${mockData.nutritionScore}</div>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
                ${mockData.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        </div>
    `;
});
