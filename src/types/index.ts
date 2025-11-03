export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: 'house' | 'apartment' | 'condo' | 'townhouse';
  status: 'for-sale' | 'for-rent' | 'sold' | 'rented';
  images: string[];
  description: string;
  features: string[];
  yearBuilt: number;
  parking: number;
  isNFT?: boolean;
  walletAddress?: string;
  favorited?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  walletConnected: boolean;
  walletAddress?: string;
  favorites: string[];
  savedSearches: SavedSearch[];
}

export interface SavedSearch {
  id: string;
  name: string;
  filters: PropertyFilters;
  createdAt: string;
}

export interface PropertyFilters {
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  type?: string;
  status?: string;
  location?: string;
}