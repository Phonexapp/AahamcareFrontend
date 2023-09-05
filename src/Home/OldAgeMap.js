import React, { useState } from 'react';
import {
  GoogleMap,
  Marker,
  InfoWindow,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from '@react-google-maps/api';
import axios from 'axios';

function OldAgeMap() {
  const [organizations, setOrganizations] = useState([
    {
      name: 'Missionaries of Charity',
      lat: 13.0857327,
      long: 77.5475524,
      address: '3GPX+72G, Vinayak Nagar, Vidyaranyapura, Bengaluru, Karnataka 560097, India',
      rating: '4.2',
      placeId: 'ChIJQeMjHZEirjsR4QPTqmX8mxw',
      // phone: 'PHONE_NUMBER_1', 
    },
    {
      name: "His Way Children's Home",
      lat: 13.0943966,
      long: 77.5404367,
      address: '3GVR+Q53, 3rd Main Rd, Vaderahalli, Bengaluru, Karnataka 560097, India',
      rating: '5',
      placeId: 'ChIJKXeZRlcjrjsRxJxjTi_DiLk', // Replace with actual Place IDs
      // phone: 'PHONE_NUMBER_2', 
    },
    {
      name: 'NAMS Snehasadan',
      lat: 13.0942264,
      long: 77.5398215,
      address: 'No.28, Vaderahalli Village, Post, Vidyaranyapura, Bengaluru, Karnataka 560097, India',
      rating: '4.8',
      placeId: 'ChIJIXYqpIwirjsRwuUpIGX2yBA', // Replace with actual Place IDs
      // phone: 'PHONE_NUMBER_3', 
    }
  ])

  const [selectedOrg, setSelectedOrg] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [showDirections, setShowDirections] = useState(false);

  const fetchPhotos = (placeId) => {
    const apiKey = 'YOUR_GOOGLE_PLACES_API_KEY';
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=photos&key=${apiKey}`
      )
      .then((response) => {
        if (response.data.result.photos) {
          // Handle the photos data and display them in your component
          console.log(response.data.result.photos);
        }
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  };

  const filteredOrganizations = organizations.filter((org) =>
    org.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ position: 'relative', height: '80vh' }}>
      <h1>Organizations</h1>
      <input
        type="text"
        placeholder="Search for a location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <LoadScript googleMapsApiKey="AIzaSyDd_dsy6ep-QT_wwOAlHD9ieccpVMLtjNQ">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={{ lat: 12.971599, lng: 77.594566 }}
          zoom={10}
        >
          {filteredOrganizations.map((org) => (
            <Marker
              key={org.name}
              position={{ lat: org.lat, lng: org.long }}
              onClick={() => {
                setSelectedOrg(org);
                setShowDirections(false); // Reset directions when a new organization is selected
              }}
            />
          ))}
          {selectedOrg && (
            <InfoWindow
              position={{ lat: selectedOrg.lat, lng: selectedOrg.long }}
              onCloseClick={() => setSelectedOrg(null)}
            >
              <div>
                <h2>{selectedOrg.name}</h2>
                <p>Address: {selectedOrg.address}</p>
                <p>Phone: {selectedOrg.phone}</p>
                <p>Rating: {selectedOrg.rating}</p>
                <button onClick={() => fetchPhotos(selectedOrg.placeId)}>View Photos</button>
                <button onClick={() => setShowDirections(true)}>Show Directions</button>
              </div>
            </InfoWindow>
          )}
          {selectedOrg && showDirections && (
            <DirectionsService
              options={{
                destination: { lat: selectedOrg.lat, lng: selectedOrg.long },
                origin: { lat: 12.971599, lng: 77.594566 }, // User's current location or another starting point
                travelMode: 'WALKING',
              }}
              callback={(response) => {
                if (response !== null) {
                  setDirectionsResponse(response);
                }
              }}
            />
          )}

          {directionsResponse && (
            <DirectionsRenderer
              directions={directionsResponse}
              options={{
                polylineOptions: {
                  strokeColor: 'red', // Customize the color of the route
                },
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default OldAgeMap;
