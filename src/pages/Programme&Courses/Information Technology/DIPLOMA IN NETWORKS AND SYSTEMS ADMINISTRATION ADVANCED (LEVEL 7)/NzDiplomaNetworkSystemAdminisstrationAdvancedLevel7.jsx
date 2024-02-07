import React from 'react'
import image1 from '../../../../assets/CarousalImg/img1.jpg';
import Sidebar from './sidebar';
import LanguageRequirementsTable from './LanguageRequirementTable';
import graph from './../../../../assets/pages/NZDiplomaInITTechnicalSupport/kV310pL.png'
import CourseDetails from './CourseContent';
import HeroSectionImg from './../../../../assets/media/advancedIT.jpg'

const NzDiplomaNetworkSystemAdminisstrationAdvancedLevel7 = () => {
    return (
        <>
            <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${HeroSectionImg})` }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hero-content text-center lg:text-left py-24 lg:flex lg:items-center relative">
                        {/* Add a relative positioning to this div */}
                        <div className="relative z-10">
                            <h1 className="text-3xl font-bold text-white sm:text-4xl " style={{ lineHeight: '1.5' }} >NZ Diploma In Network And Systems Administration Advanced (LEVEL 7)</h1>
                            <p className="mt-3 max-w-md mx-auto text-lg text-blue-200 sm:text-xl lg:mx-0" >
                                For  IT professionals                     </p>
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
                            The programme has been developed for students who already have a foundation of Information technology and wish to acquire more specialised knowledge and skills related to networks, systems and cloud technology in accordance with IT industry requirements.

                            This programme will also benefit individuals who are employed in the IT industry and would like to gain further credentials that will support to advance their career in the field of systems, networks and cloud technology administration.

                            Graduates of this programme will be able to demonstrate theoretical knowledge and specialised technical skills with depth in the field of systems and network administration by analysing and generating solutions to implement and maintain systems, networks and cloud based solutions to meet broadly defined organisational requirements.
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
                        <p >Applicants must meet the following criteria:

                        </p>

                        <ul className="list-disc pl-6 py-4 ">
                            <li>Successfully completed a Level 6 or equivalent qualification in information technology or similar discipline; OR


                            </li>
                            <li>Successfully completed a bachelor’s degree in any information technology relevant field; OR

                            </li>
                            <li>Evidence of equivalent practical, professional or educational experience e.g. Three or more year full time experience (relevant to ICT); OR
                            </li>
                            <li>Candidates aged over 20 years who do not meet the entry requirements but whose skills, education or work experience indicate that they have an equivalent knowledge and skills may be eligible for special admission at the discretion of the Head of the department or designated nominee.

                            </li>


                        </ul>
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
                            <p >The programme consists of two core and six elective papers of which students will need to select four to complete a qualification of 120 credits.




                            </p>
                            <CourseDetails />
                        </div>


                    </div>




                    <div className="mt-4">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">Career Opportunities

                        </h2>

                        <ul className="list-disc pl-6 py-4 ">
                            <li>Cloud Technology Support

                            </li>
                            <li>Network Administrator (ANZSCO Number: 263112)
                            </li>
                            <li>System Administrator
                            </li>
                            <li>IT Systems Support
                            </li>
                            <li>Systems Analyst (ANZSCO Number: 261112)
                            </li>

                            <li>IT Automation related role


                            </li>
                            <li>Junior Systems Engineer

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

export default NzDiplomaNetworkSystemAdminisstrationAdvancedLevel7