import React from 'react';
import './Navbar.css';
import { Button } from './Button'
import {Dropdown, DropdownButton } from 'react-bootstrap'

 
class Navbar extends React.Component{
	state = { clicked: false}

	handleClick = () => {
		this.setState({clicked : !this.state.clicked})
	}
	

	render(){
		return(
		<nav className="NavbarItems nav-pills ">
			<div >
			<h1 className="navbar-logo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className='fas fa-university' ></i><br></br>STUDY BOX</h1>
			</div>
			<div className="menu-icon" onClick={this.handleClick}>
				<i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
			</div>

			<ul className={this.state.clicked ? 'nav-menu active ' : 'nav-menu '}>
					<li >
						<a className="nav-links" href='/'>
						<i class="fas fa-home"></i>Home
							</a>
					</li>
					<li >
					<a className="nav-links" href="/FAboutUs">
					<i class="fa fa-users" ></i>&nbsp;About Us
							</a>
					</li>
                    <li class="dropdown">
                     <span class="dropbtn"> <i class="fa fa-university"> </i>Admission</span>
                     <div class="dropdown-content">
						 <li class="inner-dropdown">
						 <a class="inner-dropbtn">Courses Details</a>
						 <div class="inner-dropdown-content">
							 <a href="/DAC">DAC</a>
							 <a href="/DAI">DAI</a>
						 </div>
						  </li>
                         <a href="/Form">Registration Form</a>
                             </div>
                         </li>
						 <li >
						<a className="nav-links" href='/Placement'>
						<i class="fa fa-graduation-cap"> </i>Placement
							</a>
					</li>

				</ul>
			<Dropdown >
    <Dropdown.Toggle  id="dropdown-item-button"><i class="fa fa-user"> &nbsp;</i>
    LogIn
    </Dropdown.Toggle>

<Dropdown.Menu className='dropdownlist'>
  <Dropdown.Item href="/adminlogin"> <i class="fas fa-user-circle"> &nbsp;</i>Admin Login</Dropdown.Item>
<Dropdown.Item href="/StudentLogin"><i class="fas fa-user-circle"> &nbsp;</i>Student Login</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
        </nav>


		);

}

}
export default Navbar;
