'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar(props: any) {
  let { navClass, navJustify } = props;
  let [isMenu, setisMenu] = useState(false);
  let [activeSection, setActiveSection] = useState('');

 
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const handleScroll = () => {
      let currentSection = '';
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionOffset = window.pageYOffset + sectionTop;

        // Adjust 50 to control how early the section becomes active
        if (window.pageYOffset >= sectionOffset - 50) {
          currentSection = `#${section.getAttribute('id')}`;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    function windowScroll() {
      const navbar = document.getElementById('topnav');
      if (window.pageYOffset >= 50) {
        navbar?.classList.add('nav-sticky');
      } else {
        navbar?.classList.remove('nav-sticky');
      }
    }

    window.addEventListener('scroll', windowScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', windowScroll);
    };
  }, []);


  const toggleMenu = () => {
    setisMenu(!isMenu);
    const anyelement = document.getElementById('navigation') || undefined;
    if (anyelement) {
      const anchorArray = Array.from(anyelement.getElementsByTagName('a'));
      anchorArray.forEach((element) => {
        element.addEventListener('click', (elem: any) => {
          const target = elem.target.getAttribute('href');
          if (target !== '') {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling;
              submenu.classList.toggle('open');
            }
          }
        });
      });
    }
  };

  return (
    <nav
      id="topnav"
      className={`defaultscroll ${navClass === 'nav-light top-12 relative' ? '' : navClass === 'nav-sticky' ? 'bg-white dark:bg-slate-900' : ''}`}
    >
      <div className="container relative">
        {navClass === 'nav-light' ? (
          <Link className="logo" href="#home">
            <span className="inline-block dark:hidden">
              <Image src="/assets/images/logo/1.png" className="l-dark" width={138} height={24} alt="" />
              <Image src="/assets/images/logo/2.png" className="l-light" width={138} height={24} alt="" />
            </span>
            <Image src="/assets/images/logo/2.png" width={138} height={24} className="hidden dark:inline-block" alt="" />
          </Link>
        ) : (
          <Link className="logo" href="#home">
            <Image src="/assets/images/logo/2.png" width={138} height={24} className="inline-block dark:hidden" alt="" />
            <Image src="/assets/images/logo/1.png" width={138} height={24} className="hidden dark:inline-block" alt="" />
          </Link>
        )}

        <div className="menu-extras">
          <div className="menu-item">
            <Link href="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          </div>
        </div>

        {navClass !== 'nav-light' ? (
          <ul className="buy-button list-none space-x-1 mb-0">
            <li className="inline mb-0">
              <Link href="#" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white capitalize">
                Get In Touch
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="buy-button list-none space-x-1 mb-0">
            <li className="inline mb-0">
              <Link href="#">
                <span className="login-btn-primary">
                  <span className="py-2 px-2 inline-flex items-center justify-center tracking-wide transition duration-500 ease-in-out text-base text-center rounded-full bg-indigo-600/5 bg-indigo-600 border border-indigo-600/10 hover:border-primary text-indigo-600   capitalize">
                    Get In Touch
                  </span>
                </span>
                <span className="login-btn-light">
                  <span className="py-2 px-2 inline-flex items-center justify-center tracking-wide transition duration-500 ease-in-out text-base text-center rounded-full bg-transparent text-white dark:bg-slate-900 dark:hover:bg-gray-700 border dark:border-gray-700 dark:hover:border-gray-700 capitalize">
                    Get In Touch
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        )}

        <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
          <ul className={`navigation-menu ${navClass} ${navJustify}`}>
            <li className={activeSection === '#home' ? 'active' : ''}>
              <Link href="#home" className="sub-menu-item">
                Home
              </Link>
            </li>
            <li className={activeSection === '#about' ? 'active' : ''}>
              <Link href="#about" className="sub-menu-item">
                About Me
              </Link>
            </li>
            <li className={activeSection === '#services' ? 'active' : ''}>
              <Link href="#services" className="sub-menu-item">
                My Services
              </Link>
            </li>
            <li className={activeSection === '#portfolio' ? 'active' : ''}>
              <Link href="#portfolio" className="sub-menu-item">
                My Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
