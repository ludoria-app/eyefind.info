import {
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudLightning,
  CloudMoon,
  CloudMoonRain,
  CloudRain,
  CloudRainWind,
  CloudSnow,
  CloudSun,
  CloudSunRain,
  Cloudy,
  Moon,
  MoonStar,
  Snowflake,
  Sun,
  SunMedium,
} from 'lucide-react';

// Type for weather data structure
type WeatherData = {
  day: { description: string; icon: React.ComponentType };
  night: { description: string; icon: React.ComponentType };
};

// Function to determine if it's day or night based on client time
function isDayTime(): boolean {
  const now = new Date();
  const hour = now.getHours();

  // Consider day time from 6 AM to 6 PM (6:00 - 18:00)
  return hour >= 6 && hour < 18;
}

// Function to get weather info based on code and current time
export function getWeatherInfo(code: number) {
  const isDay = isDayTime();
  const timeOfDay = isDay ? 'day' : 'night';

  // Convert weather code to string for lookup
  const codeString = code.toString();

  // Get the weather data for this code
  const weatherData = (weatherCode as Record<string, WeatherData>)[codeString];

  if (!weatherData) {
    // Fallback to cloudy if code not found
    return {
      description: 'Cloudy',
      icon: Cloudy,
    };
  }

  return {
    description: weatherData[timeOfDay].description,
    icon: weatherData[timeOfDay].icon,
  };
}

export const weatherCode = {
  '0': {
    day: {
      description: 'Sunny',
      icon: SunMedium,
    },
    night: {
      description: 'Clear',
      icon: Moon,
    },
  },
  '1': {
    day: {
      description: 'Mainly Sunny',
      icon: Sun,
    },
    night: {
      description: 'Mainly Clear',
      icon: MoonStar,
    },
  },
  '2': {
    day: {
      description: 'Partly Cloudy',
      icon: CloudSun,
    },
    night: {
      description: 'Partly Cloudy',
      icon: CloudMoon,
    },
  },
  '3': {
    day: {
      description: 'Cloudy',
      icon: Cloudy,
    },
    night: {
      description: 'Cloudy',
      icon: Cloudy,
    },
  },
  '45': {
    day: {
      description: 'Foggy',
      icon: CloudFog,
    },
    night: {
      description: 'Foggy',
      icon: CloudFog,
    },
  },
  '48': {
    day: {
      description: 'Rime Fog',
      icon: CloudFog,
    },
    night: {
      description: 'Rime Fog',
      icon: CloudFog,
    },
  },
  '51': {
    day: {
      description: 'Light Drizzle',
      icon: CloudDrizzle,
    },
    night: {
      description: 'Light Drizzle',
      icon: CloudDrizzle,
    },
  },
  '53': {
    day: {
      description: 'Drizzle',
      icon: CloudDrizzle,
    },
    night: {
      description: 'Drizzle',
      icon: CloudDrizzle,
    },
  },
  '55': {
    day: {
      description: 'Heavy Drizzle',
      icon: CloudDrizzle,
    },
    night: {
      description: 'Heavy Drizzle',
      icon: CloudDrizzle,
    },
  },
  '56': {
    day: {
      description: 'Light Freezing Drizzle',
      icon: CloudDrizzle,
    },
    night: {
      description: 'Light Freezing Drizzle',
      icon: CloudDrizzle,
    },
  },
  '57': {
    day: {
      description: 'Freezing Drizzle',
      icon: CloudDrizzle,
    },
    night: {
      description: 'Freezing Drizzle',
      icon: CloudDrizzle,
    },
  },
  '61': {
    day: {
      description: 'Light Rain',
      icon: CloudSunRain,
    },
    night: {
      description: 'Light Rain',
      icon: CloudMoonRain,
    },
  },
  '63': {
    day: {
      description: 'Rain',
      icon: CloudRain,
    },
    night: {
      description: 'Rain',
      icon: CloudRain,
    },
  },
  '65': {
    day: {
      description: 'Heavy Rain',
      icon: CloudRainWind,
    },
    night: {
      description: 'Heavy Rain',
      icon: CloudRainWind,
    },
  },
  '66': {
    day: {
      description: 'Light Freezing Rain',
      icon: CloudSunRain,
    },
    night: {
      description: 'Light Freezing Rain',
      icon: CloudMoonRain,
    },
  },
  '67': {
    day: {
      description: 'Freezing Rain',
      icon: CloudRain,
    },
    night: {
      description: 'Freezing Rain',
      icon: CloudRain,
    },
  },
  '71': {
    day: {
      description: 'Light Snow',
      icon: CloudSnow,
    },
    night: {
      description: 'Light Snow',
      icon: CloudSnow,
    },
  },
  '73': {
    day: {
      description: 'Snow',
      icon: Snowflake,
    },
    night: {
      description: 'Snow',
      icon: Snowflake,
    },
  },
  '75': {
    day: {
      description: 'Heavy Snow',
      icon: Snowflake,
    },
    night: {
      description: 'Heavy Snow',
      icon: Snowflake,
    },
  },
  '77': {
    day: {
      description: 'Snow Grains',
      icon: CloudSnow,
    },
    night: {
      description: 'Snow Grains',
      icon: CloudSnow,
    },
  },
  '80': {
    day: {
      description: 'Light Showers',
      icon: CloudRain,
    },
    night: {
      description: 'Light Showers',
      icon: CloudRain,
    },
  },
  '81': {
    day: {
      description: 'Showers',
      icon: CloudRain,
    },
    night: {
      description: 'Showers',
      icon: CloudRain,
    },
  },
  '82': {
    day: {
      description: 'Heavy Showers',
      icon: CloudRainWind,
    },
    night: {
      description: 'Heavy Showers',
      icon: CloudRainWind,
    },
  },
  '85': {
    day: {
      description: 'Light Snow Showers',
      icon: CloudSnow,
    },
    night: {
      description: 'Light Snow Showers',
      icon: CloudSnow,
    },
  },
  '86': {
    day: {
      description: 'Snow Showers',
      icon: CloudSnow,
    },
    night: {
      description: 'Snow Showers',
      icon: CloudSnow,
    },
  },
  '95': {
    day: {
      description: 'Thunderstorm',
      icon: CloudLightning,
    },
    night: {
      description: 'Thunderstorm',
      icon: CloudLightning,
    },
  },
  '96': {
    day: {
      description: 'Light Thunderstorms With Hail',
      icon: CloudHail,
    },
    night: {
      description: 'Light Thunderstorms With Hail',
      icon: CloudHail,
    },
  },
  '99': {
    day: {
      description: 'Thunderstorm With Hail',
      icon: CloudHail,
    },
    night: {
      description: 'Thunderstorm With Hail',
      icon: CloudHail,
    },
  },
};
