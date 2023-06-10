import './style.scss'

import logo from '../../assets/logo.jpg'

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className='navbar__logo'/>
      <div className="navbar__links">
        <a href="#" role='dropdown'>Courses</a>
        <a href="#">Why Us</a>
        <a href="#">Support</a>
        <a href="#" role='button' className='btn-secondary'>Get Started</a>
      </div>
    </div>
  )
}

export default NavBar;