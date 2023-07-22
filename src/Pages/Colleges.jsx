import Input from 'postcss/lib/input';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UseColleges from '../Hooks/UseColleges';

const Colleges = () => {
    const [colleges] = UseColleges();

    console.log(colleges);

    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (e) => {
      const searchTerm = e.target.value;
      setSearchTerm(searchTerm);
    };
    console.log(searchTerm);
    return (
        <>
              <div className="p-4 flex justify-center items-center ">
  <input type="text" placeholder="Search college" className=" text-center px-4 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring focus:border-blue-300" value={searchTerm} onChange={handleSearch}/>
</div>

        <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
         
        {colleges
   .filter((college) => college && college.college_name && college.college_name.toLowerCase().includes(searchTerm.toLowerCase()))
.map((college) => ( 
                  
                    <div key={college._id} className="card w-96 glass shadow-xl  ">
  <figure className="px-10 pt-10">
    <img src={college.image_url}  alt="CollegeIMG" className="rounded-xl w-80 h-80" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{college.college_name}</h2>
    <p>Addmission:{college.admission_dates}</p>
    <p>Events:{
                college.events.map((event, index) => (
                 
                    <ul key={index}>
                        <li>   {event.name}
                        </li></ul>
                ))
            }</p>
            <p>Recharge History: {college.research_history}</p>
    <div className="card-actions">
      <Link to={`/colleges/${college._id}`}  className="btn bg-blue-500 text-white">Details</Link>
    </div>
  </div>
</div>
                ))
            }
        
        </div>
        </>
    );
};

export default Colleges;