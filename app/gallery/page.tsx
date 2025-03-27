import React from "react";

const images = [
    { src: "/images/project1.jpg", alt: "Image 1", id: 1 ,title:"Steel Railing"},
    { src: "/images/project2.jpg", alt: "Image 2", id: 2 ,title:"Upvc Doors"},
    { src: "/images/project3.png", alt: "Image 3", id: 3,title:"False Ceiling" },
    { src: "/images/project4.jpg", alt: "Image 4", id: 4 ,title:"Alumunium Windows"},
    { src: "/images/project5.jpg", alt: "Image 5", id: 5 ,title:"Colors Depo"},
    { src: "/images/project1.jpg", alt: "Image 6", id: 6  ,title:"Steel Railing"},
    { src: "/images/project4.jpg", alt: "Image 7", id: 7 ,title:"Alumunium Windows"},
    { src: "/images/project6.jpg", alt: "Image 8", id: 8 ,title:"2x2 Board"},
];



export default function MediaPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            
            {/* Gallery Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((image) => (
                        <div key={image.id} className="overflow-hidden rounded-md shadow-md">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-40 object-cover"
                            />
                            <div className="flex justify-center font-bold text-xl">
                                {image.title}
                                </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Videos Section */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Videos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <iframe className="h-auto w-full" src="https://www.youtube.com/embed/GZHb1C5I_tk?si=Tqn8LHPxhQ0HZdcI" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className="h-auto w-full" src="https://www.youtube.com/embed/4fiX7AEQXRc?si=XhkFI1o7i8KOe8uy" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe className="h-auto w-full" src="https://www.youtube.com/embed/z9jji3p9uRE?si=IU9Pp39N0hyCR72Q&amp;start=54" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>
        </div>
    );
}
