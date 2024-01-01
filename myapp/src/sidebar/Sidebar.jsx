import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img  className="sideimg"src="https://images.pexels.com/photos/953057/pexels-photo-953057.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem velit . Deleniti?</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
         <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinemas</li>

         </ul>
      </div>
      <div className="sidebarIte">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook"></i>
      <i className="sidebarIcon fa-brands fa-instagram"></i>
      <i className="sidebarIcon fa-brands fa-pinterest"></i>
      <i className="sidebarIcon fa-brands fa-twitter"></i> 
        </div>
      </div>
    </div>
  )
}
