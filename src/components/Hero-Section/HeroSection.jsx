import React from 'react'
import ICAVideo from '../../assets/Video/International College of Auckland ICA.mp4'

const HeroSection = () => {
    return (
        <>
            <section>
                <div className="mx-auto max-w-screen-xl mb-8 px-4 pt-2   sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">


                        <div className=" sm:order-first">
                            <h2 className="text-2xl font-bold sm:text-2xl text-center lg:text-left mt-8
                            "> Welcome To  International College Of Auckland (ICA)
                            </h2>
                            <p className="mt-4 text-gray-600 text-center lg:text-left">
                                The International College of Auckland (ICA) is a private training provider located at upper Queen Street in vibrant Central Auckland. There are many places to explore with Downtown, the Viaduct, Skytower, Auckland Harbour nearby, and regular events to experience.
                                ICA offers high-quality courses with a wide range of Engineering, Information Technolgy, and English Programmes. ICA is registered under the Education Act of 1989 and has agreed to be bound by the New Zealand Ministry of the Education Code of Practice for the Pastoral Care of International Students.
                            </p>
                            <div className="flex justify-center lg:justify-start">
                                <a
                                    href="#"
                                    className="mt-8 mr-4 px-6 rounded bg-green-600 py-3 inline-block items-center justify-center text-sm font-medium text-white transition hover:bg-lime-700 focus:outline-none focus:ring focus:ring-yellow-400 sm:text-center lg:text-left"
                                >
                                    Student Testinomials
                                </a>

                                <a
                                    href="#"
                                    className="mt-8 px-6 rounded bg-green-600 py-3 inline-block items-center justify-center text-sm font-medium text-white transition hover:bg-lime-700 focus:outline-none focus:ring focus:ring-yellow-400 sm:text-center lg:text-left"
                                >
                                    Request Information
                                </a>
                            </div>
                        </div>
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full flex items-center justify-center">
                            <video
                                controls
                                className="w-full max-h-full"
                                loop autoPlay muted
                            >
                                <source src={ICAVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection;