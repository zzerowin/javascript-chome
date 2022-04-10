function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(`당신은 ${lat} ${lng} 에서 살고 있습니다`);
}

function onGeoError() {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
