import { Property, User } from '../types';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Loft',
    price: 850000,
    location: 'Downtown Manhattan, NY',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    type: 'apartment',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Stunning modern loft featuring floor-to-ceiling windows, exposed brick, and premium finishes throughout. Located in the heart of downtown with easy access to transportation.',
    features: ['Hardwood Floors', 'In-Unit Laundry', 'Gym Access', 'Rooftop Deck', 'Parking Included'],
    yearBuilt: 2020,
    parking: 1,
    isNFT: true,
    walletAddress: '0x742d35cc6634C0532925a3b8D6aD8a7e15b2a9d1'
  },
  {
    id: '2',
    title: 'Luxury Family Estate',
    price: 2400000,
    location: 'Beverly Hills, CA',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4500,
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Exceptional luxury estate with panoramic city views, gourmet kitchen, master suite with spa-like bathroom, and resort-style backyard.',
    features: ['Swimming Pool', 'Wine Cellar', 'Home Theater', 'Smart Home', 'Guest House'],
    yearBuilt: 2018,
    parking: 3,
    isNFT: false
  },
  {
    id: '3',
    title: 'Cozy Studio Apartment',
    price: 2200,
    location: 'Brooklyn Heights, NY',
    bedrooms: 1,
    bathrooms: 1,
    sqft: 650,
    type: 'apartment',
    status: 'for-rent',
    images: [
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Charming studio in historic Brooklyn Heights with beautiful views of the Manhattan skyline. Perfect for young professionals.',
    features: ['City Views', 'Updated Kitchen', 'Laundry in Building', 'Pet Friendly'],
    yearBuilt: 1960,
    parking: 0,
    isNFT: false
  },
  {
    id: '4',
    title: 'Waterfront Penthouse',
    price: 3200000,
    location: 'Miami Beach, FL',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2800,
    type: 'condo',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Exclusive penthouse with direct ocean access, private elevator, and world-class amenities. The epitome of luxury coastal living.',
    features: ['Ocean Views', 'Private Elevator', 'Concierge Service', 'Beach Access', 'Marina'],
    yearBuilt: 2021,
    parking: 2,
    isNFT: true,
    walletAddress: '0x742d35cc6634C0532925a3b8D6aD8a7e15b2a9d2'
  },
  {
    id: '5',
    title: 'Historic Brownstone',
    price: 1850000,
    location: 'Back Bay, Boston, MA',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    type: 'townhouse',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Beautifully restored Victorian brownstone with original architectural details, modern updates, and private garden.',
    features: ['Original Details', 'Private Garden', 'Fireplace', 'Updated Systems', 'Historic District'],
    yearBuilt: 1885,
    parking: 1,
    isNFT: false
  },
  {
    id: '6',
    title: 'Mountain View Retreat',
    price: 4200,
    location: 'Aspen, CO',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    type: 'house',
    status: 'for-rent',
    images: [
      'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Stunning mountain retreat with panoramic views, ski-in/ski-out access, and luxury mountain amenities.',
    features: ['Mountain Views', 'Ski Access', 'Hot Tub', 'Fireplace', 'Furnished'],
    yearBuilt: 2015,
    parking: 2,
    isNFT: false
  },
  {
    id: '7',
    title: 'Silicon Valley Tech Hub',
    price: 1950000,
    location: 'Palo Alto, CA',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Contemporary home in the heart of Silicon Valley with smart home technology, solar panels, and modern design.',
    features: ['Smart Home', 'Solar Panels', 'Electric Car Charging', 'Home Office', 'Modern Kitchen'],
    yearBuilt: 2019,
    parking: 2,
    isNFT: true,
    walletAddress: '0x742d35cc6634C0532925a3b8D6aD8a7e15b2a9d3'
  },
  {
    id: '8',
    title: 'Urban Luxury Condo',
    price: 3800,
    location: 'SoHo, New York, NY',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    type: 'condo',
    status: 'for-rent',
    images: [
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Sophisticated condo in trendy SoHo with high-end finishes, floor-to-ceiling windows, and premium building amenities.',
    features: ['City Views', 'Doorman', 'Fitness Center', 'Rooftop Terrace', 'In-Unit Washer/Dryer'],
    yearBuilt: 2017,
    parking: 0,
    isNFT: false
  },
  {
    id: '9',
    title: 'Lakefront Villa',
    price: 2800000,
    location: 'Lake Tahoe, CA',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3500,
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Breathtaking lakefront villa with private dock, panoramic lake views, and luxury amenities. Perfect for year-round living or vacation home.',
    features: ['Lake Views', 'Private Dock', 'Boat Storage', 'Outdoor Kitchen', 'Hot Tub'],
    yearBuilt: 2016,
    parking: 3,
    isNFT: true,
    walletAddress: '0x742d35cc6634C0532925a3b8D6aD8a7e15b2a9d4'
  },
  {
    id: '10',
    title: 'Downtown High-Rise',
    price: 5200,
    location: 'Financial District, Seattle, WA',
    bedrooms: 1,
    bathrooms: 1,
    sqft: 900,
    type: 'apartment',
    status: 'for-rent',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Modern high-rise apartment with stunning city and water views. Located in the heart of Seattle\'s financial district.',
    features: ['City Views', 'Concierge', 'Gym', 'Business Center', 'Pet Friendly'],
    yearBuilt: 2020,
    parking: 1,
    isNFT: false
  },
  {
    id: '11',
    title: 'Suburban Family Home',
    price: 675000,
    location: 'Westchester County, NY',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Perfect family home in quiet suburban neighborhood with excellent schools, large backyard, and updated kitchen.',
    features: ['Large Backyard', 'Updated Kitchen', 'Garage', 'Basement', 'Near Schools'],
    yearBuilt: 2005,
    parking: 2,
    isNFT: false
  },
  {
    id: '12',
    title: 'Beachfront Paradise',
    price: 4500000,
    location: 'Malibu, CA',
    bedrooms: 5,
    bathrooms: 5,
    sqft: 4200,
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Spectacular beachfront estate with direct beach access, infinity pool, and unobstructed ocean views. Architectural masterpiece.',
    features: ['Beach Access', 'Infinity Pool', 'Ocean Views', 'Wine Cellar', 'Guest Cottage'],
    yearBuilt: 2022,
    parking: 4,
    isNFT: true,
    walletAddress: '0x742d35cc6634C0532925a3b8D6aD8a7e15b2a9d5'
  },
  {
    id: '13',
    title: 'Artist Loft Space',
    price: 3200,
    location: 'Arts District, Los Angeles, CA',
    bedrooms: 1,
    bathrooms: 1,
    sqft: 1100,
    type: 'apartment',
    status: 'for-rent',
    images: [
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Creative loft space in the vibrant Arts District with high ceilings, exposed brick, and natural light perfect for artists.',
    features: ['High Ceilings', 'Exposed Brick', 'Natural Light', 'Creative Space', 'Gallery District'],
    yearBuilt: 1925,
    parking: 0,
    isNFT: false
  },
  {
    id: '14',
    title: 'Tech Executive Penthouse',
    price: 5800000,
    location: 'SOMA, San Francisco, CA',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2500,
    type: 'condo',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Ultra-modern penthouse with smart home integration, panoramic bay views, and premium finishes throughout.',
    features: ['Bay Views', 'Smart Home', 'Private Terrace', 'Concierge', 'Valet Parking'],
    yearBuilt: 2021,
    parking: 2,
    isNFT: true,
    walletAddress: '0x742d35cc6634C0532925a3b8D6aD8a7e15b2a9d6'
  },
  {
    id: '15',
    title: 'Country Estate',
    price: 1200000,
    location: 'Napa Valley, CA',
    bedrooms: 6,
    bathrooms: 4,
    sqft: 5200,
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Magnificent country estate on 5 acres with vineyard views, wine cellar, and entertaining spaces. Perfect for luxury living.',
    features: ['Vineyard Views', 'Wine Cellar', '5 Acres', 'Guest House', 'Pool'],
    yearBuilt: 2010,
    parking: 4,
    isNFT: false
  },
  {
    id: '16',
    title: 'Modern Townhouse',
    price: 4800,
    location: 'Capitol Hill, Washington, DC',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1900,
    type: 'townhouse',
    status: 'for-rent',
    images: [
      'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Stylish townhouse in historic Capitol Hill with modern updates, private patio, and walking distance to metro.',
    features: ['Private Patio', 'Metro Access', 'Updated Kitchen', 'Hardwood Floors', 'Historic District'],
    yearBuilt: 2018,
    parking: 1,
    isNFT: false
  },
  {
    id: '17',
    title: 'Luxury High-Rise Condo',
    price: 1650000,
    location: 'River North, Chicago, IL',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1600,
    type: 'condo',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Elegant high-rise condo with river views, premium finishes, and world-class building amenities in River North.',
    features: ['River Views', 'Doorman', 'Pool', 'Fitness Center', 'Valet Parking'],
    yearBuilt: 2019,
    parking: 1,
    isNFT: true,
    walletAddress: '0x742d35cc6634C0532925a3b8D6aD8a7e15b2a9d7'
  },
  {
    id: '18',
    title: 'Desert Modern Oasis',
    price: 1450000,
    location: 'Scottsdale, AZ',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2400,
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Stunning desert modern home with mountain views, resort-style pool, and indoor-outdoor living spaces.',
    features: ['Mountain Views', 'Resort Pool', 'Outdoor Kitchen', 'Desert Landscaping', 'Solar Power'],
    yearBuilt: 2020,
    parking: 2,
    isNFT: false
  },
  {
    id: '19',
    title: 'Historic Mansion',
    price: 3500000,
    location: 'Garden District, New Orleans, LA',
    bedrooms: 6,
    bathrooms: 5,
    sqft: 6200,
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Magnificent antebellum mansion in the prestigious Garden District with original architectural details and modern amenities.',
    features: ['Historic Details', 'Grand Staircase', 'Formal Gardens', 'Carriage House', 'Period Features'],
    yearBuilt: 1875,
    parking: 3,
    isNFT: true,
    walletAddress: '0x742d35cc6634C0532925a3b8D6aD8a7e15b2a9d8'
  },
  {
    id: '20',
    title: 'Minimalist Studio',
    price: 2800,
    location: 'West Village, New York, NY',
    bedrooms: 1,
    bathrooms: 1,
    sqft: 550,
    type: 'apartment',
    status: 'for-rent',
    images: [
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Beautifully designed minimalist studio in charming West Village with modern amenities and classic NYC character.',
    features: ['Minimalist Design', 'Modern Kitchen', 'Exposed Brick', 'Natural Light', 'Prime Location'],
    yearBuilt: 1920,
    parking: 0,
    isNFT: false
  }
];

export const mockUser: User = {
  id: '1',
  name: 'Alex Thompson',
  email: 'alex@example.com',
  walletConnected: false,
  favorites: ['1', '4', '9', '17'],
  savedSearches: [
    {
      id: '1',
      name: 'Downtown Apartments',
      filters: {
        type: 'apartment',
        minPrice: 500000,
        maxPrice: 1000000,
        location: 'Manhattan'
      },
      createdAt: '2025-01-10'
    },
    {
      id: '2',
      name: 'Luxury Homes',
      filters: {
        type: 'house',
        minPrice: 2000000,
        bedrooms: 4
      },
      createdAt: '2025-01-08'
    },
    {
      id: '3',
      name: 'NFT Properties',
      filters: {
        minPrice: 1000000,
        maxPrice: 5000000
      },
      createdAt: '2025-01-05'
    }
  ]
};

export const mockAgents = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@propchain.com',
    phone: '+1 (555) 123-4567',
    rating: 4.9,
    reviews: 127,
    specialties: ['Luxury Homes', 'NFT Properties', 'Investment Properties'],
    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@propchain.com',
    phone: '+1 (555) 234-5678',
    rating: 4.8,
    reviews: 89,
    specialties: ['Tech Properties', 'Modern Condos', 'Urban Living'],
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    email: 'emma.rodriguez@propchain.com',
    phone: '+1 (555) 345-6789',
    rating: 4.9,
    reviews: 156,
    specialties: ['Family Homes', 'Suburban Properties', 'First-Time Buyers'],
    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

export const mockMarketData = {
  totalProperties: 2847,
  totalValue: '$8.2B',
  averagePrice: '$1.2M',
  monthlyGrowth: '+12.5%',
  nftProperties: 342,
  topLocations: [
    { name: 'Manhattan, NY', count: 156, avgPrice: '$2.1M' },
    { name: 'Beverly Hills, CA', count: 89, avgPrice: '$3.8M' },
    { name: 'Miami Beach, FL', count: 134, avgPrice: '$1.9M' },
    { name: 'Palo Alto, CA', count: 67, avgPrice: '$2.7M' },
    { name: 'Boston, MA', count: 98, avgPrice: '$1.4M' }
  ],
  recentSales: [
    { property: 'Luxury Penthouse', price: '$4.2M', location: 'Manhattan', date: '2 days ago' },
    { property: 'Modern Villa', price: '$2.8M', location: 'Beverly Hills', date: '1 week ago' },
    { property: 'Beachfront Condo', price: '$1.9M', location: 'Miami Beach', date: '2 weeks ago' }
  ]
};