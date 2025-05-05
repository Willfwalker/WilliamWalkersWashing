import { SparklesIcon, ClockIcon, ShieldCheckIcon, TruckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Expert Detailers',
    description: 'Our team of certified professionals has years of experience in automotive detailing.',
    icon: SparklesIcon,
  },
  {
    name: 'Convenient Scheduling',
    description: 'Book online and choose a time that works for you. We respect your schedule.',
    icon: ClockIcon,
  },
  {
    name: 'Premium Products',
    description: 'We use only the highest quality, environmentally friendly detailing products.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Mobile Service Available',
    description: 'Can\'t come to us? We\'ll bring our detailing services to your location.',
    icon: TruckIcon,
  },
];

export default function FeaturesSection() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to detail your car
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We combine expertise, premium products, and attention to detail to deliver exceptional results.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
