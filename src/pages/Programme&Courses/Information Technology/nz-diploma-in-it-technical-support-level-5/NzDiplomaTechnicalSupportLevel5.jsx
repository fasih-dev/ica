import React from 'react'
import image1 from '../../../../assets/CarousalImg/img1.jpg';
import CourseDetails from './CourseDetails';
import Sidebar from './sidebar';
import LanguageRequirementsTable from './LanguageRequirementTable';
import CourseContent from './CourseContent';
import graph from './../../../../assets/pages/NZDiplomaInITTechnicalSupport/kV310pL.png'
import DiplomeInITTechnicalSupport from './../../../../assets/pages/NZDiplomaInITTechnicalSupport/DiplomeInITTechnicalSupport.jpg'

const NzDiplomaTechnicalSupportLevel5 = () => {
    return (
        <>
            <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${DiplomeInITTechnicalSupport})` }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hero-content text-center lg:text-left py-24 lg:flex lg:items-center relative">
                        {/* Add a relative positioning to this div */}
                        <div className="relative z-10">
                            <h1 className="text-3xl font-bold text-white sm:text-4xl">NZ Diploma In IT Technical Support (Level 5)</h1>
                            <p className="mt-3 max-w-md mx-auto text-lg text-blue-200 sm:text-xl lg:mx-0">
                                IT support, covering troubleshooting, network administration, and customer service.                            </p>
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
                            This programme will prepare learners with the necessary knowledge and skills for a career in the Information Technology (IT) technical support. The learners will acquire broad vocational knowledge and practical skills, with an in-depth understanding of core and technical IT concepts. Upon completion, the graduates will be able to monitor and maintain the computer systems and networks within an organization in a technical support role. Graduates will have an awareness of the IT environment, appreciate the needs of users, and be able to provide IT technical support. They will also be able to demonstrate appropriate professional ethics and practices independently or as a part of a team.
                        </p>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-2xl lg:text-3xl font-bold text-black">Course Details</h2>

                    </div>


                    {/* You may adjust the styles as needed */}
                    <CourseDetails />
                    <div className="mt-4">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">Entry Requirements
                        </h2>
                        <p className="text-sm lg:text-base font-bold underline">General Entry Requirements</p>
                        <ul className="list-disc pl-6 py-4">
                            <li>48 credits at NCEA Level 2, including 12 credits in English or Maori; OR</li>
                            <li>The New Zealand Certificate in Information Technology Essentials (Level 4); OR</li>
                            <li>A relevant qualification at NZQF Level 3 or above; OR</li>
                            <li>Equivalent.</li>
                        </ul>
                        <p className="mt-4">
                            An interview process will be available to determine whether any specific support is required and to ensure applicants are well informed about the programme.
                        </p>
                    </div>
                    <div className='py-6'>
                        <p className="font-bold underline">Alternative Entry Requirements</p>
                        <ul className="list-disc pl-6 py-4">
                            <li>Candidates under 20 years old who do not meet the entry requirements but can demonstrate an equivalent knowledge and skills through other educational attainment and/or work/life experience may be eligible for provisional entry at the discretion of the Head of Department or a designated nominee.</li>
                            <li>Candidates aged over 20 years old who do not meet the entry requirement but whose skills, education, or work experience indicate that they have an equivalent knowledge and skills may be eligible for special admission at the discretion of the Head of Department or a designated nominee.</li>
                        </ul>
                    </div>

                    <div className='py-6'>
                        <p className="font-bold underline">English Language Requirements
                        </p>
                    </div>
                    <LanguageRequirementsTable />
                    <div className='py-6'>
                        <p className="font-bold underline pb-4">Other Requirements
                        </p>
                        <p>Students are required by the programme to have a computer device (i.e., laptop/desktop) that have internet access and a web browser with a a minimum screen size of atleast 10 inches. Should you require more information regarding the device specifications, please kindly contact marketing@ica.ac.nz or talk to the Head of Department
                        </p>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">Aim of the Course
                        </h2>
                        <p>The program aims to outcome graduates who are ready to be launched in the global and New Zealand’s information technology industry. The graduates will have the following technical and core IT skills:</p>
                        <ul className="list-disc pl-6 py-4 ">
                            <li>Select, install and configure IT hardware and systems software to meet organisational requirements.
                            </li>
                            <li>Apply a broad operational knowledge of networking, and associated services and technologies to meet typical organisational requirements.
                            </li>
                            <li>Configure and administer systems and applications to meet typical organisational IT support requirements.
                            </li>
                            <li>Apply a broad operational knowledge of database administration to meet typical organisational data storage and retrieval requirements.
                            </li>
                            <li>Troubleshoot and resolve a range of common system problems using appropriate tools and procedures.

                            </li>
                            <li>Identify common issues related to IT security and apply a range of solutions.

                            </li>
                            <li>Demonstrate an operational knowledge and understanding of IT service management to meet typical organisational customer service requirements.

                            </li>
                            <li>Apply the fundamentals of information systems concepts and practice to support and enhance organisational processes and systems.

                            </li>
                            <li>Apply the fundamentals of interaction design concepts and practice to enhance interface design.

                            </li>
                            <li>Apply the principles of software development to create simple working applications.

                            </li>
                            <li>Apply professional, legal, and ethical principles and practices in a socially responsible manner as an emerging IT professional.

                            </li>
                        </ul>

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

                        <p >Graduates are prepared for employment at an entry level in:

                        </p>
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

export default NzDiplomaTechnicalSupportLevel5