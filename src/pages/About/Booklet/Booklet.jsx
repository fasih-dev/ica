import React from 'react'
import bookletpdf from './../../../assets/media/d57a1da9274d2603169f263ffc85a962.pdf'

const Booklet = () => {
    return (
        <div className='text-center py-20'>
            <a href={bookletpdf} className='underline text-lime-700' rel="noopener noreferrer">Click Here to download booklet</a>
        </div>
    )
}

export default Booklet