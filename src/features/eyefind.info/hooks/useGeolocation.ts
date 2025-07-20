import { useEffect, useState } from 'react';

export const useGeolocation = () => {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      setPosition(null);
      return;
    }

    navigator.permissions.query({ name: 'geolocation' }).then(({ state }) => {
      if (state === 'denied') {
        setPosition(null);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => setPosition(position),
        (_err) => setPosition(null),
        { enableHighAccuracy: false, timeout: 10000 },
      );
    });
  }, []);

  return { ...position };
};
