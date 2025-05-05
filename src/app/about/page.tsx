

export const metadata = {
  title: "About Us | Walker's Washing",
  description: "Learn about Walker's Washing and our commitment to excellence in car care.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            About Walker&apos;s Washing
          </h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Dedicated to excellence in automotive care since 2023.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Visit Us
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              We&apos;re conveniently located and ready to serve you.
            </p>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="md:flex md:justify-between">
                <div className="mb-8 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <p className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>
                        2125 Academy Rd<br />
                        Bellingham, WA 98226
                      </span>
                    </p>
                    <p className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>(360) 685-3001</span>
                    </p>
                    <p className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>willfwalker@gmail.com</span>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <p className="flex justify-between">
                      <span className="font-medium">Monday - Friday:</span>
                      <span className="ml-4">8:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-medium">Saturday:</span>
                      <span className="ml-4">9:00 AM - 5:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-medium">Sunday:</span>
                      <span className="ml-4">Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
