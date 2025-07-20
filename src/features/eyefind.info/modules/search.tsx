'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useCategories } from '@app/features/eyefind.info/hooks/useCategories';
import { websites } from '@app/mocks/websites';

type Website = (typeof websites)[number];

export function EyefindInfoSearchModule() {
  const { slug } = useParams();

  const category = useCategories(slug as string);

  const filteredWebsites = websites.filter((website) => website.category === category?.name);

  const isLudoria = slug?.includes('ludoria');

  return (
    <section className="container mx-auto mb-10 flex flex-col gap-4 px-6 py-5 md:px-24 xl:px-32 2xl:px-40">
      <span className="my-4 text-xl">
        Results for: <span className="uppercase">{category?.label}</span>{' '}
        {isLudoria && (
          <span className="italic">
            did you mean{' '}
            <Link className="text-steel-blue-600" href="/search/pandora">
              Pandora
            </Link>
            ?
          </span>
        )}
      </span>
      <div className="flex flex-col gap-4">
        {filteredWebsites.map((website) => (
          <Website key={website.slug} website={website} />
        ))}
      </div>
    </section>
  );
}

const Website = ({ website }: { website: Website }) => {
  return (
    <Link
      href={website.url.includes('ludoria') ? `https://${website.url}` : `/${website.slug}`}
      className="flex flex-col gap-2 border-2 border-transparent bg-gray-100 p-2 md:flex-row hover:border-steel-blue-500"
    >
      <figure className="aspect-[16/9] h-28 w-full bg-gray-200 md:w-64">
        <Image className="size-full animate-pulse object-cover" src="/static/placeholder.png" alt="News Story of the Day" width={1280} height={720} />
      </figure>
      <div className="flex w-full flex-col gap-2">
        <span className="text-base">{website.url}</span>
        <span className="text-sm text-gray-800">{website.description}</span>
      </div>
    </Link>
  );
};
