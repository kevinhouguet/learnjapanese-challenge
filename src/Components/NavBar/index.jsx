import './style.scss'

const NavBar = () => {
  return (
    <div className="navbar">
      <h1 className='navbar__logo'>Bilinguage</h1>
      <div className="navbar__links">
        <a href="#" role='dropdown'>Courses</a>
        <a href="#">Why Us</a>
        <a href="#">Support</a>
        <a href="#" role='button'>Get Started</a>
      </div>
    </div>
  )
}

export default NavBar;