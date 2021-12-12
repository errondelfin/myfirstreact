const NavBar =() =>{
return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">ICS2608</a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link" href="/">Home</a>
          <a className="nav-link" href="/employees">Employees</a>
          <a className="nav-link" href="/add ">Add Employees</a>
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </div>
    </div>
  </div>
</nav>

)

}

export default NavBar;