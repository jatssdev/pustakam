// Generic function to fetch data and update the corresponding dashboard element
const updateDashboardCount = async (url, elementId) => {
    try {
        let response = await fetch(url);
        let data = await response.json();
        let count = data.data.length;

        // Update the count in the corresponding HTML element
        document.getElementById(elementId).innerHTML = count;
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
    }
};

// Call the function for each entity
updateDashboardCount('https://pustakam.pythonanywhere.com/author/', 'dashboardAuthersTotal');
updateDashboardCount('https://pustakam.pythonanywhere.com/category/', 'dashboardCategoriesTotal');
updateDashboardCount('https://pustakam.pythonanywhere.com/books/', 'dashboardBooksTotal');
updateDashboardCount('https://pustakam.pythonanywhere.com/languages/', 'dashboardlanguagesTotal');
updateDashboardCount('https://pustakam.pythonanywhere.com/advertisement/', 'dashboardadvertiseTotal');
