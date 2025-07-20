// Libs
import axios from 'axios';
// Envs
import { envs } from '@app/envs';

export const weatherApiInstance = axios.create({ baseURL: envs.WEATHER_API_URL });
