import React from 'react'

const contact = () => {
    return (
        <div className="container  mx-auto max-w-7xl px-4 py-8 lg:grid lg:grid-cols-2 gap-8">
            <div className="lg:col-span-1">
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                    <div className="max-w-md py-6 lg:ml-auto">
                        <div className="flex mb-12 items-center">
                            <div className="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-lime-200">
                                <ion-icon name="call" size='large'></ion-icon>
                            </div>
                            <div>
                                <span className="text-lg text-gray-500">Phone</span>
                                <span className="block text-lg font-semibold text-gray-900">+64-9-3099558</span>
                            </div>
                        </div>
                        <div className="flex mb-12 items-center">
                            <div className="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-lime-200">
                                <ion-icon name="mail" size='large'></ion-icon>                            </div>
                            <div>
                                <span className="text-lg text-gray-500">Email</span>
                                <span className="block text-lg font-semibold text-gray-900">enrol@ica.ac.nz or marketing@ica.ac.nz</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-lime-200">
                                <ion-icon name="location" size='large'></ion-icon>                            </div>
                            <div>
                                <span className="text-lg text-gray-500">Address</span>
                                <span className="block text-lg font-semibold text-gray-900">Level 3, 520 Queen Street, Auckland, New Zealand-1010.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-1">
                {/* Assuming you have a map component to display the location */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    {/* Your map component goes here */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25538.997309560084!2d174.7619058!3d-36.8574499!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47e88bfe2c27%3A0x8c5e2e80750cc275!2sLevel%203%2F520%20Queen%20Street%2C%20Auckland%20CBD%2C%20Auckland%201010%2C%20New%20Zealand!5e0!3m2!1sen!2s!4v1707229712495!5m2!1sen!2s" className="w-full h-96"
                        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </div>
        </div>
    )
}

export default contact