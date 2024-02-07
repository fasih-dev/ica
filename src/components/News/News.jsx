import React from 'react';
import NewsList from './NewsList'; // Update the path accordingly

const News = () => {
    return (
        <>
            <div className=' mx-auto  max-w-screen-xl'>
                <div className="grid grid-cols-1 gap-4">
                    <div className="col-span-1 sm:col-span-1 lg:col-span-4">
                        <section className="relative py-5 overflow-hidden">
                            <img className="absolute top-0 right-0 xl:mt-10 -mr-24 lg:-mr-0" src="saturn-assets/images/blog/star-circle-right.svg" alt="" />
                            <img className="hidden sm:block absolute bottom-0 left-0 -mb-48 lg:mb-0" src="saturn-assets/images/blog/blue-light-left.png" alt="" />
                            <div className="relative container px-4 mx-auto">
                                <div className="max-w-2xl mx-auto mb-15 text-center">
                                    <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-lime-900 bg-lime-50 rounded-full">OUR BLOG</span>
                                    <h1 className="font-heading text-4xl xs:text-6xl md:text-4xl font-bold">
                                        <span>News &</span>
                                        <span className="font-serif italic">Articles</span>
                                    </h1>
                                </div>
                                {NewsList.map((newsItem, index) => (
                                    <div key={index}>
                                        <div className="max-w-5xl mx-auto">
                                            <div className="py-12 border-t-2 border-gray-100">
                                                <div className="flex flex-wrap lg:flex-nowrap items-center">
                                                    <div className="w-full lg:w-auto px-4 mb-8 lg:mb-0">
                                                        <img className="block w-44 h-30 p-2 bg-lime-700" src={newsItem.image} alt={newsItem.title} />
                                                    </div>
                                                    <div className="w-full lg:w-9/12 px-4 mb-10 lg:mb-0">
                                                        <div className="max-w-2xl">
                                                            <span className="block text-gray-400 mb-1">{newsItem.date}</span>
                                                            <p className="text-2xl font-semibold text-gray-900">{newsItem.title}</p>
                                                        </div>
                                                    </div>
                                                    <div className="w-full lg:w-auto px-4 ml-auto text-right">
                                                        <a className="inline-flex items-center text-xl font-semibold text-lime-900 hover:text-gray-900" href={newsItem.link}>
                                                            <span className="mr-2">Read</span>
                                                            <svg className="animate-bounce" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1.33301 14.6668L14.6663 1.3335" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                <path d="M1.33301 1.3335H14.6663V14.6668" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;
