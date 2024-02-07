import React from 'react'
import StudentPlacementSupportImg from './../../../assets/media/StudentPlacementSupport.jpg'
import Facility from './Facilities'

const StudentPlacementServices = () => {
    return (


        <>


            <div className='max-w-7xl mx-auto' >
                <h1 className="text-4xl font-bold text-center mt-20 pb-10"> <span className="font-serif italic">Student Placement Services</span>
                </h1>
                <p className='text-center px-8 md:px-12 lg:px-32'>
                    Student placement services is a key sub-stream of the student services at ICA. Its main focus is to help students in achieving successful outcomes after their graduation from ICA. Student placement services emphasize that ICA are ready for further studies or they are work-ready.

                </p>
                <div className='py-8 overflow-hidden'>
                    <img src={StudentPlacementSupportImg} alt="" className='mx-auto object-cover w-4/5 h-auto mb-[-20%]' />
                </div>
                <div>
                    <p className="font-bold underline pt-10 text-center">Student placement services comprise key elements including:





                    </p>
                    <Facility />

                </div>
            </div>



        </>
    )
}

export default StudentPlacementServices

