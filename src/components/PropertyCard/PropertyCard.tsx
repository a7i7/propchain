import React from 'react';
import { Heart, MapPin, Bed, Bath, Square, Car } from 'lucide-react';
import { Property } from '../../types';

interface PropertyCardProps {
  property: Property;
  onToggleFavorite: (id: string) => void;
  onClick: (id: string) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ 
  property, 
  onToggleFavorite, 
  onClick 
}) => {
  const formatPrice = (price: number) => {
    if (property.status === 'for-rent' || property.status === 'rented') {
      return `$${price.toLocaleString()}/mo`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <div 
      className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:scale-[1.02] border border-white/20"
      onClick={() => onClick(property.id)}
    >
      <div className="relative">
        <img 
          src={property.images[0]} 
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            property.status === 'for-sale' 
              ? 'bg-emerald-500 text-white' 
              : property.status === 'for-rent'
              ? 'bg-blue-500 text-white'
              : property.status === 'sold'
              ? 'bg-gray-500 text-white'
              : 'bg-orange-500 text-white'
          }`}>
            {property.status === 'for-sale' ? 'For Sale' : 
             property.status === 'for-rent' ? 'For Rent' :
             property.status === 'sold' ? 'Sold' : 'Rented'}
          </span>
        </div>
        <div className="absolute top-3 right-3 flex space-x-2">
          {property.isNFT && (
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              NFT
            </span>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(property.id);
            }}
            className={`p-2 rounded-full transition-all duration-200 ${
              property.favorited 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
            }`}
          >
            <Heart className={`w-4 h-4 ${property.favorited ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {property.title}
          </h3>
          <span className="text-xl font-bold text-blue-600">{formatPrice(property.price)}</span>
        </div>
        
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <div className="flex items-center justify-between text-gray-600 text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-1" />
              <span>{property.sqft.toLocaleString()}</span>
            </div>
            {property.parking > 0 && (
              <div className="flex items-center">
                <Car className="w-4 h-4 mr-1" />
                <span>{property.parking}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};