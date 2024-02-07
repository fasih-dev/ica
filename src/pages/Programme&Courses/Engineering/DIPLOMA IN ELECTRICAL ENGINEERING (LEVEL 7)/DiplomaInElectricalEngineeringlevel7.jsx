import React from 'react'
import HeroSectionImg from './../../../../assets/pages/Engineering/ElectricalEngineering.jpg'
import CourseDetails from './CourseDetails'
import LanguageRequirementsTable from './LanguageRequirementTable'
import CourseContent from './CourseContent'
import Sidebar from './sidebar'
import graph from './../../../../assets/pages/NZDiplomaInITTechnicalSupport/kV310pL.png'

const DiplomaInElectricalEngineeringlevel7 = () => {
    return (
        <>
            <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${HeroSectionImg})` }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hero-content text-center lg:text-left py-24 lg:flex lg:items-center relative">
                        {/* Add a relative positioning to this div */}
                        <div className="relative z-10">
                            <h1 className="text-3xl font-bold text-white sm:text-4xl">Diploma In Electrical Engineering (Level 7)</h1>
                            <p className="mt-3 max-w-md mx-auto text-lg text-blue-200 sm:text-xl lg:mx-0">
                                Preparing graduates for roles in designing, implementing, and maintaining electrical systems and infrastructure                            </p>
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



            {/*jahdjhasjdnjasdnjasndjasdjasdnjsad */}

            <div className="mx-auto max-w-7xl flex flex-col lg:flex-row">
                {/* Left Content */}
                <div className="lg:flex-1 bg-white p-4 lg:p-8">
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">Overview</h2>
                        <p className="text-sm lg:text-base">
                            ICA’s diploma in electrical engineering(level 7) is designed for those who want to work with future technology and current market trends in New Zealand. A student who is keen on solving electrical or electronic engineering problems, wants to design systems and administrate networks can join ICA's “Diploma in Electrical Engineering” (DEE).

                            The DEE consists of two specializations: 1) Telecommunication and networking, 2) Electronics and embedded systems along with compulsory courses in electrical engineering including mathematics, engineering management and a final project.                        </p>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-2xl lg:text-3xl font-bold text-black">Course Details</h2>

                    </div>


                    {/* You may adjust the styles as needed */}
                    <CourseDetails />
                    <div className="mt-4">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">Entry Requirements
                        </h2>
                        <p className="text-sm lg:text-base font-bold underline">Domestic Students

                        </p>
                        <ul className="list-disc pl-6 py-4">
                            <li>Applicants must have a Diploma in Electrical Engineering Level 5 OR
                            </li>
                            <li>Equivalent knowledge and skills such as:
                                <ul className="list-disc pl-6 py-4">
                                    <li>First year of the New Zealand Diploma in Engineering (Electrical) (Level 6) OR

                                    </li>
                                    <li>First year of the University degree in electrical or equivalent

                                    </li>
                                    <li>National Certificate in electrical (level 4) + Suitable experience. The applicant shall be required to formally apply for the assessments of prior learning; and complete the assessments of prior learning if approved to do so by the DEE programme leader.</li>
                                    <li>International Baccalaureate Diploma with 24 points minimum and 2 years relevant work experience
                                    </li>
                                </ul>
                            </li>

                        </ul>

                        <p className="text-sm lg:text-base font-bold underline">International Students



                        </p>
                        <ul className="list-disc pl-6 py-4">
                            <li>Applicants must have a Diploma in Electrical Engineering Level 5 OR

                            </li>
                            <li>Equivalent knowledge and skills, such as:

                                <ul className="list-disc pl-6 py-4">
                                    <li>First year of the New Zealand Diploma in Engineering (Electrical) (Level 6) OR

                                    </li>
                                    <li>First year of the University degree in electrical or equivalent

                                    </li>
                                    <li>National Certificate in electrical (level 4) + Suitable experience. The applicant shall be required to formally apply for the assessments of prior learning; and complete the assessments of prior learning if approved to do so by the DEE programme leader.</li>
                                    <li>International Baccalaureate Diploma with 24 points minimum and 2 years relevant work experience
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Applicants must meet the minimum academic entry requirements and have achieved an overall band score (Academic) of 6.0 IELTS, (writing, speaking, reading and listening bands no less than 5.5) or equivalent (see table 1 below for the IELTS equivalent options). Over and above existing English proficiency may be determined if the medium of instructions in primary and secondary studies was in English OR if the applicant has studied for three years full time in New Zealand, USA, Canada, Australia, and the UK.
                            </li>

                        </ul>

                    </div>


                    <div className='py-6'>
                        <p className="font-bold underline">English Language Requirements
                        </p>
                    </div>
                    <LanguageRequirementsTable />

                    <div className='py-6'>
                        <p className="font-bold underline">Lab Facilities</p>
                        <a href="#" className='underline'> Electronic and Real Time Embedded System Lab</a>
                    </div>
                    <div className='py-6'>
                        <p className="font-bold underline pb-4">Electrical Engineering Society
                        </p>
                        <p>Visit our Facebook page https://www.facebook.com/ICAElectricalSociety

                        </p>
                        <p>View our society Click here


                        </p>
                        <p>Become member (For ICA Engineering students only) Click here


                        </p>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">Aim of the Course
                        </h2>
                        <p>This programme aims to provide an advanced programme of study covering core knowledge and skills in electrical and electronics engineering, and two specialist strands: Telecommunications and networking, and Electronics and embedded systems.

                            The programme has been designed for students who have already completed a course of study in electrical engineering at Level 5, or who have equivalent skills and knowledge, and wish to develop more specialist knowledge and skills.</p>


                    </div>

                    <div className="mt-4">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">Contents

                        </h2>

                        <div className='py-6'>
                            <CourseContent />
                        </div>

                    </div>


                    <div className="mt-8">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">Career Opportunities


                        </h2>

                        <ul className="list-disc pl-6 py-4">
                            <li>IT Technical Support (ANZSCO Number: 313199)
                            </li>
                            <li>IT Help Desk Support
                            </li>
                        </ul>
                        <p >This programme can lead to further study pathway either at a degree level qualification OR a higher level diploma programme.


                        </p>
                    </div>

                    <div className='py-6'>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">Income and Employment Prospects


                        </h2>    <p className="font-bold underline pb-4">IFor ICT Architects and Administrators:



                        </p>
                        <img src={graph} alt="" srcset="" />
                        {/* <p className='py-6'>Source: </p>  <a href="https://occupationoutlook.mbie.govt.nz/manufacturing-and-technology/ict-architects-and-administrators/">https://occupationoutlook.mbie.govt.nz/manufacturing-and-technology/ict-architects-and-administrators/</a> */}

                    </div>
                    <div className='py-6'>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">Educational Pathway
                        </h2>    <p className="font-bold underline pb-4">This programme can lead to further study pathway;          </p>
                        <ul className="list-disc pl-6 py-4">
                            <li>New Zealand Diploma in Systems Administration (Level 6)
                            </li>
                            <li>Bachelor of Computer and Information Sciences (BCIS) - AUT (https://www.aut.ac.nz/)
                            </li> <li>Industry specific training and certification

                            </li>
                        </ul>

                    </div>   <div className='py-6'>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">Intake Duration

                        </h2>
                        <div className="mt-8 flex justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lime-700 md:py-4 md:text-lg md:px-10">
                                    Enroll Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <Sidebar />
            </div>
        </>
    )
}

export default DiplomaInElectricalEngineeringlevel7