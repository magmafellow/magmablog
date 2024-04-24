import type { Metadata } from "next";
import { Inter } from "next/font/google";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="wrapper">
          <header className="header">
            <div className="container_ header__container">
              <a href="#" className="header__logo">
                Your name
              </a>
              <nav className="header__nav">
                <ul className="header__list">
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Newsletter</a>
                  </li>
                </ul>
              </nav>
              <div className="mobile-menu">
                <span className="mobile-menu__1"></span>
                <span className="mobile-menu__2"></span>
                <span className="mobile-menu__3"></span>
              </div>
            </div>
          </header>

          {/* <section className="the-blog">
          <div className="container_ the-blog__container">
            <p className="the-blog__paragraph">the blog</p>
          </div>
        </section> */}
          <div className="container_ content-container">{children}</div>

          <footer className="footer">
            <div className="container_ footer__container">
              <ul className="footer__links">
                <li>
                  <a href="#">Twitter (X)</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">Email</a>
                </li>
                <li>
                  <a href="#">RSS feed</a>
                </li>
                <li>
                  <a href="#">Add to Feedly</a>
                </li>
              </ul>
              <div className="footer__date">© 2023</div>
            </div>
          </footer>
        </div>
  );
}
