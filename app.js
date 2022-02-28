const getElemtntByID = id => document.getElementById(id);


const inputText = getElemtntByID('input-txt');

document.getElementById('search-btn').addEventListener('click', function () {
    if (!inputText.value) {
        // console.log('boo');
    } else if (inputText.value.trim().length === 0) {
        // console.log('all space');
        inputText.value = '';
    } else {
        const mealUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText.value.trim()}`;

        searchMeal(mealUrl);
        // inputText.value = '';

    }

})

const searchMeal = async urlString => {
    const mainDiv = getElemtntByID('main-panel');
    const hrBar = getElemtntByID('hr-bar');

    const response = await fetch(urlString);
    const data = await response.json();
    hrBar.style.display = 'block';
    data.meals?.forEach(element => {
        console.log(element);
        const mealCard = document.createElement('div');
        mealCard.classList.add('card', 'mb-3');
        mealCard.style.maxWidth = '540px';
        mealCard.innerHTML = `
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${element.strMealThumb}" class="img-fluid rounded-start">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${element.strMeal}</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>  
        `
        mainDiv.appendChild(mealCard);

    });
    // console.log(data.meals);

}