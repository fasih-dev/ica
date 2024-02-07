import React from 'react'
import academicsupportservice from './../../../assets/media/academicsupportservice.jpg'

const AdministrationSupportServices = () => {
    return (

        <>

            <div className='max-w-7xl mx-auto' >
                <h1 className="text-4xl font-bold text-center mt-20 pb-10"> <span className="font-serif italic">Academic Support Service</span>
                </h1>
                <p className='text-center px-8 md:px-12 lg:px-32'>

                    Our administration services work closely with the marketing team. They engage with students regarding: provision of information; admissions, enrolments and withdrawals; records and student files; compliance and statutory matters, such as attendance, insurance, immigration, identification cards and health and safety; student feedback; periodic interviews; and student complaints.
                </p>
                <div className='my-20'>
                    <img src={academicsupportservice} alt="" className='mx-auto' />
                </div>
            </div>
        </>



    )
}

export default AdministrationSupportServices