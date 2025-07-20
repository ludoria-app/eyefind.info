'use client';

// Libs
import Link from 'next/link';
import Image from 'next/image';

// Hooks
import { useRandomBleets } from '@app/features/eyefind.info/hooks/useBleets';

// Utils
import { highlightText } from '@app/features/eyefind.info/utils/highlight-text';

export function EyefindInfoModule() {
  const randomBleets = useRandomBleets();

  return (
    <main className="container mx-auto mb-10 flex flex-col gap-4 px-6 py-5 md:px-24 xl:px-32 2xl:px-40">
      <section className="flex flex-col gap-4 md:flex-row">
        {/* Left Section */}
        <section className="flex w-full flex-col gap-4">
          {/* News Story of the Day */}
          <article className="flex flex-col gap-7 bg-gray-100 p-4">
            {/* Title and Cover */}
            <div className="flex flex-col justify-between md:flex-row">
              {/* Title */}
              <div className="flex flex-col justify-between">
                <h5 className="text-xl uppercase">News Story of the Day</h5>
                <h6 className="text-base text-pretty xl:text-lg">Cult crazy flees with cash.</h6>
              </div>
              {/* Cover */}
              <figure className="mt-7 aspect-[16/8] h-24 w-48 bg-gray-200 md:mt-0 md:w-auto">
                <Image className="size-full animate-pulse object-cover" src="/static/placeholder.png" alt="News Story of the Day" width={1280} height={720} />
              </figure>
            </div>
            {/* Content */}
            <div className="relative">
              <div className="absolute size-full bg-gradient-to-b from-transparent to-gray-100" />
              <p className="line-clamp-4 text-base text-pretty xl:text-lg">
                Mike Dunn - Daily Globe
                <br />
                It has been a bizarre few weeks for The Epsilon Program. Reports indicate Epsilon&apos;s founder and leader, Cris Formage, has absconded amid
                accusations of a car theft ring and money laundering operation. Clearly Epsilonism is living up to its reputation as the &quot;American
                Religion&quot;. Mr. Formage had claimed to be close to completion of the great scriptural work of Epsilonism - The Epsilon Tract. Although now
                what happens to the religion, or the book without its founder, is a question we do not know the answer to.
              </p>
            </div>
            {/* Read More */}
            <Link href="/" className="hover:text-steel-blue-700 -mt-5 w-fit text-base text-pretty uppercase hover:cursor-pointer xl:text-lg">
              Read Full Article
            </Link>
          </article>
          {/* Website of the Minute */}
          <article className="flex flex-col gap-2 bg-gray-100 p-4">
            {/* Title */}
            <h5 className="text-xl uppercase">Website of the Minute</h5>
            {/* Cover */}
            <Link className="flex flex-col items-start gap-2 md:flex-row md:gap-4" href="/">
              <figure className="aspect-[16/8] h-32 w-auto bg-gray-200">
                <Image className="size-full animate-pulse object-cover" src="/static/placeholder.png" alt="News Story of the Day" width={1280} height={720} />
              </figure>
              <div className="flex flex-col pt-0 md:pt-2">
                <span>www.bawsq.com</span>
                <span className="text-sm">Dealing in life&apos;s ups and downs.</span>
              </div>
            </Link>
          </article>
        </section>
        {/* Right Section */}
        <section className="flex w-full flex-col gap-4 md:w-1/2">
          {/* Sponsored Advert */}
          <Link
            href="/"
            className="bg-steel-blue-500 hover:border-steel-blue-500 flex w-full flex-col items-center justify-center border-2 border-white px-1 pb-1"
          >
            <span className="text-center text-base text-white xl:text-xl">Sponsored Advert</span>
            <figure className="h-32 w-full bg-gray-200">
              <Image className="size-full animate-pulse object-cover" src="/static/placeholder.png" alt="News Story of the Day" width={1280} height={720} />
            </figure>
          </Link>
          {/* Recent Bleets */}
          <article className="group bg-gray-100 p-4">
            {/* Header */}
            <div className="flex items-center gap-4">
              <figure className="group-hover:border-steel-blue-500 aspect-square h-10 border-2 border-transparent bg-gray-200">
                <Image className="size-full animate-pulse object-cover" src="/static/placeholder.png" alt="News Story of the Day" width={1280} height={720} />
              </figure>
              <h5 className="text-xl uppercase">Recent Bleets</h5>
            </div>
            {/* Bleets */}
            <div className="flex flex-col divide-y-[2px] divide-sky-300/50">
              {/* Bleet */}
              {randomBleets.map((bleet) => (
                <div key={bleet.content} className="py-2 text-base leading-tight">
                  <span className="font-medium text-sky-600">@{bleet.author}</span>
                  <p>{highlightText(bleet.content)}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </section>
      <section className="flex flex-col gap-3 bg-gray-100 p-4">
        <h5 className="text-xl uppercase">Eyefind Featured Websites</h5>
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          {Array.from({ length: 5 }).map((_, index) => (
            <Link key={index} href="/">
              <figure className="aspect-[16/8] h-28 w-auto bg-gray-200">
                <Image className="size-full animate-pulse object-cover" src="/static/placeholder.png" alt="News Story of the Day" width={1280} height={720} />
              </figure>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
