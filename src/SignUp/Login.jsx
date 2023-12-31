import { getAuth } from 'firebase/auth';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import GoogleLogin from '../Shared/Googlelogin';

const Login = () => {

  const navigate= useNavigate();
  const location = useLocation(); 
  const from = location.state?.from?.pathname || '/'
   const logIn = getAuth()

  const handleLogin =(e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.pass.value;
    console.log(email,password);

    logIn(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      Swal.fire(
        'Good job!',
        'Login Done!',
        'success'
      )
      navigate(from,{replace:true});
    })
}

  return (
    <div>
            <div className="hero min-h-screen  ">

         
<form onSubmit={handleLogin} className="card-body bg-gray-500 bg-cover bg-center w-2/4"  style={{ backgroundImage: "url('https://i.ibb.co/DwGTdKM/what-makes-us-incomparable.png')" }}>
     <div className="form-control ">
     <h2 className='text-2xl font-semibold text-white text-center bg-blue-600 rounded-b-xl'>Please LOGIN</h2>
       <label className="label">
         <span className="label-text text-white">Email</span>
       </label>
       <input type="email" placeholder="email" 
       name='email'
       className="input input-bordered" />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text text-white">Password</span>
       </label>
       <input type="password" placeholder="password" 
       name='pass'
       className="input input-bordered" />
     
     </div>

    <div>
    <GoogleLogin/>
    </div>
     <div className="form-control ">
     <input className="btn  text-white bg-pink-700 hover:bg-blue-600" type="submit" value="Login" />
       <label className="label">
         <Link to="/signin" className="label-text-alt link link-hover text-white">Don't Have Account? SignUp</Link>
       </label>
     </div>
   </form>
   </div>
    </div>
  );
};

export default Login;