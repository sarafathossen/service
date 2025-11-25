import ServiceCard from '@/Component/ServiceCard';
import React from 'react';

export default async function ProductsPage() {
    const res = await fetch('https://workly-server-two.vercel.app/services');
    const data = await res.json();

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 sm:p-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
                Our Services
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map(service => (
                    <ServiceCard 
                        key={service._id}
                        service={service}
                    />
                ))}
            </div>
        </div>
    )
}
