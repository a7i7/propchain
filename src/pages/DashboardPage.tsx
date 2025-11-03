import React from 'react';
import { User, Wallet, Heart, Search, TrendingUp, Star, Shield } from 'lucide-react';
import { mockUser, mockMarketData } from '../data/mockData';

interface DashboardPageProps {
  walletConnected: boolean;
  onConnectWallet: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ 
  walletConnected, 
  onConnectWallet 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50/30 to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(99,102,241,0.05),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(139,92,246,0.05),transparent_60%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,transparent_0%,rgba(59,130,246,0.02)_50%,transparent_100%)]"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-bl from-indigo-200/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-purple-200/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            Welcome back, {mockUser.name}! Here's your property portfolio overview.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 relative z-10">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Favorite Properties</p>
                <p className="text-2xl font-bold text-gray-900">{mockUser.favorites.length}</p>
              </div>
              <Heart className="w-8 h-8 text-red-500" />
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Saved Searches</p>
                <p className="text-2xl font-bold text-gray-900">{mockUser.savedSearches.length}</p>
              </div>
              <Search className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Property Value</p>
                <p className="text-2xl font-bold text-gray-900">{mockMarketData.averagePrice}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-emerald-500" />
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Wallet Status</p>
                <p className={`text-sm font-semibold ${walletConnected ? 'text-emerald-600' : 'text-red-600'}`}>
                  {walletConnected ? 'Connected' : 'Disconnected'}
                </p>
              </div>
              <Wallet className={`w-8 h-8 ${walletConnected ? 'text-emerald-500' : 'text-gray-400'}`} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Activity */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 p-6">
              <h3 className="text-xl font-semibold mb-6">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                  <Heart className="w-5 h-5 text-red-500" />
                  <div className="flex-1">
                    <p className="font-medium">Added property to favorites</p>
                    <p className="text-sm text-gray-600">Modern Downtown Loft • 2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-emerald-50 rounded-lg">
                  <Search className="w-5 h-5 text-emerald-500" />
                  <div className="flex-1">
                    <p className="font-medium">Saved new search</p>
                    <p className="text-sm text-gray-600">Downtown Apartments • 1 day ago</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                  <Shield className="w-5 h-5 text-purple-500" />
                  <div className="flex-1">
                    <p className="font-medium">Viewed NFT property</p>
                    <p className="text-sm text-gray-600">Waterfront Penthouse • 3 days ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Saved Searches */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 p-6">
              <h3 className="text-xl font-semibold mb-6">Saved Searches</h3>
              <div className="space-y-4">
                {mockUser.savedSearches.map((search) => (
                  <div key={search.id} className="border border-gray-200/50 bg-white/50 rounded-lg p-4 hover:border-blue-300 hover:bg-white/80 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{search.name}</h4>
                        <div className="text-sm text-gray-600">
                          {search.filters.type && <span className="capitalize">{search.filters.type} • </span>}
                          {search.filters.location && <span>{search.filters.location} • </span>}
                          {search.filters.minPrice && <span>${search.filters.minPrice.toLocaleString()}</span>}
                          {search.filters.maxPrice && <span> - ${search.filters.maxPrice.toLocaleString()}</span>}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Created {search.createdAt}</div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Run Search
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Wallet Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 p-6">
              <h3 className="text-xl font-semibold mb-6">Wallet Connection</h3>
              {walletConnected ? (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-emerald-600 font-medium">Wallet Connected</span>
                  </div>
                  <div className="text-sm text-gray-600 break-all bg-gray-50 p-3 rounded-lg">
                    0x742d35cc6634C0532925a3b8D6aD8a7e15b2a9d1
                  </div>
                  <button className="w-full border border-red-300 text-red-600 hover:bg-red-50 py-2 px-4 rounded-lg transition-colors">
                    Disconnect Wallet
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-center py-6">
                    <Wallet className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600 mb-4">Connect your wallet to access NFT properties and blockchain features.</p>
                    <button
                      onClick={onConnectWallet}
                      className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300"
                    >
                      Connect Wallet
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 p-6">
              <h3 className="text-xl font-semibold mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 hover:bg-white/50 rounded-lg transition-colors flex items-center space-x-3">
                  <Search className="w-5 h-5 text-blue-500" />
                  <span>Create New Search</span>
                </button>
                <button className="w-full text-left p-3 hover:bg-white/50 rounded-lg transition-colors flex items-center space-x-3">
                  <User className="w-5 h-5 text-emerald-500" />
                  <span>Update Profile</span>
                </button>
                <button className="w-full text-left p-3 hover:bg-white/50 rounded-lg transition-colors flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>Rate Properties</span>
                </button>
              </div>
            </div>

            {/* Market Insights */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 p-6">
              <h3 className="text-xl font-semibold mb-6">Market Insights</h3>
              <div className="space-y-4">
                <div className="p-4 bg-emerald-50/80 backdrop-blur-sm rounded-lg border border-emerald-100/50">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span className="font-medium text-emerald-800">Market Up</span>
                  </div>
                  <p className="text-sm text-emerald-700">
                    Property values increased {mockMarketData.monthlyGrowth} this quarter
                  </p>
                </div>
                
                <div className="p-4 bg-blue-50/80 backdrop-blur-sm rounded-lg border border-blue-100/50">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-blue-800">NFT Growth</span>
                  </div>
                  <p className="text-sm text-blue-700">
                    {mockMarketData.nftProperties} NFT properties available
                  </p>
                </div>
                
                <div className="p-4 bg-purple-50/80 backdrop-blur-sm rounded-lg border border-purple-100/50">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                    <span className="font-medium text-purple-800">Top Location</span>
                  </div>
                  <p className="text-sm text-purple-700">
                    {mockMarketData.topLocations[0].name} - {mockMarketData.topLocations[0].avgPrice} avg
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};