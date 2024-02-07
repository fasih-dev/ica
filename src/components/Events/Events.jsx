import React from 'react'
import EventList from './EventList'

const Events = () => {
    return (
        <>
            <section className=" bg-gray-100 ">
                <div className="container px-6 py-10 flex flex-col mx-auto max-w-7xl ">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold capitalize lg:text-3xl text-black sm:text-center">Latest Events</h1>
                    </div>
                    <hr className="my-8 border-gray-200 dark:border-gray-700" />

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1">
                        {EventList.map((events, index) => (
                            <div key={index} className='border border-gray-300 p-4'>
                                <img className="object-cover object-center w-full h-64" src={events.image} alt={events.title} />

                                <div className="mt-8">
                                    <h1 className="mt-4 text-xl font-semibold text-gray-800 text-black">{events.title}</h1>

                                    <p className="mt-2 text-gray-500 dark:text-gray-400">{events.date}</p>

                                    <div className="flex items-center justify-between mt-4">
                                        <a href={events.link} className="inline-block text-blue-500 underline hover:text-blue-400">
                                            Read more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>)
}

export default Events