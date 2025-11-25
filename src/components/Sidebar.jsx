import { Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";



function Sidebar(){
  
    const {user,} = useStateContext();
    return (
        <div>
            <div className="main-sidebar sidebar-style-2">
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <a href="index.html"> <img alt="image" src="/src/assets/img/logo.png" className="header-logo" /> <span className="logo-name">Otika</span>
          </a>
        </div>
        <ul className="sidebar-menu">
          <li className="menu-header">Main</li>
          <li className="dropdown active">
            <Link to={"/"} className="nav-link"><i data-feather="monitor" /><span>Dashboard</span></Link>
          </li>
          <li className="dropdown">
            <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="user" /><span>User</span></a>
            <ul className="dropdown-menu">
                {
                    user &&(
                        <>
                        <li><Link to={"/profile"} className="nav-link">My Profile</Link></li>
                        <li><Link to={"/user/userlist"} className="nav-link">User list</Link></li>
                        <li><Link to={"/user/add_user"} className="nav-link">Add User</Link></li>
                        
                        
                        </>
                    )
                }         
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="command" /><span>Apps</span></a>
            <ul className="dropdown-menu">
              <li><a className="nav-link" href="chat.html">Chat</a></li>
              <li><a className="nav-link" href="portfolio.html">Portfolio</a></li>
              <li><a className="nav-link" href="blog.html">Blog</a></li>
              <li><a className="nav-link" href="calendar.html">Calendar</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="mail" /><span>Email</span></a>
            <ul className="dropdown-menu">
              <li><a className="nav-link" href="email-inbox.html">Inbox</a></li>
              <li><a className="nav-link" href="email-compose.html">Compose</a></li>
              <li><a className="nav-link" href="email-read.html">read</a></li>
            </ul>
          </li>
          <li className="menu-header">UI Elements</li>
          <li className="dropdown">
            <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="copy" /><span>Basic
                Components</span></a>
            <ul className="dropdown-menu">
              <li><a className="nav-link" href="alert.html">Alert</a></li>
              <li><a className="nav-link" href="badge.html">Badge</a></li>
              <li><a className="nav-link" href="breadcrumb.html">Breadcrumb</a></li>
              <li><a className="nav-link" href="buttons.html">Buttons</a></li>
              <li><a className="nav-link" href="collapse.html">Collapse</a></li>
              <li><a className="nav-link" href="dropdown.html">Dropdown</a></li>
              <li><a className="nav-link" href="checkbox-and-radio.html">Checkbox &amp; Radios</a></li>
              <li><a className="nav-link" href="list-group.html">List Group</a></li>
              <li><a className="nav-link" href="media-object.html">Media Object</a></li>
              <li><a className="nav-link" href="navbar.html">Navbar</a></li>
              <li><a className="nav-link" href="pagination.html">Pagination</a></li>
              <li><a className="nav-link" href="popover.html">Popover</a></li>
              <li><a className="nav-link" href="progress.html">Progress</a></li>
              <li><a className="nav-link" href="tooltip.html">Tooltip</a></li>
              <li><a className="nav-link" href="flags.html">Flag</a></li>
              <li><a className="nav-link" href="typography.html">Typography</a></li>
            </ul>
          </li>
          
         
          <li className="dropdown">
            <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="chevrons-down" /><span>Multilevel</span></a>
            <ul className="dropdown-menu">
              <li><a href="#">Menu 1</a></li>
              <li className="dropdown">
                <a href="#" className="has-dropdown">Menu 2</a>
                <ul className="dropdown-menu">
                  <li><a href="#">Child Menu 1</a></li>
                  <li className="dropdown">
                    <a href="#" className="has-dropdown">Child Menu 2</a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Child Menu 1</a></li>
                      <li><a href="#">Child Menu 2</a></li>
                    </ul>
                  </li>
                  <li><a href="#"> Child Menu 3</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>

    
        </div>
    )
}

export default Sidebar;