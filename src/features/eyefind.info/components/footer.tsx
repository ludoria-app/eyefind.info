import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-steel-blue-500 py-8">
      <div className="container mx-auto flex flex-col items-stretch justify-center gap-4 px-6 md:px-24 xl:px-32 2xl:px-40">
        <div className="flex items-center justify-center">
          <p className="text-white">
            Cloned by{' '}
            <Link className="font-bold hover:underline" href="https://www.youtube.com/@ludoria-app" target="_blank" rel="noopener noreferrer">
              Ludoria
            </Link>{' '}
            with passion 💙
          </p>
        </div>
      </div>
    </footer>
  );
}
