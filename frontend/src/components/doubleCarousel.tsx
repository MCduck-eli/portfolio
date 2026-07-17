import React from "react";

const DoubleCarousel: React.FC = () => {
    const topRowImages: string[] = [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80",
    ];

    const bottomRowImages: string[] = [
        "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=600&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=600&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&auto=format&fit=crop&q=80",
    ];

    const doubleTop: string[] = [
        ...topRowImages,
        ...topRowImages,
        ...topRowImages,
        ...topRowImages,
    ];
    const doubleBottom: string[] = [
        ...bottomRowImages,
        ...bottomRowImages,
        ...bottomRowImages,
        ...bottomRowImages,
    ];

    return (
        <div className="carousel-container">
            <div className="marquee-wrapper">
                <div className="marquee-track fast-speed">
                    {doubleTop.map((src: string, index: number) => (
                        <div className="carousel-item" key={`top-${index}`}>
                            <img src={src} alt={`Top track ${index}`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="marquee-wrapper">
                <div className="marquee-track slow-speed">
                    {doubleBottom.map((src: string, index: number) => (
                        <div className="carousel-item" key={`bottom-${index}`}>
                            <img src={src} alt={`Bottom track ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoubleCarousel;
