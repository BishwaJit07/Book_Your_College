import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
    const college = useLoaderData();
console.log(college);
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={college.image_url} alt="CollegeImage" className='rounded-2xl h-96 w-4/5 md:w-3/5 '/>
            <h2 className='text-3xl font-semibold border-4 border-double shadow-xl border-blue-600 p-2 m-2'>{college.college_name}</h2>
            <div className='text-center bg-gray-300 m-2 rounded-xl p-4'>
            <p ><span className='text-xl font-semibold '>Admisiion Process:</span>{college.admission_process}</p>
            <p><span className='text-xl font-semibold '>Sports:</span>  <ol>
        {college.sports_categories.map((sport, index) => (
          <li key={index} className='badge  badge-outline text-red-500'>{sport}</li>
        ))}
      </ol> </p>
            <p>{college.admission_process}</p>
            </div>
        </div>
    );
};

export default CollegeDetails;