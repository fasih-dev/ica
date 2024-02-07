import React from 'react';
import intakeImg from '../../../assets/pages/Intake/Intake_2023_and_2024.png';

const Intake = () => {
    return (
        <>
            <div className='max-w-7xl mx-auto' >
                <h1 className="text-4xl font-bold text-center mt-20"> <span className="font-serif italic">Intake 2024-25</span>
                </h1>
                <div className='my-20'>
                    <img src={intakeImg} alt="" className='mx-auto' />
                </div>
            </div>
        </>
    );
};

export default Intake;
