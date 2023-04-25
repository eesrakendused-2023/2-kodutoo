let config = {
    minZoom: 5,
    maxZoom: 18,
  };
  const zoom = 8;
  const lat = 52.22977;
  const lng = 22.1178;
  
  const map = L.map('map', config).setView([lat, lng], zoom);
  
  L.tileLayer("https://tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/#map=7/58.613/25.024</a> contributors',
  }).addTo(map);

  
  const marker = L.marker([58.911738, 25.337219]).addTo(map)
      .bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();
  
  
  function onMapClick(e) {
      popup
          .setLatLng(e.latlng)
          .setContent(`You clicked the map at ${e.latlng.toString()}`)
          .openOn(map);
  }