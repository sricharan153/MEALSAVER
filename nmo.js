const axios = require('axios');

const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';
const origin = '40.748817,-73.985428'; // Example: Empire State Building
const destination = '34.052235,-118.243683'; // Example: Los Angeles

async function getRoute() {
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/directions/json`, {
            params: {
                origin: origin,
                destination: destination,
                key: GOOGLE_MAPS_API_KEY,
            }
        });

        if (response.data.status === 'OK') {
            const route = response.data.routes[0];
            console.log('Route:', route);
            console.log('Distance:', route.legs[0].distance.text);
            console.log('Duration:', route.legs[0].duration.text);
        } else {
            console.error('Error:', response.data.status);
        }
    } catch (error) {
        console.error('Error fetching route:', error);
    }
}

getRoute();
