import React, { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import UseColleges from '../Hooks/UseColleges';

const Admission = () => {
  const [colleges] = UseColleges();
console.log(colleges);
const [selectedCollege, setSelectedCollege] = useState(null);

    const {user} = useAuth();
    console.log(user);
  // State to hold the form data
  const [formData, setFormData] = useState({
    candidateName: user?.displayName,
    subject: '',
    candidateEmail: user?.email,
    candidatePhone: '',
    address: '',
    dateOfBirth: '',
    image: user?.photoURL,
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to the server
    // or perform any necessary actions.
    console.log(formData);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className='flex justify-around'>
         <div>
      {colleges.map((college,index) => (
        <div key={index}>
          <ul>
            <li>
              <button onClick={() => setSelectedCollege(college)}> {college.college_name}</button>
             
            </li>
          </ul>
        </div>
        ))}
    </div>
    <div>
    {selectedCollege && (
        <div>
          <form onSubmit={handleSubmit} className='flex flex-col'>
            {/* Input fields for the selected college */}
            <input type="text" placeholder="Candidate Name" name="candidateName" value={formData.candidateName} onChange={handleChange} />
            <input type="text" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} />
            <input type="email" placeholder="Candidate Email" name="candidateEmail" value={formData.candidateEmail} onChange={handleChange} />
            <input type="tel" placeholder="Candidate Phone Number" name="candidatePhone" value={formData.candidatePhone} onChange={handleChange} />
            <input type="text" placeholder="Address" name="address" value={formData.address} onChange={handleChange} />
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
            <input type="file" onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })} />

            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
    </div>
  );
};

export default Admission;


// const Admission = () => {

//     const {user} = useAuth();
//     console.log(user);
//   // State to hold the form data
//   const [formData, setFormData] = useState({
//     candidateName: user?.displayName,
//     subject: '',
//     candidateEmail: user?.email,
//     candidatePhone: '',
//     address: '',
//     dateOfBirth: '',
//     image: user?.photoURL,
//   });

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can handle form submission here, e.g., send data to the server
//     // or perform any necessary actions.
//     console.log(formData);
//   };

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

  
//   return (
//     <div className='flex flex-col justify-center items-center text-center'>
//       <h2>Admission Form</h2>
//       <form onSubmit={handleSubmit} >
//         <div>
//           <label>Candidate Name:</label> 
//           <input type="text" name="candidateName"  className="input input-bordered" value={formData.candidateName} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Subject:</label>
//           <input type="text" name="subject"  className="input input-bordered" value={formData.subject} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Candidate Email:</label>
//           <input type="email" name="candidateEmail" value={formData.candidateEmail} onChange={handleChange}  className="input input-bordered" required />
//         </div>
//         <div>
//           <label>Candidate Phone:</label>
//           <input type="tel"  className="input input-bordered" name="candidatePhone" value={formData.candidatePhone} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Address:</label>
//           <textarea name="address" value={formData.address} onChange={handleChange}  className="input input-bordered" required />
//         </div>
//         <div>
//           <label>Date of Birth:</label>
//           <input type="date" name="dateOfBirth"  className="input input-bordered" value={formData.dateOfBirth} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Image:</label>
//           <input type="text"  className="input input-bordered" value={formData.image}  onChange={handleChange}/>
//         </div>
//         <div>
//           <button className='btn' type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

