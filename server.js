
// Importera Axios
const axios = require('axios');

const clientId = 'b04cf105cc204d89b636bf036d8549a7';
const clientSecret = '74e65b07e88b49e1828f7ed9b84ddedb';

// Endpoint för att hämta hobbyer
app.get('/hobbies', async (req, res) => {
  try {
    // Hämta hobbyer från API Ninjas
    const response = await axios.get('https://api.api-ninjas.com/v1/hobbies', {
      headers: {
        'X-Api-Key': 'JSjeGX95QipxipFGL29utQ==1Oq4SpSBoPWlKNnY', // Lägg till API-nyckeln i headers
      },
    });

    // Skicka svaret från API Ninjas till klienten
    res.json(response.data);  // Returnera hobbydata till klienten
  } catch (error) {
    console.error('Error fetching data from API Ninjas:', error);
    res.status(500).json({ error: 'Failed to fetch hobby data' }); // Felhantering
  }
});

// Starta servern och lyssna på porten
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});



