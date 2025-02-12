import React from "react";
import Button from "./Button";
import Link from "next/link";

const OrderSection: React.FC = () => {
  return (
    <section className="py-12 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Craving Boba? Order Now!</h2>
        <p className="text-gray-600 mb-6">
          Order your favorite drinks online for pickup or delivery.
        </p>
        <Link href="/order">
          <Button label="Start Your Order" variant="primary" size="lg" />
        </Link>
        <div className="mt-6 text-gray-500">
          <p><strong>Store Hours:</strong> 10:00 AM - 10:00 PM</p>
          <p>Pickup & Delivery Available</p>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
