const getAuthers = async () => {
    try {
        // Show loading spinner and hide the table
        document.getElementById('loading').style.display = 'block';
        document.getElementById('table-container').style.display = 'none';

        let response = await fetch('https://pustakam.pythonanywhere.com/author/');
        let result = await response.json();

        if (result.status === "success") {
            let authors = result.data;
            let tableBody = document.getElementById('author-table-body');

            // Clear any existing rows in case of reloading
            tableBody.innerHTML = '';

            authors.forEach(author => {
                let row = `
                    <tr>
                        <td>${author.id}</td>
                        <td>${author.author_english}</td>
                        <td>${author.author_hindi}</td>
                        <td>${author.topic_data.topic_english}</td>
                        <td>${author.topic_data.topic_hindi}</td>
                        <td>
                            <button class="btn btn-primary btn-sm" onclick="editAuthor(${author.id})">
                                Edit
                            </button>
                            <button class="btn btn-danger btn-sm" onclick="deleteAuthor(${author.id})">
                                Delete
                            </button>
                        </td>
                    </tr>
                `;
                tableBody.insertAdjacentHTML('beforeend', row);
            });

            // Hide loading spinner and show the table
            document.getElementById('loading').style.display = 'none';
            document.getElementById('table-container').style.display = 'block';
        } else {
            console.error('Failed to load data:', result);
        }
    } catch (error) {
        console.error('Error fetching authors:', error);
    } finally {
        // Ensure loading spinner is hidden in case of an error
        document.getElementById('loading').style.display = 'none';
        document.getElementById('table-container').style.display = 'block';
    }
}

// Call the function to load data on page load
getAuthers();
