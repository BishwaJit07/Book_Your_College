import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
    const college = useLoaderData();
console.log(college);
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={college.image_url} alt="CollegeImage" className='rounded-2xl h-96 w-4/5 md:w-3/5 '/>
            <h2 className='text-3xl font-semibold'>{college.college_name}</h2>
            <p>{college.admission_process}</p>
            <p>{college.sports_categories}</p>
            <p>{college.admission_process}</p>
        </div>
    );
};

export default CollegeDetails;