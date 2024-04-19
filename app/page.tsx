export default function Page(){
  return (
    <div>
      <header className="header">
        <div className="container header__container">
          <a href="#" className="header__logo">Your name</a>
          <nav className="header__nav">
            <ul className="header__list">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </nav>
          <div className="mobile-menu">
            <span className="mobile-menu__1"></span>
            <span className="mobile-menu__2"></span>
            <span className="mobile-menu__3"></span>
          </div>
        </div>
      </header>
    </div>
  )
}