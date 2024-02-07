
import React from 'react'
import CareerSupportImg from './../../../assets/media/CareerSupport.jpg'
import Banner from './Banner'

const CareerSupport = () => {
    return (
        <div className="mx-auto max-w-7xl ">
            {/* Left Content */}
            <div>
                <h1 className="text-4xl font-bold text-center mt-20 pb-4"> <span className="font-serif italic"> Career Support
                </span>
                </h1>
                <div className='py-8 overflow-hidden'>
                    <img src={CareerSupportImg} alt="" className='mx-auto object-cover w-4/5 h-auto mb-[-20%]' />
                    <img src={Banner} alt="" srcset="" />
                </div>
                <div className='px-8 lg:px-2 md:px-12 '>
                    <p className='font-bold underline mt-16'>                    The career advisors of International College of Auckland will provide students with internship opportunities:                </p>
                    <ul className="list-disc pl-6 py-4">
                        <li>Students in professional courses can work 20 hours per week and can work full-time during the holidays.

                        </li>
                        <li>International College of Auckland provides temporary, part-time employment opportunities for current students.


                        </li>
                        <li>Help students revise resumes and cover letters.



                        </li>      <li>Provide advice on interview preparation and skills.



                        </li>
                    </ul>
                </div>
            </div>

            <div className='px-8 lg:px-2 md:px-12 '>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">Useful websites:

                </h2>
                <ul className="list-disc pl-6 py-4 mb-16">
                    <li>Seek is the largest job search website in New Zealand:http://www.seek.co.nz/


                    </li>
                    <li>Work and Income NZ is a website designed to provide jobs for people who comply with New Zealand’s employment policies: http://job-bank.workandincome.govt.nz/


                    </li>
                    <li>Trade Me the most popular website in New Zealand: http://www.trademe.co.nz/jobs




                    </li>
                </ul>
            </div>




        </div >)
}

export default CareerSupport