const getElemtntByID = id => document.getElementById(id);

// const mainPanel = getElemtntByID('main-panel');
// const sidePanel = getElemtntByID('side-panel');


// mainPanel.style.display = 'block'
// sidePanel.style.display = 'block'
// mainPanel.classList.add = 'bg-success'
// sidePanel.classList.add = 'col-6'



const inputText = getElemtntByID('input-txt');

document.getElementById('search-btn').addEventListener('click', function () {
    if (!inputText.value) {
        // console.log('boo');
    } else if (inputText.value.trim().length === 0) {
        // console.log('all space');
        inputText.value = '';
    } else {
        const mealUrl = `www.themealdb.com/api/json/v1/1/search.php?s=${inputText.value.trim()}`;

        console.log(mealUrl);
        inputText.value = '';

    }

})