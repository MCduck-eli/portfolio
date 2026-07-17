import React from "react";
import {
    SiApple,
    SiGoogle,
    SiMeta,
    SiNetflix,
    SiTesla,
    SiSpotify,
} from "react-icons/si";

const CompanyLogos: React.FC = () => {
    const logos = [
        <SiApple size={45} />,
        <SiGoogle size={45} />,
        <SiMeta size={45} />,
        <SiNetflix size={45} />,
        <SiTesla size={45} />,
        <SiSpotify size={45} />,
    ];

    const doubleLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <div className="logos-container">
            <div className="logos-wrapper">
                <div className="logos-track">
                    {doubleLogos.map((logo, index) => (
                        <div className="logo-item" key={index}>
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompanyLogos;
