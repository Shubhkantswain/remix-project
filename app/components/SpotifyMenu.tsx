import React, { useState } from 'react';

const SpotifyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Add to Playlist', icon: '🎵' },
    { label: 'Add to Queue', icon: '⏱️' },
    { label: 'Share', icon: '🔗' },
    { label: 'Like', icon: '❤️' },
    { label: 'View Artist', icon: '👤' }
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 p-4">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
      >
        Toggle Menu
      </button>

      {/* Dropdown Menu */}
      <div
        className={`fixed left-0 right-0 bottom-0 bg-black rounded-t-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="p-4">
          {/* Handle */}
          <div className="w-12 h-1 bg-gray-600 rounded-full mx-auto mb-4" />

          {/* Menu Items */}
          <div className="space-y-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="w-full text-left px-4 py-3 text-white hover:bg-gray-700 rounded-lg transition-colors flex items-center space-x-3"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-lg">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyDropdown;