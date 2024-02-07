import React from 'react'
import care from './../../../assets/media/care.jpg'

const EducationPastoralCare = () => {
    return (
        <div className="mx-auto max-w-7xl">
            <div>
                <h1 className="text-4xl font-bold text-center mt-20 pb-10"> <span className="font-serif italic">The Education (Pastoral Care of International Students) Code of Practice 2021</span>
                </h1>

                <p className='text-center px-8 md:px-12 lg:px-32'>
                    International College of Auckland has agreed to observe and be bound by the Code of Practice for Pastoral Care of International Students. Copies of the code are available on request from ICA or from the NZQA website. The Code is also available in different languages.
                </p>
            </div>
            <div className='py-8 overflow-hidden'>
                <img src={care} alt="" className='mx-auto object-cover w-4/5 h-auto mb-[-20%]' />
            </div>
            <div className='text-center py-12 px-8 lg:px-2 md:px-12 '>
                <p className="font-bold  ">For more information, please refer to:

                </p>
                <a href="">the Education (Pastoral Care of International Students) Code Of Practice 2021

                </a>

            </div>

            <div className='px-8 lg:px-2 md:px-12 '>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black ">Immigration Matters



                </h2>
                <p >
                    All international students are required to obtain a valid visa to be able to enter and study in New Zealand. It is the responsibility of the student to maintain a valid student permit through the duration of their study programme at ICA.

                    Please ensure that a transit visa is held for stop-overs in countries on the way to New Zealand when required. Passengers without the necessary visa may be prevented from continuing their journey.

                    Full details of visa requirements, advice on rights to employment in New Zealand while studying, and reporting requirements are available through the New Zealand Immigration website.

                </p>
            </div>

            <div className='px-8 lg:px-2 md:px-12 '>
                <h2 className="text-2xl lg:text-3xl font-bold mt-8 text-black ">Accident Insurance




                </h2>
                <p >
                    The Accident Compensation Corporation (ACC) provides accident insurance for all New Zealand citizens, residents, and temporary visitors to New Zealand. However, students may still be liable for all other medical and related cost. For more information, please visit the ACC website.



                </p>
            </div>  <div className='mt-8 mb-16 px-8 lg:px-2 md:px-12 '>
                <h2 className="text-2xl lg:text-3xl font-bold  text-black">Medical and Travel Insurance





                </h2>
                <p >
                    Medical and Travel Insurance is compulsory for international students studying in New Zealand. The insurance needs to be in place from the time the students leave their home country to their return home.




                </p>
            </div>

            {/* Right Sidebar */}
        </div >)
}

export default EducationPastoralCare