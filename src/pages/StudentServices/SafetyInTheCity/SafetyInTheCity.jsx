import React from 'react';
import SafetyInTheCityImg from './../../../assets/media/SafetyInTheCity.jpg'

const SafetyInTheCity = () => {
    return (
        <div className="mx-auto max-w-7xl">
            <div>

                <h1 className="text-4xl font-bold text-center mt-20 pb-4"> <span className="font-serif italic">Safety in the City

                </span>
                </h1>

                <div className='py-8 overflow-hidden'>
                    <img src={SafetyInTheCityImg} alt="" className='mx-auto object-cover w-4/5 h-auto mb-[-20%]' />
                </div>
                <div className='py-4'>     <p className='text-center px-8 md:px-12 lg:px-32'>
                    Study Auckland celebrated Race Relations Day in New Zealand by launching a new series of informative safety videos for international students living in Auckland and across the country.

                </p>
                    <p className='text-center px-8 md:px-12 lg:px-32'>
                        Race Relations Commissioner, Dame Susan Devoy, welcomed the launch of the new videos at a special event on 20 March at Auckland Tourism, Events and Economic Development (ATEED).

                    </p>
                </div>

            </div>

            <div>     <p className='text-center px-8 md:px-12 lg:px-32'>
                The latest Safety in the City videos, which have been developed in collaboration with New Zealand Police, present 10 risk scenarios ranging from theft, personal safety, and sexual harassment to drugs and fraud. They highlight ways in which international students can protect themselves in each of these situations with the help of various support services.

            </p>
                <p className='text-center px-8 md:px-12 lg:px-32'>
                    The videos are accessible to international students and education providers via Study Auckland’s online toolkit, and a compilation can be seen on YouTube. The videos can be played together or by subject area of interest and are available with English and simplified Chinese subtitles.

                </p>
            </div>

            <div >     <p className='text-center px-8 md:px-12 lg:px-32'>
                Dame Susan Devoy welcomes this work by Study Auckland developed as part of New Zealand’s international student wellbeing strategy.

            </p>
                <p className='text-center px-8 md:px-12 lg:px-32'>
                    “The creation of these new videos will make an excellent contribution to the safety of international students in the city,” she said.

                </p>
            </div>

            <div className='py-6 mb-10'>     <p className='text-center px-8 md:px-12 lg:px-32'>
                Study Auckland’s Manager International Education, Henry Matthews, said helping international students have the best possible experience of Auckland is a key focus for Study Auckland.

            </p>
                <p className='text-center px-8 md:px-12 lg:px-32'>
                    Henry and the Study Auckland team are mindful of Auckland’s responsibility as hosts to more than 80,000 international students each year.

                </p>
                <p className='text-center px-8 md:px-12 lg:px-32'>
                    “International students are valuable ambassadors for Auckland, whether it’s contributing to the workforce, enhancing the cultural fabric of the city, or encouraging their friends and families to come for a visit or invest in the region,” Matthews said.

                </p>
            </div>


        </div>
    );
};

export default SafetyInTheCity;
