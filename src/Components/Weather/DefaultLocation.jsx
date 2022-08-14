

export const DefaultLocation = (setCoordinates) => {
    navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setCoordinates({ lat: latitude, lon: longitude });
        }
      );
}
