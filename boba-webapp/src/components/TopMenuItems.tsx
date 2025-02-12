import React from 'react';
import Card from './Card';

const TopMenuItems: React.FC = () => {
  const topItems = [
    {
      id: '1',
      name: 'Classic Milk Tea with Boba',
      description: 'A timeless blend of black tea and creamy milk with chewy boba pearls.',
      price: 4.50,
      imageUrl: '/images/classic-milk-tea.jpg',
    },
    // Add more items as needed
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Top Menu Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topItems.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopMenuItems;
