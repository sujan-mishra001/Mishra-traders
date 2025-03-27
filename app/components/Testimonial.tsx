import React from "react";

interface TestimonialProps {
    quote: string;
    author: string;
    role: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role }) => {
    return (
        <div className="bg-white rounded-md shadow-md p-4">
            <p className="text-gray-700 italic mb-2">"{quote}"</p>
            <div className="text-sm font-medium">
                <p>{author}</p>
                <p className="text-gray-500">{role}</p>
            </div>
        </div>
    );
};

export default Testimonial;
