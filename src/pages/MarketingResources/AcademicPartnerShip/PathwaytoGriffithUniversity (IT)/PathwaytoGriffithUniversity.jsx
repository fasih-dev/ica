import React from 'react'

const PathwaytoGriffithUniversity = () => {
    return (
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row">
            <div className="lg:w-2/3 bg-white p-4 lg:p-8">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black text-center">
                    Griffith University Articulation
                </h2>
                <p>
                    International College of Auckland (ICA) has developed an articulation arrangement with Griffith University Australia for higher studies after completing New Zealand Diploma in IT Technical Support (NZDITTS level 5) and New Zealand Diploma in Systems Administration (NZDSA level 6) from ICA.
                </p>
                <p>
                    According to this arrangement:
                </p>
                <ul className="list-disc pl-6">
                    <li>
                        After completion of NZDITTS level 5 one year studies from ICA, the student will get 80CP of credit transfer towards the Bachelor of Information Technology, Gold Coast and Nathan Campus (Australia).
                    </li>
                    <li>
                        After completion of NZDITTS level 5 + NZDSA level 6 two years studies from ICA, the student will get 140CP of credits transfer towards the Bachelor of Information Technology, Gold Coast and Nathan Campus (Australia).
                    </li>
                </ul>
                <p className="font-bold mt-4">
                    Note: The course code for Bachelor of Information Technology is 1538/1539 in Gold Coast Campus and Nathan campus.
                </p>
                <p className="mt-4">
                    Pathway Letter from Griffith University
                </p>
                <p>
                    More information on the pathway programme at Griffith University is available at <a href="Griffith University Pathway Link">Bachelor of Information Technology</a>.
                </p>
            </div>

            {/* Right Content (30%) */}
            <div className="lg:w-1/3 bg-gray-100 p-4">
                {/* Add any additional content for the right section if needed */}
            </div>
        </div>

    )
}

export default PathwaytoGriffithUniversity