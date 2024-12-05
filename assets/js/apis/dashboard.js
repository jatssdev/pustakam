const getAuthers = async () => {
    let response = await fetch('https://pustakam.pythonanywhere.com/author/')
    let data = await response.json()
    let lengthofauth = data.data.length

    dashboardAuthersTotal.innerHTML = lengthofauth

}
getAuthers()
const getTopics = async () => {
    try {
        let response = await fetch('https://pustakam.pythonanywhere.com/topic/');
        let data = await response.json();
        let lengthOfTopics = data.data.length;

        // Assuming you have an element with ID `dashboardTopicsTotal` to display the count
        document.getElementById('dashboardTopicsTotal').innerHTML = lengthOfTopics;
    } catch (error) {
        console.error('Error fetching topics:', error);
    }
}

// Call the function to fetch topics
getTopics();
const getBooks = async () => {
    try {
        let response = await fetch('https://pustakam.pythonanywhere.com/books/');
        let data = await response.json();
        let lengthOfTopics = data.data.length;

        // Assuming you have an element with ID `dashboardTopicsTotal` to display the count
        document.getElementById('dashboardBooksTotal').innerHTML = lengthOfTopics;
    } catch (error) {
        console.error('Error fetching topics:', error);
    }
}

// Call the function to fetch topics
getBooks();
const getLanguages = async () => {
    try {
        let response = await fetch('https://pustakam.pythonanywhere.com/languages/');
        let data = await response.json();
        let lengthOfTopics = data.data.length;

        // Assuming you have an element with ID `dashboardTopicsTotal` to display the count
        document.getElementById('dashboardlanguagesTotal').innerHTML = lengthOfTopics;
    } catch (error) {
        console.error('Error fetching topics:', error);
    }
}

// Call the function to fetch topics
getLanguages();
