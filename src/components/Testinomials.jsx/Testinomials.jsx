import React from 'react';
import TestinomialList from './TestinomialList'

const Testimonials = () => {
    return (
        <section className="relative py-10 lg:pt-5  mt-20 lg:pb-20 bg-gray-100 overflow-hidden">
            <div className="relative container px-4 mx-auto max-w-7xl">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap -mx-4 items-center mb-16">
                        <div className="w-full lg:w-2/3 px-4 mb-12 lg:mb-0">
                            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-lime-900 bg-lime-50 rounded-full">TESTIMONIALS</span>
                            <h1 className="font-heading text-4xl xs:text-6xl font-bold text-gray-900 mb-4">
                                <span>Student Testimonial</span>
                            </h1>
                        </div>
                        <div className="w-full lg:w-1/3 px-4">
                            <div className="flex items-center justify-end">
                                <a className="inline-flex   items-center justify-center  border border-gray-200 hover:border-lime-900 text-gray-600 hover:text-lime-900 transition duration-200" href="#">
                                    <span className=" p-5 font-bold text-lime-900 bg-lime-50 ">Read More</span>

                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        {TestinomialList.map((testimonial, index) => (
                            <div key={index} className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 sm:w-1/2">
                                <div className="flex flex-col justify-between h-full max-w-md mx-auto lg:max-w-none bg-white rounded-3xl shadow-lg overflow-hidden">
                                    <div className="p-6">
                                        <p className="text-lg text-gray-900">{testimonial.quote}</p>
                                    </div>
                                    <div className="px-8 py-4 bg-lime-800">
                                        <div className="flex items-center">
                                            <div >
                                                <img className='w-40 h-24 object-cover rounded-md' src={testimonial.avatar} alt="" />
                                            </div>
                                            <div className="ml-5">
                                                <span className="block text-xl text-white font-semibold leading-none">{testimonial.name}</span>
                                                <span className="block text-sm text-lime-200">{testimonial.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
