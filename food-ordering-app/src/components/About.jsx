import React from 'react';
import aboutImage from '../assets/images/about-image.png';

const About = () => {
    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                        Welcome to Five Bros, where passion for flavor and dedication to quality converge to redefine
                        the burger experience. Our establishment celebrates the art of crafting the perfect burger.
                        Our chefs meticulously source the freshest ingredients, combining classic American flavors with
                        international culinary trends to create mouthwatering masterpieces. From our cozy atmosphere
                        to our commitment to sustainability and community, every visit to Five Bros is a journey worth
                        savoring. Come join us and experience the difference that passion, quality, and brotherhood can make.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    );
};

export default About;