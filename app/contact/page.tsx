import React from "react";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Main Content */}
            <div className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 flex justify-center" >Contact Mishra Trader's</h1>
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Contact Details */}
                    <div className="flex-1">
                        <h2 className="text-xl font-extrabold mb-4">Get in Touch</h2>
                        <p className="mb-2 text-gray-600">
                        Have a project in mind? Whether you need durable doors, stylish steel railings, or high-quality paints, Mishra Trader's is here to help.                        </p>
                        <ul className="space-y-3">
                            <li>
                                <strong>📍 Visit Us:</strong> Arjundhara-6, Jhapa, Nepal
                            </li>
                            <li>
                                <strong>📞 Call Us:</strong> +977 9804906236  / +977 9804042126
                            </li>
                            <li>
                                <strong>📧 Email Us:</strong> mishratrader's@gmai.com
                            </li>
                           
                            <li>
                                <strong>💼 Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM
                            </li>
                            <li>
                                <strong>Director:</strong> Chhabi Lal Mishra
                            </li>
                            <li>
                                <strong>Assistant Director:</strong> Ramesh Mishra
                            </li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div className="flex-1">
                        <h2 className="text-2xl flex justify-center  font-bold mb-4">Our Location</h2>
                        <div className="w-full h-64 lg:h-full rounded-md overflow-hidden shadow-md">
                            <iframe
                             src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1103.695129635129!2d87.99206701171832!3d26.66270919307287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1743057133777!5m2!1sen!2snp"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
           
        </div>
    );
}
