import React from 'react';
import slogan from './../../../assets/media/slogan.png';

const FooterBanner = () => {
    return (
        <section className="relative bg-cover bg-center h-80 flex items-center" style={{ backgroundImage: `url(${slogan})` }}>
            {/* <div className="absolute inset-0 bg-black opacity-70"></div> */}
            <div className="container mx-auto text-center z-10 text-white">
                <h1 className="text-2xl md:text-4xl font-bold italic">Leading Together for a Brighter Future</h1>
            </div>
        </section>
    );
};

export default FooterBanner;
