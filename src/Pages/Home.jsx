import React from 'react';
import Colleges from './HomeComponent/Colleges';
import Research from './HomeComponent/Research';
import Review from './HomeComponent/Review';
import SwiperCarousel from './HomeComponent/SwiperCarousel';


const Home = () => {
    return (
        <div>
            <Colleges/>
            <h3 className='text-center bg-cyan-700 rounded-b-full m-4 p-2 text-white font-semibold text-xl'>Graduaton Gallery</h3>
            <SwiperCarousel/>
            <h3 className='text-center bg-cyan-700 rounded-b-full m-4 p-2 text-white font-semibold text-xl'>Research Gallery</h3>
            <Research/>
            <h3 className='text-center bg-cyan-700 rounded-b-full m-4 p-2 text-white font-semibold text-xl'>College Review</h3>
            <Review/>
        </div>
    );
};

export default Home;