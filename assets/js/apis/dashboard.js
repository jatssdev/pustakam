const getAuthers = async () => {
    let response = await fetch('https://pustakam.pythonanywhere.com/author/')
    let data = await response.json()
    let lengthofauth = data.data.length

    dashboardAuthersTotal.innerHTML = lengthofauth

}
getAuthers()
const getCategories = async () => {
    try {
        let response = await fetch('https://pustakam.pythonanywhere.com/category/');
        let data = await response.json();
        let lengthOfCategories = data.data.length;

        // Assuming you have an element with ID `dashboardCategoriesTotal` to display the count
        document.getElementById('dashboardCategoriesTotal').innerHTML = lengthOfCategories;
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

// Call the function to fetch categories
getCategories();
const getBooks = async () => {
    try {
        let response = await fetch('https://pustakam.pythonanywhere.com/books/');
        let data = await response.json();
        let lengthOfCategories = data.data.length;

        // Assuming you have an element with ID `dashboardCategoriesTotal` to display the count
        document.getElementById('dashboardBooksTotal').innerHTML = lengthOfCategories;
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

// Call the function to fetch categories
getBooks();
