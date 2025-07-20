'use client';

// Libs
import Link from 'next/link';
import Image from 'next/image';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { CircleDollarSign, Cloudy, Hamburger, Plane, SearchIcon, ShoppingBag, Smartphone } from 'lucide-react';

// Hooks
import { useWeather } from '@app/features/eyefind.info/hooks/useWeather';
import { useGeolocation } from '@app/features/eyefind.info/hooks/useGeolocation';

// Utils
import { getWeatherInfo } from '@app/features/eyefind.info/utils/weather-code';

export function Header() {
  const router = useRouter();

  const position = useGeolocation();
  const { data: weather } = useWeather(position?.coords?.latitude, position?.coords?.longitude);

  const handleSearch = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') router.push(`/search/${(e.target as HTMLInputElement).value.toLowerCase().replace(/\s+/g, '-')}`);
    },
    [router],
  );

  return (
    <header className="flex flex-col">
      {/* Main */}
      <div className="bg-steel-blue-500 py-4">
        <div className="container mx-auto flex flex-col items-stretch justify-between gap-4 px-6 md:px-24 xl:px-32 2xl:px-40">
          {/* Logo and Weather */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <figure className="my-4 h-14 md:h-20">
                <Image className="h-full w-auto object-contain" src="/static/eyefind/eyefind-logo.png" alt="Eyefind" width={500} height={500} />
              </figure>
            </Link>
            {/* Weather */}
            <div className="mt-4 flex items-center gap-2 text-white md:gap-4">
              <div className="flex flex-col items-end gap-0 md:gap-1">
                <span className="text-end text-sm leading-tight md:text-base">West Vinewood</span>
                <span className="text-base md:text-xl">{new Date().toLocaleDateString('en-US', { weekday: 'short' })}</span>
              </div>
              <div className="h-12 w-[2px] bg-white" />
              <div className="">
                {weather?.current?.weather_code ? (
                  (() => {
                    const weatherInfo = getWeatherInfo(weather.current.weather_code);
                    const WeatherIcon = weatherInfo.icon;
                    return <WeatherIcon className="size-12" />;
                  })()
                ) : (
                  <Cloudy className="size-12" />
                )}
              </div>
            </div>
          </div>
          {/* Search and Random */}
          <div className="flex w-full items-center gap-4 md:gap-12">
            {/* Search */}
            <div className="flex w-2/3 items-center gap-4 rounded-sm bg-white px-4 py-1.5 md:w-full">
              <SearchIcon className="text-steel-blue-500 size-8 stroke-[3]" />
              {/* Enter event navigates to the search page */}
              <input type="text" placeholder="Search Eyefind" className="w-full focus:outline-none" onKeyDown={handleSearch} />
            </div>
            {/* Random */}
            <div className="w-1/3 md:w-1/4 2xl:w-1/5">
              <Link
                href="/search/random"
                className="bg-calypso-800 block w-full rounded-sm py-2.5 text-center text-base font-medium text-white uppercase hover:cursor-pointer"
              >
                Random
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="bg-lightning-yellow-500 h-3" />
      {/* Navigation */}
      <nav className="border-b-2 border-gray-300 bg-gray-100">
        <ul className="container mx-auto flex justify-between divide-x-2 divide-gray-300 px-0 text-center leading-tight uppercase md:px-24 xl:px-32 2xl:px-40">
          <li className="w-full">
            <Link className="flex w-full items-center justify-center gap-2 py-2 hover:cursor-pointer" href="/search/media-and-entertainment">
              <Smartphone className="text-steel-blue-500 size-8" />
              <span className="hidden md:block">
                Media and
                <br />
                Entertainment
              </span>
            </Link>
          </li>
          <li className="w-full">
            <Link className="flex w-full items-center justify-center gap-2 py-2 hover:cursor-pointer" href="/search/food-and-drink">
              <Hamburger className="text-steel-blue-500 size-8" />
              <span className="hidden md:block">
                Food
                <br />
                and Drink
              </span>
            </Link>
          </li>
          <li className="w-full">
            <Link className="flex w-full items-center justify-center gap-2 py-2 hover:cursor-pointer" href="/search/money-and-services">
              <CircleDollarSign className="text-steel-blue-500 size-8" />
              <span className="hidden md:block">
                Money
                <br />
                and Services
              </span>
            </Link>
          </li>
          <li className="w-full">
            <Link className="flex w-full items-center justify-center gap-2 py-2 hover:cursor-pointer" href="/search/travel-and-transport">
              <Plane className="text-steel-blue-500 size-8" />
              <span className="hidden md:block">
                Travel
                <br />
                and Transport
              </span>
            </Link>
          </li>
          <li className="w-full">
            <Link className="flex w-full items-center justify-center gap-2 py-2 hover:cursor-pointer" href="/search/fashion-and-health">
              <ShoppingBag className="text-steel-blue-500 size-8" />
              <span className="hidden md:block">
                Fashion
                <br />
                and Health
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
