// API base URL
const API_URL = 'http://localhost:5000/api/events';

async function makePostRequest(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
}

async function makePutRequest(url, data) {
    return fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
}

async function makeDeleteRequest(url) {
    return fetch(url, { method: 'DELETE' });
}

async function makeGetRequest(url) {
    return fetch(url);
}


document.getElementById('createForm').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const name = document.getElementById('createName').value;
    const location = document.getElementById('createLocation').value;
    const date = document.getElementById('createDate').value;

    try {
        const response = await makePostRequest(API_URL, { name, location, date });
        const result = await response.json(); 
        alert('Event created successfully!');
        console.log(result);
    } catch (error) {
        console.error('Error creating event:', error);
    }
});

document.getElementById('updateForm').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const id = document.getElementById('updateId').value;
    const name = document.getElementById('updateName').value;
    const location = document.getElementById('updateLocation').value;
    const date = document.getElementById('updateDate').value;

    try {
        const response = await makePutRequest(`${API_URL}/${id}`, { name, location, date });
        const result = await response.json(); 
        alert('Event updated successfully!');
        console.log(result);
    } catch (error) {
        console.error('Error updating event:', error);
    }
});

document.getElementById('deleteForm').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    
    const id = document.getElementById('deleteId').value;

    try {
        const response = await makeDeleteRequest(`${API_URL}/${id}`);
        const result = await response.json(); 
        alert('Event deleted successfully!');
        console.log(result);
    } catch (error) {
        console.error('Error deleting event:', error);
    }
});

document.getElementById('fetchBtn').addEventListener('click', async () => {
    try {
        const response = await makeGetRequest(API_URL);
        const events = await response.json(); 

        const data = document.getElementById('data');
        data.textContent = JSON.stringify(events, null, 2);
    } catch (error) {
        console.error('Error fetching events:', error);
    }
});
