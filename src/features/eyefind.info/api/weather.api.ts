import { weatherApiInstance } from '@app/libs/axios';

export interface Forecast {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: { time: string; interval: string; weather_code: string };
  current: { time: string; interval: number; weather_code: number };
}

export async function getWeather(latitude?: number, longitude?: number): Promise<Forecast> {
  const response = await weatherApiInstance.get<Forecast>('/v1/forecast', {
    params: {
      latitude: latitude ?? '19.4333',
      longitude: longitude ?? '-99.1333',
      current: 'weather_code',
    },
  });
  return response.data;
}
