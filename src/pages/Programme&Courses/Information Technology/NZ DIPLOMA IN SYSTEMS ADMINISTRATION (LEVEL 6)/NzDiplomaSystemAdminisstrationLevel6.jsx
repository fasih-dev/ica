import React from 'react'
import image1 from '../../../../assets/CarousalImg/img1.jpg';
import Sidebar from './sidebar';
import LanguageRequirementsTable from './LanguageRequirementTable';
import graph from './../../../../assets/pages/NZDiplomaInITTechnicalSupport/kV310pL.png'
import CourseDetails from './CourseContent';
import HeroSectionImg from './../../../../assets/IT.jpg'

const NzDiplomaSystemAdminisstrationLevel6 = () => {
    return (
        <>
            <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${HeroSectionImg})` }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hero-content text-center lg:text-left py-24 lg:flex lg:items-center relative">
                        {/* Add a relative positioning to this div */}
                        <div className="relative z-10">
                            <h1 className="text-3xl font-bold text-white sm:text-4xl">NZ Diploma In Systems Administration (LEVEL 6)</h1>
                            <p className="mt-3 max-w-md mx-auto text-lg text-blue-200 sm:text-xl lg:mx-0">
                                Provides advanced training in managing and maintaining computer systems, preparing graduates                     </p>
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
                            The programme aims to develop learners’ professional knowledge and technical skills in systems administration. The learners will be able to analyse organisational requirements to plan and implement a range of technologies for systems and network services. The learners will be capable of planning, managing and implementing directory services, server-based virtualisation infrastructure, automated system and application software deployment techniques while applying IT service management and change management processes and procedures to comply with organisational requirements. The learners will also demonstrate professionalism, and communication, information design, personal, interpersonal and project management skills to an IT related project to analyse and solve problems.

                            Upon completion, the graduates will be capable of carrying out systems administration and providing related advice and support, using skills that will be internationally relevant. They will also be able to operate within an organisation with appropriate professional standards and practice, both independently and as part of a team.
                        </p>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">Duration</h2>
                        <p className="text-sm lg:text-base">
                            One Academic Year (inclusive of holidays)

                        </p>
                    </div>


                    {/* You may adjust the styles as needed */}
                    {/* <CourseDetails /> */}
                    <div className="mt-4">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">Entry Requirements
                        </h2>
                        <p >Learners enrolling to this programme must hold the New Zealand Diploma in Information Technology Technical Support (Level 5) and/or equivalent qualification and/or appropriate knowledge, skills and experience in the IT sector.</p>
                        <div className='py-6'>
                            <p className="font-bold underline">English Language Requirements
                            </p>
                            <LanguageRequirementsTable />

                        </div>


                    </div>
                    <div className="mt-4">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">Contents
                        </h2>
                        <div className='py-6'>
                            <p className="font-bold underline">The programme consists of eight (8) papers:


                            </p>
                            <CourseDetails />
                        </div>


                    </div>




                    <div className="mt-4">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">Career Opportunities

                        </h2>
                        <p>Graduates will gain skills and knowledge to gain entry level roles:

                        </p>
                        <ul className="list-disc pl-6 py-4 ">
                            <li>IT Technician (ANZSCO Number: 313199)

                            </li>
                            <li>Help Desk Analyst
                            </li>
                            <li>Tier 1 and 2 Desktop Support
                            </li>
                            <li>Systems Administrator
                            </li>
                            <li>Applications Support
                            </li>
                            <p>Graduates with background can get into advanced roles:



                            </p>
                            <li>Senior System Administrator (ANZSCO Number: 262113)


                            </li>
                            <li>Application Support Analyst

                            </li>

                        </ul>

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
                            <li>Bachelors in IT from Griffith University - Australia
                            </li>
                            <li>Industry specific training and certification

                            </li> <li>Degree level qualifications


                            </li>
                        </ul>

                    </div>   <div className='py-6'>
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
                {/* <img src={side1} alt="" srcset="" /> */}
            </div>
        </>)
}

export default NzDiplomaSystemAdminisstrationLevel6