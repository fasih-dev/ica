import React from 'react'
import testimonialsArray from './TestinomiallDetails'

const Testinomial = () => {
    return (

        <>
            <section className="my-8 dark:bg-white dark:text-gray-100">
                <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                    <h1 className="p-4 text-4xl font-semibold text-black text-center ">What our customers are saying about us</h1>
                </div>
                <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                    {testimonialsArray.map((testimonial, index) => (
                        <div key={index} className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-white border border-gray-300">
                                <p className="relative px-6 py-1 text-lg italic text-center text-black">
                                    {/* Testimonial message */}
                                    {testimonial.message}
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-lime-400 dark:text-gray-900">
                                {/* Testimonial avatar */}
                                <img src={testimonial.avatar} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                                {/* Testimonial details */}
                                <p className="text-xl font-semibold leadi">{testimonial.name}</p>
                                <p className="text-sm uppercase">{testimonial.diploma}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}

export default Testinomial