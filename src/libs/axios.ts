// Libs
import { create } from 'axios';
// Envs
import { envs } from '@app/envs';

export const weatherApiInstance = create({ baseURL: envs.WEATHER_API_URL });
