import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
   
    const handleLogOut =()=>{
        logOut()
        .then(()=>{

        })
        .catch(error=>{
            console.log(error)
        })
    }
  
  
    return (
        <div>
           
<div className="flex  justify-start items-center navbar bg-primary text-primary-content font-bold">
  <a className="btn btn-ghost normal-case text-xl ">Auth Master</a>
 <div className=''>
 <Link className="btn btn-ghost normal-case text-xl " to={'/'}>Home</Link>
 <Link className="btn btn-ghost normal-case text-xl " to={'/orders'}>Orders</Link>
{ user && 
 <Link className="btn btn-ghost normal-case text-xl " to={'/profile'}>Profile</Link>

}
  <Link className="btn btn-ghost normal-case text-xl " to={'/login'}>Login</Link>
  <Link className="btn btn-ghost normal-case text-xl " to={'/register'}>Register</Link>
   {
    user? <><span>{user.email}</span> <button onClick={handleLogOut} className="btn btn-active">Sign out</button></>: <Link to={'/login'}>Login</Link>
   }
 </div>
</div>
        </div>
    );
};

export default Header;