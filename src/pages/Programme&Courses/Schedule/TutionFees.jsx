import React from 'react'
import tutionfee from './../../../assets/media/tutionfee.png'

const TutionFees = () => {
    return (
        <>

            <div className='max-w-7xl mx-auto' >
                <h1 className="text-4xl font-bold text-center mt-20"> <span className="font-serif italic">Tution Fee</span>
                </h1>
                <div className='my-20 '>
                    <img src={tutionfee} alt="" srcset="" className='mx-auto' />
                </div>
            </div>

        </>)
}

export default TutionFees