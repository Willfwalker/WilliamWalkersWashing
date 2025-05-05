import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-max mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 sm:text-5xl">404</h1>
        <p className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">Page not found</p>
        <p className="mt-4 text-base text-gray-500">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
