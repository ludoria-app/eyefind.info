import { useQuery } from '@tanstack/react-query';
import { getWeather } from '@app/features/eyefind.info/api/weather.api';

export const useWeather = (latitude?: number, longitude?: number) => {
  return useQuery({ queryKey: ['weather', latitude, longitude], queryFn: () => getWeather(latitude, longitude) });
};
