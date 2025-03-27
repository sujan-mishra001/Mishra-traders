import ServiceCard from "../components/ServiceCard";
import React from "react";

export default function ServicesPage() {
    const services = [
        {
            name: "Aluminium",
            image: "/images/home1.jpg",
            link: "/services/aluminium",
        },
        { name: "Steel", image: "/images/home2.jpg", link: "/services/steel" },
        { name: "Doors", image: "/images/home4.jpg", link: "/services/doors" },
        { name: "2X2", image: "/images/home3.jpg", link: "/services/2x2" },
        { name: "UPVC", image: "/images/home5.jpg", link: "/services/UPVC" },
        { name: "Colors", image: "/images/project5.jpg", link: "/services/UPVC" },

    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Our Services</h1>
            <div className="grid grid-cols-1  font-semibold sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        name={service.name}
                        image={service.image}
                        link={service.link}
                    />
                ))}
            </div>
        </div>
    );
}
