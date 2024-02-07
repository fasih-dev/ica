import React from 'react';
import ICASAImg from './../../../assets/media/ICASA.jpg'

const ICASA = () => {
    return (
        <div className="mx-auto max-w-7xl ">
            <div>
                <h1 className="text-4xl font-bold text-center mt-20 pb-4"> <span className="font-serif italic"> Introduction to ICASA
                </span>
                </h1>
                <div className='mb-10 pt-6 overflow-hidden'>
                    <img src={ICASAImg} alt="" className='mx-auto object-cover w-4/5 h-auto mb-[-20%] border border-black' />
                </div>
                <div className='px-8 lg:px-2 md:px-12 '>
                    <p className="mb-4">
                        <strong>Name:</strong> International College of Auckland Students’ Association (ICASA)
                    </p>
                    <p className="mb-8">
                        <strong>Objects:</strong> The fundamental objective of ICASA is to remain a student-owned and governed organization that represents the student body. ICASA aims to organize and coordinate services conducive to the welfare and well-being of students at ICA, enriching the student experience and culture by providing representation services, facilities, and organizing phenomenal events.
                    </p>
                </div>
            </div>

            <div className='px-8 lg:px-2 md:px-12 '>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">
                    Membership
                </h2>
                <p className="mb-4">
                    Any student of ICA has membership rights.
                </p>
                <p className="mb-8">
                    Any student waiving rights to membership may at any time re-assume membership rights by application to the Executive.
                </p>
                <p className="mb-4">
                    Membership of the association shall cease in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-8">
                    <li>Death of a member</li>
                    <li>Resignation, in the case of any member</li>
                </ul>
            </div>

            {/* Annual General Meeting */}
            <div className='px-8 lg:px-2 md:px-12 '>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">
                    Annual General Meeting
                </h2>
                <p className="mb-4">
                    There shall be an Annual General Meeting each year, held as soon as practicable after the preparation and audit of the previous year’s accounts and no later than 31 May.
                </p>
                <p className="mb-4">
                    Notice of the Annual General Meeting shall be posted on the Noticeboard at least 14 days before such meeting, stating the time, date, and place thereof.
                </p>
                <p className="mb-4">
                    The Annual General Meeting shall consider:
                </p>
                <ul className="list-disc pl-6 mb-8">
                    <li>The adoption of the annual audited accounts of the association.</li>
                    <li>The annual report of the President of the preceding year.</li>
                    <li>Appointment of an Association Auditor.</li>
                </ul>
            </div>

            {/* The Officer and Executive */}
            <div className='px-8 lg:px-2 md:px-12 '>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">
                    The Officer and Executive
                </h2>
                <p className="mb-4">
                    The officers of the Association shall be the President, the Vice Presidents, and the Finance Officer.
                </p>
                <p className="mb-4">
                    The Executive of the Association shall consist of:
                </p>
                <ul className="list-disc pl-6 mb-8">
                    <li>President</li>
                    <li>Vice Presidents</li>
                    <li>Finance Officers</li>
                    <li>Students Representatives – IT</li>
                    <li>Students Representatives – Business</li>
                    <li>Students Representatives – Engineering</li>
                    <li>Students Representatives - English</li>
                </ul>

                {/* Officers Responsibilities */}
                <div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 text-black">
                        3.2 Officers Responsibilities
                    </h3>

                    {/* President */}
                    <p className="mb-4">
                        <strong>3.2.1 President:</strong> The President shall lead and represent the Association in fulfilling its core objects and achieving its goals of advancing the academic, educational, welfare, social, cultural, and sporting interests of its members.
                    </p>

                    {/* Vice Presidents */}
                    <p className="mb-4">
                        <strong>3.2.2 Vice Presidents:</strong> The Vice-Presidents of the Association shall:
                    </p>
                    <ul className="list-disc pl-6 mb-8">
                        <li>Assist and support the President in carrying out the duties and functions of the office of President.</li>
                        <li>Act as President and assume all the powers and duties of President in the absence of the President.</li>
                        <li>Be responsible for the specified jobs and duties.</li>
                    </ul>

                    {/* Finance Officer */}
                    <p className="mb-8">
                        <strong>3.2.3 Finance Officer:</strong> The Finance Officer shall be responsible for co-ordination and oversight of the legislative requirements, financial performance, commercial interests, and development, implementation, and monitoring of the strategic and commercial goals of the Association.
                    </p>
                </div>
            </div>

            {/* Finance */}
            <div className='mb-16 px-8 lg:px-2 md:px-12 '>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black">
                    Finance
                </h2>
                <p className="mb-4">
                    <strong>4.1 Fees:</strong> There is no joining fee for the first year. ICASA reserves the right to determine the joining fee from the second year.
                </p>
                <p className="mb-8">
                    <strong>4.2</strong> Any income, benefit, or advantages of any kind whatsoever shall be applied to the charitable purpose and objects of the Association.
                </p>
            </div>

        </div >
    );
};

export default ICASA;
