import './topbar.css'
import { Link }from "react-router-dom";
export default function Topbar() {
  const user =false;
  return (
    <div className='top'>
      <div className="topleft">
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      <i className="topIcon fa-brands fa-pinterest"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className='topListItem'>
              <Link className="link"to="/" >HOME</Link>
            </li>
            <li className='topListItem'>
            <Link className="link"to="/" >ABOUT</Link>
            </li>
            <li className='topListItem'>
            <Link className="link"to="/" >CONTACT</Link>
            </li>
            <li className='topListItem'>
            <Link className="link"to="/write" >WRITE</Link>
            </li>
            <li className='topListItem'>
              {user && "LOGOUT"}
            
            </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img  className="topImg" src="https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
          ):(
            <ul className='topList'>
              <li className='topListItem'>
            <Link className="link"to="/login" >LOGIN</Link>
            </li>
            <li className='topListItem'>
            <Link className="link"to="/register" >REGISTER</Link>
            </li>
            
            </ul>
          )
        }
     
      <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
