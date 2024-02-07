import React from 'react'
import AcademicCalendarTable from './TimeTableDetails'

const CoursesTimeTable = () => {
    return (
        <>
            <div className='max-w-7xl mx-auto' >
                <h1 className="text-4xl font-bold text-center mt-20"> <span className="font-serif italic">Time Table</span>
                </h1>

                <div className="container mx-auto my-8 p-8 bg-white rounded-lg">
                    <div className="max-w-7xl mx-auto">
                        <div className="py-5 ">
                            <h1 className="text-3xl font-bold mb-6 text-center">ICA Academic Calendar 2024 - IT and Engineering</h1>
                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-gray-300 bg-gray-100">
                                    <thead>
                                        <tr>
                                            <th className="border border-gray-300 p-3 bg-gray-200">Intake</th>
                                            <th className="border border-gray-300 p-3 bg-gray-200">Duration</th>
                                            <th className="border border-gray-300 p-3 bg-gray-200">Start Date</th>
                                            <th className="border border-gray-300 p-3 bg-gray-200">End Date</th>
                                            <th className="border border-gray-300 p-3 bg-gray-200">Breaks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {AcademicCalendarTable.map((entry, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                <td className="border border-gray-300 p-3">{entry.intake}</td>
                                                <td className="border border-gray-300 p-3">{entry.duration}</td>
                                                <td className="border border-gray-300 p-3">{entry.startDate}</td>
                                                <td className="border border-gray-300 p-3">{entry.endDate}</td>
                                                <td className="border border-gray-300 p-3">{entry.breaks}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div >
            </div>   </>
    )
}

export default CoursesTimeTable