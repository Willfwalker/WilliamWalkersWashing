import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Walker's Washing
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Restore your vehicle to showroom quality with our professional detailing services.
            We offer three comprehensive packages to meet your needs and budget.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 shadow-md"
            >
              Our Services
            </Link>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
