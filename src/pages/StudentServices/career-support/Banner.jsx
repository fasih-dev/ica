import React from 'react'
const Banner = () => {
    return (
        <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${image1})` }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="hero-content text-center lg:text-left py-24 lg:flex lg:items-center relative">
                    {/* Add a relative positioning to this div */}
                    <div className="relative z-10">
                        <h1 className="text-3xl font-bold text-white sm:text-4xl">Career Support</h1>
                        <p className="mt-3 max-w-md mx-auto text-lg text-blue-200 sm:text-xl lg:mx-0">
                            Adapt to the ever-changing world of business with our comprehensive BSc course.
                        </p>
                        <div className="mt-8 flex justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lime-700 md:py-4 md:text-lg md:px-10">
                                    Enroll Now
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Keep the overlay, but reduce its opacity */}
                </div>
                <div className="absolute inset-0 bg-black opacity-70"></div>

            </div>
        </div>
    )
}

export default Banner