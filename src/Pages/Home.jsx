import React from 'react';
import Colleges from './HomeComponent/Colleges';
import Research from './HomeComponent/Research';
import Review from './HomeComponent/Review';
import SwiperCarousel from './HomeComponent/SwiperCarousel';


const Home = () => {
    return (
        <div>
            <Colleges/>
            <SwiperCarousel/>
            <Research/>
            <Review/>
        </div>
    );
};

export default Home;