import React from 'react';
import { Link } from 'react-router-dom';
import UseColleges from '../Hooks/UseColleges';

const AllColleges = () => {
    const [colleges] = UseColleges();

    return (
        <div>
            

        <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
         
        {colleges.map((college) => ( 
                  
<div key={college._id} className="card  glass shadow-xl bg-gradient-to-br from-blue-400 to-blue-700 rounded-lg p-4">
  <figure className="px-10 pt-10">
    <img src={college.image_url} alt="CollegeIMG" className="rounded-xl w-80 h-80 border-4 border-white shadow-lg" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-4xl font-bold text-white">{college.college_name}</h2>
    <p className="text-white text-lg mt-2">Admission: {college.admission_dates}</p>
    <div className="text-yellow-300 font-semibold mt-3">Events:
      {college.events.map((event, index) => (
        <ul key={index}>
          <li>{event.name}</li>
        </ul>
      ))}
    </div>
    <p className="text-white mt-3">Recharge History: {college.research_history}</p>
    <div className="card-actions mt-5">
      <Link to={`/colleges/${college._id}`} className="btn bg-pink-600 hover:bg-pink-800 text-white px-4 py-2 rounded-md">Details</Link>
    </div>
  </div>
</div>


                ))
            }
        
        </div>
        </div>
    );
};

export default AllColleges;