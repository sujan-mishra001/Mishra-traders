import React from "react";
import Link from "next/link";

interface ServiceCardProps {
    name: string;
    image: string; // URL or path to the image
    link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, image, link }) => {
    return (
        <div className="bg-gray-200 rounded-md shadow-md overflow-hidden">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{name}</h3>
                <Link
                    href={link}
                    className="bg-primary  px-4 py-2 rounded-md hover:bg-accent"
                >
                    For more info-
                    click here
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
