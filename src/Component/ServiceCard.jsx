"use client";

import React from 'react';
import Link from 'next/link';

const ServiceCard = ({ service }) => {
    const { service_name, category, price, service_rating, image_url, _id } = service;

    return (
        <div className="hover:bg-red-500 card bg-base-200 shadow-md p-4 rounded-xl hover:shadow-lg transition-all duration-300 w-full my-3">
            <img
                src={image_url || "https://i.ibb.co/RTM46szK/Al-Hasan.jpg"}
                alt={service_name || "Service Image"}
                className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h2 className="text-xl truncate font-semibold mb-2">{service_name || "No Name"}</h2>
            <div className="flex justify-between px-2 text-gray-600 mb-2">
                <p>{category || "No Category"}</p>
                <p>{service_rating?.rating || "No Rating"}</p>
            </div>
            <h2 className='font-bold text-xl mb-8'>Price: {price || "N/A"}</h2>

            <Link
                href={`/services/${_id}`}  // এই _id ঠিক আছে কিনা চেক করো
                className=" px-6 mt-8 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
            >
                Details
            </Link>

        </div>
    );
};

export default ServiceCard;
