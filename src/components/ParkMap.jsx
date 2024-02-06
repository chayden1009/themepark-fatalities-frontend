import { useEffect, useRef } from 'react';

const ParkMap = ({ address }) => {
  const mapRef = useRef(null);

  const loadGoogleMapsScript = () => {
    if (window.google) return Promise.resolve();
  
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = '/maps-api';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      script.onload = resolve;
      script.onerror = reject;
    });
  };  
  
  useEffect(() => {
    loadGoogleMapsScript().then(() => {
      if (address) {
        const geocoder = new window.google.maps.Geocoder();
  
        geocoder.geocode({ address: address }, (results, status) => {
          if (status === 'OK') {
            const map = new window.google.maps.Map(mapRef.current, {
              center: results[0].geometry.location,
              zoom: 15,
            });
  
            new window.google.maps.Marker({
              map: map,
              position: results[0].geometry.location,
            });
          } else {
            console.error('Geocode was not successful for the following reason:', status);
          }
        });
      }
    }).catch(error => {
      console.error('Failed to load the Google Maps script:', error);
    });
  }, [address]);
  

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default ParkMap;
