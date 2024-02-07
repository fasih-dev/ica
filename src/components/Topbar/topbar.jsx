import React from 'react'
import MyPdf from '../../assets/media/09d07b6b8779a52ac770443b54fdbfae.pdf'

const topbar = () => {
    return (
        <>
            <div className="bg-lime-500 text-white p-3 ">
                <div className="container mx-auto flex justify-center space-x-4 items-center text-sm max-w-7xl">
                    <p>Engineering and Technology School with NZQA Confidence in Educational Performance and Self-Assessment capacity</p>
                    <a href={MyPdf} className='underline' rel="noopener noreferrer">Read More</a>
                </div>
            </div>
        </>
    )
}

export default topbar