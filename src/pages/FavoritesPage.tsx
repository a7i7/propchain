import React from 'react';
import { Heart } from 'lucide-react';
import { PropertyCard } from '../components/PropertyCard/PropertyCard';
import { mockProperties } from '../data/mockData';

interface FavoritesPageProps {
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onPropertyClick: (id: string) => void;
}

export const FavoritesPage: React.FC<FavoritesPageProps> = ({ 
  favorites, 
  onToggleFavorite, 
  onPropertyClick 
}) => {
  const favoriteProperties = mockProperties.filter(p => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50/30 to-red-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(244,63,94,0.05),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.05),transparent_60%)]"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-bl from-rose-200/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-pink-200/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center">
            <Heart className="w-8 h-8 text-red-500 mr-3 fill-current" />
            Favorite Properties
          </h1>
          <p className="text-xl text-gray-600">
            Your saved properties are here for easy access.
          </p>
        </div>

        {favoriteProperties.length > 0 ? (
          <>
            <div className="mb-6 relative z-10">
              <span className="text-gray-600">
                <span className="font-semibold text-gray-900">{favoriteProperties.length}</span> saved properties
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {favoriteProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={{...property, favorited: true}}
                  onToggleFavorite={onToggleFavorite}
                  onClick={onPropertyClick}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16 relative z-10">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No favorites yet</h3>
            <p className="text-gray-600 mb-6">Start browsing properties and save your favorites here.</p>
            <a
              href="/listings"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
            >
              Browse Properties
            </a>
          </div>
        )}
      </div>
    </div>
  );
};