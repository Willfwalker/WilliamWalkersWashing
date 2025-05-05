import Link from 'next/link';
import Image from 'next/image';
import { ServiceTier } from '@/utils/services';

type ServiceCardProps = {
  service: ServiceTier;
  featured?: boolean;
};

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return (
    <div 
      className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
        featured ? 'border-2 border-blue-500 transform hover:-translate-y-2' : 'hover:-translate-y-1'
      }`}
    >
      <div className="relative h-48 w-full">
        <Image
          src={service.image}
          alt={`${service.name} Detailing Service`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
          <span className="text-lg font-semibold text-blue-600">${service.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="mb-4">
          <h4 className="font-medium text-gray-800 mb-2">Includes:</h4>
          <ul className="space-y-1">
            {service.features.slice(0, 4).map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
            {service.features.length > 4 && (
              <li className="text-sm text-gray-500 italic">
                +{service.features.length - 4} more features
              </li>
            )}
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Duration: {service.duration}</span>
          <div className="flex space-x-2">
            <Link 
              href={`/services#${service.id}`} 
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              View Details
            </Link>
            <Link 
              href={`/booking?service=${service.id}`} 
              className={`px-4 py-2 rounded-md text-sm font-medium text-white ${
                featured ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-800'
              }`}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
