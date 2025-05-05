export type ServiceTier = {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  duration: string;
  image: string;
};

export const services: ServiceTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 79.99,
    description: 'A thorough exterior wash and interior vacuum to keep your vehicle looking fresh.',
    features: [
      'Exterior hand wash',
      'Wheel cleaning',
      'Tire dressing',
      'Interior vacuum',
      'Dashboard and console wipe down',
      'Window cleaning'
    ],
    duration: '1-2 hours',
    image: '/images/basic-detail.jpg'
  },
  {
    id: 'regular',
    name: 'Regular',
    price: 149.99,
    description: 'A deep clean with polish and thorough wipe down for a comprehensive detailing experience.',
    features: [
      'All Basic features',
      'Clay bar treatment',
      'Paint polish',
      'Wax application',
      'Deep interior cleaning',
      'Leather/upholstery conditioning',
      'Air vent cleaning',
      'Door jamb cleaning'
    ],
    duration: '3-4 hours',
    image: '/images/regular-detail.jpg'
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 249.99,
    description: 'Our ultimate package with ceramic coating, deep cleaned seats, and premium protection.',
    features: [
      'All Regular features',
      'Ceramic coating application',
      'Paint correction',
      'Deep extraction of seats and carpets',
      'Headliner cleaning',
      'Engine bay detailing',
      'Plastic trim restoration',
      'Headlight restoration',
      '3-month protection guarantee'
    ],
    duration: '5-7 hours',
    image: '/images/premium-detail.jpg'
  }
];
