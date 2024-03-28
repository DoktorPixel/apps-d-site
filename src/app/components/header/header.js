'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import './header.css';
import HeaderLogo from 'public/img/header/headerLogo.svg';
import OpenIcon from 'public/img/header/openIcon.svg';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = usePathname();
  const isActive = (path) => {
    return router === path;
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeHandler = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='header'>
      <div className='header-body'>
        <div className='header-logo'>
          <Link href='/' onClick={closeHandler}>
            <Image
              src={HeaderLogo}
              alt='HeaderLogo'
              width={131}
              height={56}
              priority={true}
            />
          </Link>
        </div>
        <nav className={`navigation ${isMenuOpen ? 'burger-menu' : ''}`}>
          <button
            className='burger-button'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Navigation'
          >
            <div id='burgerMenuIcon' className={isMenuOpen ? 'open' : ''}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <ul className={`navigation-list ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link
                className={isActive('/') ? 'active' : ''}
                href='/'
                onClick={closeHandler}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className={isActive('/products') ? 'active' : ''}
                href='/products'
                onClick={closeHandler}
              >
                Products{' '}
                <Image className='openIcon' src={OpenIcon} alt='OpenIcon' />
              </Link>
              <ul className='sub-menu'>
                <li>
                  <Link
                    className={
                      isActive('/products/smart-issue-templates')
                        ? 'active'
                        : ''
                    }
                    href='/products/smart-issue-templates'
                  >
                    Smart Issue Templates
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      isActive('/products/smart-comments') ? 'active' : ''
                    }
                    href='/products/smart-comments'
                  >
                    Smart Comments
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      isActive('/products/smart-time-off') ? 'active' : ''
                    }
                    href='/products/smart-time-off'
                  >
                    Smart Time-off
                  </Link>
                </li>
                <li>
                  <Link
                    className={isActive('/products/rss-feeds') ? 'active' : ''}
                    href='/products/rss-feeds'
                  >
                    RSS Feeds
                  </Link>
                </li>
                {/* <li>
                <NavLink to="/#">Marketplace Connector</NavLink>
              </li> */}
                <li>
                  <Link
                    className={
                      isActive('/products/views-for-jira') ? 'active' : ''
                    }
                    href='/products/views-for-jira'
                  >
                    Views for Jira
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      isActive('/products/ai-issue-creator') ? 'active' : ''
                    }
                    href='/products/ai-issue-creator'
                  >
                    AI Issue Creator
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      isActive('/products/ai-spam-detector') ? 'active' : ''
                    }
                    href='/products/ai-spam-detector'
                  >
                    AI Spam Detector
                  </Link>
                </li>
              </ul>
            </li>
            {/* <li>
            <NavLink to="/#" ">
              Support <img className="openIcon" src={OpenIcon} alt="OpenIcon" />
            </NavLink>
            <ul className="sub-menu">
              <li>
                <NavLink to="/#">Product Help</NavLink>
              </li>
              <li>
                <NavLink to="/#">Product Demo</NavLink>
              </li>
              <li>
                <NavLink to="/#">Documentation</NavLink>
              </li>
              <li>
                <NavLink to="/#">Partners</NavLink>
              </li>
            </ul>
          </li> */}
            <li>
              <Link
                className={isActive('/blog') ? 'active' : ''}
                href='/blog'
                onClick={closeHandler}
              >
                Blog
              </Link>
            </li>
          </ul>
          <Link href='/contact-us'>
            <button className='header-button'>Contact us</button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
