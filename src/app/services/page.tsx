import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/utils/services';
import { CheckIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: "Our Services | Walker's Washing",
  description: 'Explore our Basic, Regular, and Premium detailing packages. Professional car cleaning services tailored to your needs.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Detailing Services
          </h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Choose from our three comprehensive packages designed to restore and maintain your vehicle&apos;s appearance.
          </p>
        </div>
      </div>

      {/* Service Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`mb-20 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } flex flex-col lg:flex-row gap-8 items-center`}
          >
            <div className="lg:w-1/2">
              <div className="relative h-64 w-full sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={service.image}
                  alt={`${service.name} Detailing Service`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <h2 className="text-3xl font-bold text-gray-900">{service.name} Package</h2>
                <span className="ml-4 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  ${service.price.toFixed(2)}
                </span>
              </div>
              <p className="text-lg text-gray-600 mb-6">{service.description}</p>
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">What&apos;s Included:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-600">
                  <span className="font-medium">Duration:</span> {service.duration}
                </p>
                <Link
                  href={`/booking?service=${service.id}`}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Book This Package
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Package Comparison</h2>
            <p className="mt-4 text-lg text-gray-600">
              Compare our detailing packages to find the perfect one for your vehicle.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300 shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-blue-700">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">
                    Feature
                  </th>
                  {services.map((service) => (
                    <th key={service.id} scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-white">
                      {service.name} (${service.price.toFixed(2)})
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Exterior Wash</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Interior Vacuum</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Tire Dressing</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Window Cleaning</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Clay Bar Treatment</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">-</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Paint Polish</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">-</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Wax Application</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">-</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Leather Conditioning</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">-</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Ceramic Coating</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">-</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">-</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Paint Correction</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">-</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">-</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Headlight Restoration</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">-</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">-</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">✓</td>
                </tr>
                <tr>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Duration</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">{services[0].duration}</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">{services[1].duration}</td>
                  <td className="px-3 py-4 text-sm text-center text-gray-500">{services[2].duration}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Book Now</td>
                  {services.map((service) => (
                    <td key={service.id} className="px-3 py-4 text-sm text-center">
                      <Link
                        href={`/booking?service=${service.id}`}
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                      >
                        Select
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
