import React from 'react'
import Facility from './Facilities'
import AcademicSettlementSupportImg from './../../../assets/media/AcademicSettlementSupport.jpg'

const AcademicSettlementSupport = () => {
    return (






        <div className="mx-auto max-w-7xl ">
            {/* Left Content */}
            <div className=" bg-white pb-4 lg:pb-8">
                <div>

                    <h1 className="text-4xl font-bold text-center mt-20 pb-10"> <span className="font-serif italic">Academic Support Service</span>
                    </h1>
                    <p className='text-center px-8 md:px-12 lg:px-32'>
                        International College of Auckland “ICA” maintains engagement with its students at two levels – academic and non-academic. At the academic level, the students are mainly involved and engaged with the programme delivery, learning and assessments. All other engagements are at the non-academic level, and settlement support is the key function with regards to the ICA non-academic engagement with the students.
                        ICA Academic Support Services department has a broad function. Key elements of ICA Student Services are providing the first contact point for both the prospective and existing ICA students; providing information about study skills; admissions, enrolments, and withdrawals; maintenance of student files; administration; student support services; student orientation; and student placement services. The student Placement Services Department is distinct however, autonomous service for students nearing graduation.
                    </p>

                </div>
                <div>
                    <div className='py-8 overflow-hidden'>
                        <img src={AcademicSettlementSupportImg} alt="" className='mx-auto object-cover w-4/5 h-auto mb-[-20%]' />
                    </div>

                    <p className="font-bold underline mt-12 text-center">The Academic and Settlement Support services cover:

                    </p>
                    <Facility />

                </div>





            </div>

        </div >)
}
export default AcademicSettlementSupport