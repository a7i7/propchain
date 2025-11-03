import React, { useState, useMemo } from 'react';
import { PropertyCard } from '../components/PropertyCard/PropertyCard';
import { SearchFilters } from '../components/SearchFilters/SearchFilters';
import { mockProperties } from '../data/mockData';
import { PropertyFilters } from '../types';

interface ListingsPageProps {
  onToggleFavorite: (id: string) => void;
  onPropertyClick: (id: string) => void;
}

export const ListingsPage: React.FC<ListingsPageProps> = ({ 
  onToggleFavorite, 
  onPropertyClick 
}) => {
  const [filters, setFilters] = useState<PropertyFilters>({});
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('price-desc');

  const filteredProperties = useMemo(() => {
    let filtered = [...mockProperties];

    // Apply filters
    if (filters.minPrice) {
      filtered = filtered.filter(p => p.price >= filters.minPrice!);
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(p => p.price <= filters.maxPrice!);
    }
    if (filters.bedrooms) {
      filtered = filtered.filter(p => p.bedrooms >= filters.bedrooms!);
    }
    if (filters.bathrooms) {
      filtered = filtered.filter(p => p.bathrooms >= filters.bathrooms!);
    }
    if (filters.type) {
      filtered = filtered.filter(p => p.type === filters.type);
    }
    if (filters.status) {
      filtered = filtered.filter(p => p.status === filters.status);
    }
    if (filters.location) {
      filtered = filtered.filter(p => 
        p.location.toLowerCase().includes(filters.location!.toLowerCase()) ||
        p.title.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'sqft-desc':
        filtered.sort((a, b) => b.sqft - a.sqft);
        break;
      case 'year-desc':
        filtered.sort((a, b) => b.yearBuilt - a.yearBuilt);
        break;
      default:
        break;
    }

    return filtered;
  }, [filters, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/20 to-emerald-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(16,185,129,0.03),transparent_50%)]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-100/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8 relative">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Property Listings
          </h1>
          <p className="text-xl text-gray-600">
            Discover your perfect property from our extensive collection.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 relative z-10">
          <SearchFilters
            filters={filters}
            onFiltersChange={setFilters}
            showFilters={showFilters}
            onToggleFilters={() => setShowFilters(!showFilters)}
          />
        </div>

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 relative z-10">
          <div className="text-gray-600">
            <span className="font-semibold text-gray-900">{filteredProperties.length}</span> properties found
          </div>
          
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="price-desc">Price: High to Low</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="sqft-desc">Size: Largest First</option>
              <option value="year-desc">Year Built: Newest First</option>
            </select>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onToggleFavorite={onToggleFavorite}
              onClick={onPropertyClick}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-16 relative z-10">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria to see more results.</p>
            <button
              onClick={() => setFilters({})}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};