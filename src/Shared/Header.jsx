import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidLogInCircle } from "react-icons/bi";
import useAuth from '../Hooks/useAuth';
const Header = () => {
  const { user } = useAuth();
  console.log(user);
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li> <Link to='/'>Home</Link></li>
        <li>
          <Link to='/colleges'>Colleges</Link>
          
        </li>
        <li><Link to='/admission'>Admissions</Link></li>
        <li><Link to='/mycolege'>My Colege</Link></li>
      </ul>
    </div>
    <Link to='/' className=" normal-case text-xl">Book Your College</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li> <Link to='/'>Home</Link></li>
        <li>
          <Link to='/colleges'>Colleges</Link>
          
        </li>
        <li><Link to='/admission'>Admissions</Link></li>
        <li><Link to='/mycolege'>My Colege</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/login' className="btn bg-blue-500 text-white">Login <BiSolidLogInCircle className='text-2xl'/></Link>
  </div>
</div>
        </div>
    );
};

export default Header;