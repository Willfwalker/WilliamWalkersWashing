import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ServiceCard from '@/components/ServiceCard';
import CallToAction from '@/components/CallToAction';
import { services } from '@/utils/services';

export default function Home() {
  return (
    <>
      <HeroSection />

      <FeaturesSection />

      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Choose the perfect detailing package
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We offer three comprehensive detailing packages to meet your needs and budget.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                featured={index === 1} // Make the Regular package featured
              />
            ))}
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );
}
