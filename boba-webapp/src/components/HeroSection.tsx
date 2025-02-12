import React from 'react';
import Button from './Button';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Boba Bear!</h1>
        <p className="text-xl mb-6">Experience the finest boba teas crafted with love.</p>
        <Button label="Explore Our Story" onClick={() => window.location.href = '/about'} variant="primary" size="lg" />
      </div>
    </section>
  );
};

export default HeroSection;
