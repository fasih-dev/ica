import React from 'react'
import about from './../../../assets/media/about.jpg'
import mentoring1 from './../../../assets/pages/mentoring/mentoring1.jpg'
import mentoring2 from './../../../assets/pages/mentoring/mentoring2.jpg'
import mentoring3 from './../../../assets/pages/mentoring/mentoring3.jpg'
import mentoring4 from './../../../assets/pages/mentoring/mentoring4.jpg'

const Mentoring = () => {
    return (

        <>
            <div className="mx-auto max-w-7xl">
                <div className="2xl:container  2xl:mx-auto lg:py-16 md:py-12 md:px-6 py-9 px-4">
                    <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer pb-2">Menotring System</p>
                    <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                        <div className="w-full lg:w-6/12">
                            <h1 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">Comprehensive Student Support System at ICA
                            </h1>
                            <p className="font-normal text-base leading-6 text-gray-600 mt-6">At ICA (International College of Auckland), we pride ourselves on providing a comprehensive student support system designed to ensure the success and well-being of every student, particularly those who are new to New Zealand. Our orientation programme offers a structured introduction to the college, its faculty, and the local culture, helping students acclimate smoothly to their new environment. Professional development sessions further equip students with the skills and understanding needed to navigate the New Zealand work environment effectively.</p>
                            <p className="font-normal text-base leading-6 text-gray-600 mt-6">At ICA, students are never alone in their academic journey. Our dedicated staff is committed to providing ongoing support, guidance, and mentorship</p>

                        </div>
                        <div className="w-full lg:w-6/12">
                            <img className="lg:block hidden w-full " src={about} alt="people discussing on board" />
                            <img className="lg:hidden sm:block hidden w-full" src={about} alt="people discussing on board" />
                            <img className="sm:hidden block w-full" src={about} alt="people discussing on board" />
                        </div>
                    </div>
                </div>
                <section class="py-4 overflow-hidden">
                    <div class="container px-4 mx-auto">
                        <h2 className="font-bold text-3xl lg:leading-9 leading-7 mb-6">Why Choose ICA</h2>

                        <div class="flex flex-wrap -m-3">
                            <div class="w-full sm:w-1/2 lg:w-1/4 p-3">
                                <div class="p-6 pb-7 h-full bg-white border rounded-xl">
                                    <div class="relative flex justify-center items-center mb-5 h-44 bg-neutral-100 overflow-hidden rounded-md">
                                        <div class="absolute flex items-center justify-center bg-white rounded-full">
                                            <img src={mentoring4} alt="" />
                                        </div>
                                    </div>
                                    <h3 class="font-heading mb-3 text-lg font-semibold">Orientation Programme
                                    </h3>
                                    <p class="mb-7 text-neutral-500">Starting at a new school can be quite scary – even more in a new country! On the first day of classes, ICA goes through a robust orientation programme with the students to allow them to familiarise themselves with the college, their lecturers, and to get to know their fellow classmates.

                                    </p>

                                </div>
                            </div>
                            <div class="w-full sm:w-1/2 lg:w-1/4 p-3">
                                <div class="p-6 pb-7 h-full bg-white border rounded-xl">
                                    <div class="relative flex justify-center items-center mb-5 h-44 bg-neutral-100 overflow-hidden rounded-md">
                                        <div class="absolute flex items-center justify-center rounded-full">
                                            <img src={mentoring2} alt="" />
                                        </div>
                                    </div>
                                    <h3 class="font-heading mb-3 text-lg font-semibold">Professional Development
                                    </h3>
                                    <p class="mb-7 text-neutral-500">Students receive extra development sessions to enhance their professional knowledge, and help them fit in and understand the culture and work environment in New Zealand. Many international students are new arrivals to New Zealand and may not have worked before.

                                    </p>

                                </div>
                            </div>
                            <div class="w-full sm:w-1/2 lg:w-1/4 p-3">
                                <div class="p-6 pb-7 h-full bg-white border rounded-xl">
                                    <div class="relative flex justify-center items-center mb-5 h-44 bg-neutral-100 overflow-hidden rounded-md">
                                        <div class="absolute flex items-center justify-center bg-white  rounded-full">
                                            <img src={mentoring3} alt="" />
                                        </div>
                                    </div>
                                    <h3 class="font-heading mb-3 text-lg font-semibold">Individual Interactions
                                    </h3>
                                    <p class="mb-7 text-neutral-500">Smaller classes mean more one-on-one contact with tutors. Students' individual needs are of great importance to our tutors, who will help them set realistic goals for their learning. Students will never be without support during their time at ICA.

                                    </p>

                                </div>
                            </div>
                            <div class="w-full sm:w-1/2 lg:w-1/4 p-3">
                                <div class="p-6 pb-7 h-full bg-white border rounded-xl">
                                    <div class="relative flex justify-center items-center mb-5 h-44 bg-neutral-100 overflow-hidden rounded-md">
                                        <div class="absolute flex items-center justify-center bg-white rounded-full">
                                            <img src={mentoring4} alt="" />
                                        </div>
                                    </div>
                                    <h3 class="font-heading mb-3 text-lg font-semibold">Qualified Staff
                                    </h3>
                                    <p class="mb-7 text-neutral-500">Most of our teaching staff hold a doctoral degree or are PhD candidates. The English tutors in Auckland are qualified tutors with CELTA orTESOL certificates. Most of English tutors hold a master degree or above in English language teaching or relevant field.

                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>

    )
}

export default Mentoring