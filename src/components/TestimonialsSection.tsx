import Image from 'next/image';

const testimonials = [
  {
    content: "I've tried several detailing services, but Premium Auto Detailing is by far the best. My car looks better than when I first bought it!",
    author: {
      name: "Sarah Johnson",
      role: "Regular Customer",
      imageUrl: "/images/testimonial-1.jpg"
    }
  },
  {
    content: "The Premium package is worth every penny. The ceramic coating has kept my car looking amazing for months, even through harsh weather.",
    author: {
      name: "Michael Chen",
      role: "Premium Customer",
      imageUrl: "/images/testimonial-2.jpg"
    }
  },
  {
    content: "Prompt, professional, and perfect results. I won't trust my luxury vehicle with anyone else.",
    author: {
      name: "James Wilson",
      role: "Regular Customer",
      imageUrl: "/images/testimonial-3.jpg"
    }
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by car enthusiasts everywhere
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Don't just take our word for it — hear what our customers have to say about our detailing services.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-x-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.author.imageUrl}
                    alt={testimonial.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{testimonial.author.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.author.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
